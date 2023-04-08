export { createHome };

const createHome = function () {
  const content = document.getElementById("content");
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  content.append(navbar);

  const h2 = document.createElement("h2");
  h2.classList.add("push-right");
  h2.textContent = "fabric";

  navbar.append(h2);

  const navbarItemOne = document.createElement("p");
  navbarItemOne.textContent = "home";
  navbarItemOne.classList.add("navbar__item");
  navbar.append(navbarItemOne);

  const navbarItemTwo = document.createElement("p");
  navbarItemTwo.textContent = "menu";
  navbarItemTwo.classList.add("navbar__item");
  navbar.append(navbarItemTwo);

  const navbarItemThree = document.createElement("p");
  navbarItemThree.textContent = "contact";
  navbarItemThree.classList.add("navbar__item");
  navbar.append(navbarItemThree);

  const container = document.createElement("div");
  container.classList.add("container");
  content.append(container);

  const textWrapper = document.createElement("div");
  textWrapper.classList.add("textWrapper");
  container.append(textWrapper);

  const header = document.createElement("h1");
  header.textContent = "SOURUFŪDO";
  textWrapper.append(header);
  const p = document.createElement("p");
  p.textContent = "alimento para el alma";
  textWrapper.append(p);

  const wrapper = document.createElement("div");
  wrapper.classList.add("grid-container");
  content.append(wrapper);

  const divLeft = document.createElement("div");
  divLeft.classList.add("divLeft");
  const title = document.createElement("h2");
  title.textContent = "Fusión en Pasión";
  title.classList.add("block-title");
  const text1 = document.createElement("p");
  const text2 = document.createElement("p");
  text1.textContent =
    "Abrimos nuestras puertas en Palermo Hollywood en el año 2008, con nuestro primer resto, delivery & take away, teniendo como norte el brindar un nuevo concepto culinario en la Ciudad de Buenos Aires, ofreciendo máxima calidad al mejor precio posible.";
  text2.textContent =
    "Gracias al apoyo de nuestros clientes, experimentamos una explosión de crecimiento en el mercado. Somos diseñadores del buen gusto, y nos esforzamos para que absolutamente cada ingrediente componga una pieza perfecta.";
  text1.classList.add("block-text");
  text2.classList.add("block-text");
  const text3 = document.createElement("p");
  text3.textContent = "VIVÍ LA EXPERIENCIA FABRIC";
  text3.classList.add("block-text-end");
  divLeft.append(title);
  divLeft.append(text1);
  divLeft.append(text2);
  divLeft.append(text3);

  const divRight = document.createElement("div");
  divRight.classList.add("divRight");
  wrapper.append(divLeft);
  wrapper.append(divRight);
};
