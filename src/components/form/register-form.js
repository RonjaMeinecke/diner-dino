//   return `
//         // <form class="form">
//         //   <h2>Reset Password</h2>
//         //   <p>Please enter your email to receive a link to create a new password via email</p>
//         //   <input class="input-btn" placeholder="Your Email" />
//         //   <input type="submit" />
//         // </form>
//       `;
// }
export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.innerText = "register";
  button.className = "btn";

  function register() {
    alert("registered");
  }

  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "reset password";

  const text = document.createElement("p");
  text.innerText =
    "please enter your email to receive a link to create a new password via email";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "email";
  input.className = "input";

  form.append(title, text, input, button);

  return form;
}
