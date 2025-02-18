import { dinosaurs, navItems, person } from "../data/data.js";

export const home = (req, res) => {
  res.render("pages/home", {
    title: "Dinosaurs around the world",
    content: "Welcome to the world of dinosaurs",
    navItems,
  });
};

export const about = (req, res) => {
  res.render("pages/default", {
    title: "About Us",
    message: "This is a page about dinosaurs",
    team: ["T-Rex", "velociraptor", "stegosaurus"],
    navItems,
  });
};

export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    person,
    navItems,
  });
};

export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy",
    message: "Dinosaurs are protective of their privacy",
    team: false,
    navItems,
  });
};

export const dinosaursPage = (req, res) => {
  res.render("pages/dinosaurs", {
    title: "Dinosaurs",
    navItems,
    dinosaurs,
  });
};
