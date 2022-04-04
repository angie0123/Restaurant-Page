import "./styles.css";

const mainDishes = [
  {
    name: "Herb Chicken",
    description: "Roasted with lemon herb spices and sauce",
    price: "15",
  },
  {
    name: "Roasted Cauliflower",
    description: "Spiced cauliflower with jasmine rice",
    price: "7",
  },
  {
    name: "Halibut",
    description: "Pan roasted and served with wine reduction",
    price: "24",
  },
];

const sideDishes = [
  {
    name: "Sweet potato fries",
    description: "Fried and seasoned with lemon chili",
    price: "8",
  },
  {
    name: "Garlic bread",
    description: "Buttery homestyle bread with garlic",
    price: "4",
  },
];

const desserts = [
  {
    name: "Chocolate mousse",
    description: "Decadent sweet chocolate mousse with hazelnut trim",
    price: "11",
  },
  {
    name: "Sorbet",
    description: "Lemon and lime sorbet with fresh ginger",
    price: "8",
  },
  {
    name: "Panna Cotta",
    description:
      "Vanilla and white chocolate cream, strawberry and raspberry puree",
    price: "10",
  },
];

export default function () {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(title());
  menu.appendChild(createDiv("main", mainDishes));
  menu.appendChild(createDiv("sides", sideDishes));
  menu.appendChild(createDiv("desserts", desserts));

  return menu;
}

const title = () => {
  const title = document.createElement("div");
  title.classList.add("menu-title");
  title.textContent = "Restaurant Menu";
  return title;
};

const createDiv = (name, dishes) => {
  const body = document.createElement("div");
  const heading = document.createElement("div");
  heading.classList.add("heading");
  heading.textContent = name;

  body.appendChild(heading);
  for (let dish of dishes) {
    const item = document.createElement("div");
    item.classList.add("dish");

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = dish.name;
    item.appendChild(name);

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = dish.description;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = dish.price;

    description.appendChild(price);
    item.appendChild(description);

    body.appendChild(item);
  }

  return body;
};
