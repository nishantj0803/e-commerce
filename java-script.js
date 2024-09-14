const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Samsung Galaxy S21 Ultra",
    price: 999,
    colors: [
      {
        code: "black",
        img: "./img/mobile1.png",
      },
      {
        code: "darkblue",
        img: "./img/mobile1_alt.png",
      },
    ],
  },
  {
    id: 2,
    title: "iPhone 13 Pro Max",
    price: 1099,
    colors: [
      {
        code: "silver",
        img: "./img/iphone13pro.png",
      },
      {
        code: "gold",
        img: "./img/iphone13pro_alt.png",
      },
    ],
  },
  {
    id: 3,
    title: "OnePlus 9 Pro",
    price: 899,
    colors: [
      {
        code: "green",
        img: "./img/oneplus9pro.png",
      },
      {
        code: "black",
        img: "./img/oneplus9pro_alt.png",
      },
    ],
  },
  {
    id: 4,
    title: "Google Pixel 6",
    price: 799,
    colors: [
      {
        code: "white",
        img: "./img/pixel6.png",
      },
      {
        code: "black",
        img: "./img/pixel6_alt.png",
      },
    ],
  },
  {
    id: 5,
    title: "Xiaomi Mi 11",
    price: 749,
    colors: [
      {
        code: "blue",
        img: "./img/mi11.png",
      },
      {
        code: "black",
        img: "./img/mi11_alt.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
