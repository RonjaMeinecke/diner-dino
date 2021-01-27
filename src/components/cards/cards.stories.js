import "./cards.css";
import cardsMexican from "./mexican.html";
import cardsKorean from "./korean.html";
import cardsJapanese from "./japanese.html";

export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const Mexican = () => cardsMexican;
export const Korean = () => cardsKorean;
export const Japanese = () => cardsJapanese;
