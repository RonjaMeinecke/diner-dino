// export function createElement(tagName, props) {
//   const element = document.createElement(tagName);
//   Object.assign(element, props);

//   return element;
// }
export function createELement(tagName, props) {
  const element = document.createElement(tagName);
  const { children, ...other } = props;
  Object.assign(element, other);
  if (children) {
    element.append(...children);
  }
  return element;
}
