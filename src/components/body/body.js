import "./styles.css";
import Nav from "../../components/nav/nav.js";
import home from "../../pages/home/home";
import menu from "../../pages/menu/menu";
import contact from "../../pages/contact/contact";

export default function () {
  const main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(Nav());
  const content = document.getElementById("content");
  content.appendChild(contact());
  main.appendChild(content);

  return main;
}