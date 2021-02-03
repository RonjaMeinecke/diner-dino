function createpinInputElement() {
  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "✳︎";
  input.classNme = "input";
  input.maxLength = "1";

  return input;
}

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "we have sent a one time password to your mobile";

  const text = document.createElement("p");
  text.innerText =
    "please check your mobile number 017*****98 to continue to reset your password";

  const pinOne = createpinInputElement();
  const pinTwo = createpinInputElement();
  const pinThree = createpinInputElement();
  const pinFour = createpinInputElement();

  const passwordContainer = document.createElement("div");
  passwordContainer.className = "form__pin";
  passwordContainer.append(pinOne, pinTwo, pinThree, pinFour);

  const button = document.createElement("button");
  button.innerText = "next";
  button.className = "btn";

  const hint = document.createElement("p");
  hint.innerText = "didn't receive?";
  hint.className = "form__hint";

  const resendLink = document.createElement("a");
  resendLink.innerText = "click here";
  resendLink.href = "#";

  hint.append(resendLink);

  form.append(title, text, passwordContainer, button, hint);
  return form;
}
