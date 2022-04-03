import "./styles.css";

export default function () {
  const content = document.getElementById("content");

  content.appendChild(main());
  return content;
}

const title = () => {
  const title = document.createElement("div");
  title.classList.add("title");

  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant Name";

  const div = document.createElement("div");
  div.textContent = "Some Ipsum Lorem";

  title.appendChild(h1);
  title.appendChild(div);

  return title;
};

const main = () => {
  const main = document.createElement("div");
  main.classList.add("main");

  main.appendChild(title());
  main.appendChild(about());

  return main;
};

const about = () => {
  const h3 = document.createElement("h3");
  h3.textContent = "Monday - Sunday 9 - 7";

  return h3;
};
