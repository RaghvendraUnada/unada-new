import fs from "fs";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";
import { listen } from "listhen";
import sirv from "sirv";

const DEV_ENV = "development";
const savedPages = {};
const bootstrap = async () => {
  const app = express();
  let vite;

  if (process.env.NODE_ENV === DEV_ENV) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);
  } else {
    app.use(
      sirv("dist/client", {
        gzip: true,
      })
    );
  }

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    let template, render;

    try {
      if (process.env.NODE_ENV === DEV_ENV) {
        console.log("DEV VITE RUNNING SSR");
        template = fs.readFileSync(path.resolve("./index.html"), "utf-8");

        template = await vite.transformIndexHtml(url, template);

        render = (await vite.ssrLoadModule("./src/entry-server.jsx")).render;
      } else {
        template = fs.readFileSync(
          path.resolve("dist/client/index.html"),
          "utf-8"
        );
        render = (await import("./dist/server/entry-server.js")).render;
      }

      // savedPages[url] = savedPages[url] || (await render({ path: url }));
      savedPages[url] = await render({ path: url });

      const appHtml = savedPages[url];

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.statusCode = 200;
      res.send(html);
    } catch (error) {
      console.log("Error In Vite");
      vite.ssrFixStacktrace(error);
      next(error);
    }
  });

  return { app };
};

bootstrap()
  .then(async ({ app }) => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(console.error);
