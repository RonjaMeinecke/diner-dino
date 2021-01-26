import "./button.css";
import buttonfilled from "./button-filled.html";
import buttonborder from "./button-border.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const filled = () => buttonfilled;
export const border = () => buttonborder;
