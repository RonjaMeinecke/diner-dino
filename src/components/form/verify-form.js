import { createElement } from "../utils/createElement";

function createInputElement() {
  return createElement("input", {
    className: "input",
    placeholder: "*",
    type: "number",
    maxLength: 1,
    min: 0,
    max: 9,
  });
}

export function createVerifyForm() {


  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "we have sent a one time password to your mobile",
      }),
      createElement("p", {
        innerText:
          "please check your mobile number 071*****12 continue to reset your password",
      }),
      createElement("div", {
        className: "form__otp",
        children: [inputElement1, inputElement2, inputElement3, inputElement4],
      }),
      createElement("input", {
        type: "submit",
        innerText: "next",
        className: "btn",
      }),
      createElement("p", {
        innerText: "didn't receive?",
        className: "form__hint",
        children: [
          createElement("a", {
            innerText: "click here",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();
      const password =
        inputElement1.value +
        inputElement2.value +
        inputElement3.value +
        inputElement4.value;

      if (password === "3217") {
        alert("you got it!");
      } else {
        alert("nope, try again!");
      }
    },
  });
}
