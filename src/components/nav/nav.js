import "./styles.css";
import home from "../../pages/home/home.js";

export default function () {
  const nav = document.createElement("nav");

  const ul = linkList(["home", "menu", "contact"]);
  nav.appendChild(ul);
  return nav;
}

const linkList = (linkNames) => {
  const ul = document.createElement("ul");
  for (let link of linkNames) {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.textContent = link;
    anchor.addEventListener("click", () => {
      changeContent(link);
    });
    listItem.appendChild(anchor);
    ul.appendChild(listItem);
  }
  return ul;
};

const changeContent = (link) => {
  const content = document.getElementById("content");
  switch (link) {
    case "home":
      content.replaceChildren(home());
      break;
    default:
      break;
  }
};
