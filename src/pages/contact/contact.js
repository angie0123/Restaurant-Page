export default function () {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  contact.appendChild(heading());
  contact.appendChild(body());

  return contact;
}

const heading = () => {
  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  return heading;
};

const body = () => {
  const body = document.createElement("div");
  body.classList.add("contact-body");
  body.appendChild(contactForm());
  // body.appendChild(address());
  return body;
};

const contactForm = () => {
  const contactForm = document.createElement("form");
  contactForm.classList.add("form");
  const heading = document.createElement("div");
  heading.textContent = "We'd love to hear from you";

  contactForm.appendChild(heading);

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  nameLabel.setAttribute("for", "name");

  const nameDiv = document.createElement("div");

  const name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("placeholder", "Your name");
  name.setAttribute("id", "name");
  name.setAttribute("name", "name");
  name.required = true;

  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(name);
  contactForm.appendChild(nameDiv);

  const emailDiv = document.createElement("div");

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email";

  const email = document.createElement("input");
  email.setAttribute("type", "email");
  email.setAttribute("placeholder", "your email");
  email.setAttribute("id", "email");
  email.setAttribute("name", "email");
  email.required = true;

  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(email);
  contactForm.appendChild(emailDiv);

  const messageDiv = document.createElement("div");

  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message");
  messageLabel.textContent = "Give us a message";

  const message = document.createElement("textarea");
  message.setAttribute("id", "message");
  message.setAttribute("placeholder", "Your message");
  message.setAttribute("rows", "4");
  message.setAttribute("cols", "50");
  message.setAttribute("name", "message");
  message.required = true;

  messageDiv.appendChild(messageLabel);
  messageDiv.appendChild(message);
  contactForm.appendChild(messageDiv);

  const button = document.createElement("button");
  button.textContent = "Send";

  contactForm.appendChild(button);

  return contactForm;
};
