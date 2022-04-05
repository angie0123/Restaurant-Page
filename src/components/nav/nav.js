import "./styles.css";
import Home from "../../pages/home/home.js";
import Menu from "../../pages/menu/menu";
import Contact from "../../pages/contact/contact";

export default function () {
  const navContainer = document.createElement("div");
  navContainer.classList.add("nav-container");
  const nav = document.createElement("nav");

  const ul = linkList(["home", "menu", "contact"]);
  nav.appendChild(ul);
  navContainer.appendChild(nav);
  return navContainer;
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
      content.replaceChildren(Home());
      break;

    case "menu":
      content.replaceChildren(Menu());
      break;

    case "contact":
      content.replaceChildren(Contact());
      break;

    default:
      break;
  }
};
