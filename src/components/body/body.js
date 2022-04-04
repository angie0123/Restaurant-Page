import "./styles.css";
import Nav from "../../components/nav/nav.js";
import home from "../../pages/home/home";

export default function () {
  const main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(Nav());
  const content = document.getElementById("content");
  content.appendChild(home());
  main.appendChild(content);

  return main;
}
