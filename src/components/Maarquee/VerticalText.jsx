import VerticalScrollingList from "./VerticalScrollingList";
import CareersText from "../CareersText";

const clients = [
  "Oho Gujarati",
  "Cineman Productions",
  "Barter Exchange of India",
  "Medibank",
  "Unispace",
  " Ganesh Housing ",
  "Khushi Advertising",
  "POTS",
  "White Valley Advisor",
  "Indo Colchem Ltd",
  "JITO Ahmedabad",
  "Mirash Industries",
  "Strategic Investors LLP",
  "Clear Water",
  "May Sixty",
  "Tulsi Dyechem",
  "Ashwika Warehousing",
];

const RandomFirstList = [...clients].sort(() => Math.random() - 0.6);
const RandomSecondList = [...clients].sort(() => Math.random() - 0.6);
const RandomThirdList = [...clients].sort(() => Math.random() - 0.6);

const VerticalText = (props) => {
  return (
    <VerticalScrollingList fromBottom>
      {clients.map((client, idx) => {
        return (
          <CareersText
            key={idx}
            TextVertical={client}
            directions={props.directions}
          />
        );
      })}
    </VerticalScrollingList>
  );
};

export default VerticalText;
