let productsContainer = document.querySelector(".products");
let boxes = document.querySelectorAll(".box");
let Arrows = document.querySelectorAll("i.arrows");
let iconsEvent = document.querySelectorAll(" .box i");
let quickViewSection = document.querySelector(".quick-view");
let productBoxes = document.querySelectorAll(".box");
let overlay = document.querySelector(".overlay");
let header = document.querySelector(".header");
let mainCart = document.querySelector(".main-cart");
let productsBig = document.querySelector(".products");
let cartItems = document.querySelector(".cart-items");
let finalTotal = document.querySelector(".final-total");
let wishCont = document.querySelector(".wish-holder .wish-list-cont");
let productsObj = [
  {
    id: 0,
    name: "beautiful Toy",
    desc: "Lorem ipsum dolor sit amet.sit amet sit ametsit amet sit amet",
    price: "170.00",
    pricetype: "EGP",
    img: "Spike_NH.png",
  },
  {
    id: 1,
    name: "beautiful Toy",
    desc: "Lorem ipsum dolor sit amet.sit amet sit ametsit amet sit amet",
    price: "150.00",
    pricetype: "EGP",
    img: "download (1).jfif",
  },
  {
    id: 2,
    name: "beautiful Toy",
    desc: "Lorem ipsum dolor sit amet.sit amet sit ametsit amet sit amet",
    price: "150.00",
    pricetype: "EGP",
    img: "download (2).jfif",
  },
  {
    id: 3,
    name: "beautiful Toy",
    desc: "Lorem ipsum dolor sit amet.sit amet sit ametsit amet sit amet",
    price: "150.00",
    pricetype: "EGP",
    img: "images (1).jfif",
  },
  {
    id: 4,
    name: "beautiful Toy",
    desc: "Lorem ipsum dolor sit amet.sit amet sit ametsit amet sit amet",
    price: "150.00",
    pricetype: "EGP",
    img: "download.jfif",
  },
  {
    id: 5,
    name: "beautiful Toy",
    desc: "Lorem ipsum dolor sit amet.sit amet sit ametsit amet sit amet",
    price: "150.00",
    pricetype: "EGP",
    img: "images.jfif",
  },
];
//slider//////////////////
Arrows.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("left")) {
      productsContainer.scrollBy(-295, 0);
    } else {
      productsContainer.scrollBy(295, 0);
    }
  });
});

function mainProductsHome() {
  for (let i = 0; i < productsObj.length; i++) {
    productsBig.innerHTML += `
    <div class="box">
                 <div class="img">
                    <img src="./imgs/${productsObj[i].img}" alt="">
                 </div>
                <div class="add-to-cart">
                   
                    <div class="items view">
                        <span>Quick View</span>
                         <i class="fa-regular fa-eye view"  onclick="addEleToQuickView(${i})">
                         </i>
                     </div>
                     <div class="items cart">
                      <span>Cart</span>
                      <i class="fa-solid fa-plus cart" 
                       onclick="addToCart(${productsObj[i].id})"
                      "></i>
                    </div>
                 </div>
                 <div class="info">
                   <h2> ${productsObj[i].name}${productsObj[i].id}</h2>
                     <p>${productsObj[i].desc}</p>
                     <span>${productsObj[i].price}<small>${productsObj[i].pricetype}
                     </small>
                     </span>
                </div>
    `;
  }
}
mainProductsHome();
let secContainer = document.querySelector(".clothes-sec .products");
function demo() {
  for (let i = 0; i < productsObj.length; i++) {
    secContainer.innerHTML += `
    <div class="box">
                 <div class="img">
                    <img src="./imgs/${productsObj[i].img}" alt="">
                 </div>
                <div class="add-to-cart">
                   
                    <div class="items view">
                        <span>Quick View</span>
                         <i class="fa-regular fa-eye view"  onclick="addEleToQuickView(${i})">
                         </i>
                     </div>
                     <div class="items cart">
                      <span>Cart</span>
                      <i class="fa-solid fa-plus cart" 
                       onclick="addToCart(${productsObj[i].id})"
                      "></i>
                    </div>
                 </div>
                 <div class="info">
                   <h2> ${productsObj[i].name}${productsObj[i].id}</h2>
                     <p>${productsObj[i].desc}</p>
                     <span>${productsObj[i].price}<small>${productsObj[i].pricetype}
                     </small>
                     </span>
                </div>
    `;
  }
}
demo();
demo();
let allOfI = document.querySelectorAll(".box i");
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("cart")) {
    mainCart.style.width = "400px";
    if (window.matchMedia("(max-width:767px")) {
      mainCart.style.width = "350px";
    }
    mainCart.style.display = "block";
    mainCart.style.right = "0";
    overlay.style.display = "block";
    header.style.display = "none";
    emptyCart();
    updateCart();
  }

  if (e.target.classList.contains("view")) {
    quickViewSection.style.width = "400px";
    if (window.matchMedia("(max-width:767px)")) {
      quickViewSection.style.width = "350px";
    }
    quickViewSection.style.display = "block";
    quickViewSection.style.right = "0";
    overlay.style.display = "block";
    header.style.display = "none";
  }
});

function closeSideSection() {
  quickViewSection.style.width = "0";
  quickViewSection.style.right = "-100";
  mainCart.style.width = "0";
  mainCart.style.right = "-100";
  overlay.style.display = "none";
  header.style.display = "flex";
}
function addEleToQuickView(i) {
  quickViewSection.innerHTML = `
  <span class="close" onclick="closeSideSection()">
   <i class="fa-solid fa-xmark"></i>
 </span>
   <div class="content">

   <img src="./imgs/${productsObj[i].img}" alt="">
    <h1>${productsObj[i].name}</h1>
     <p>${productsObj[i].desc}</P>
     <span>${productsObj[i].price}<small>${productsObj[i].pricetype}</small></span>
     <div class="btns">
    <button class="cart" onclick="addToCart(${productsObj[i].id} )">Add to Cart</button>
  
     </div>
   </div>
  `;
}
let cart = JSON.parse(localStorage.getItem("item")) || [];
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumber("plus", id);
  } else {
    let items = productsObj.find((product) => product.id === id);
    cart.push({
      ...items,
      numberOfUnits: 1,
    });
    updateCart();
  }
}

function updateCart() {
  renderCartIteme();
  renderSubTotal();
  localStorage.setItem("item", JSON.stringify(cart));
  document.querySelector("span.number-of-cart").innerHTML = cart.length;
}
document.querySelector("span.number-of-cart").innerHTML = cart.length;

function renderSubTotal() {
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
  });
  finalTotal.innerHTML = `${totalPrice}.00 <small>EGP</small>`;
}
function emptyCart() {
  cartItems.innerHTML = `<h1 class="empty">Cart Is Empty</h1>`;
  document.querySelector(".sub-total").style.display = "none";
}
function renderCartIteme() {
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    emptyCart();
  } else {
    cart.forEach((ele) => {
      cartItems.innerHTML += `
      <div class="content">
      <span class="removeitemcart" onclick="removeItemFromCart(${ele.id})">X</span>
      <div class="head">
      <img src="./imgs/${ele.img}" alt="">
          <h1>${ele.name}</h1>
          <div class="inputs" > 
          <div class=minus onclick="changeNumber('minus',${ele.id})">
          <i class="fa-sharp fa-solid fa-minus"></i></div>
          <div class=units-numer>${ele.numberOfUnits}</div>
          <div class=plus onclick="changeNumber('plus',${ele.id})">
          <i class="fa-solid fa-plus"></i></div>
          <span class="cart-price">x${ele.price}</span>
          </div>
          </div>
          <hr/>
         
        `;
    });
    document.querySelector(".sub-total").style.display = "block";
  }
}
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

function changeNumber(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "plus") {
        numberOfUnits++;
      } else if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });
  updateCart();
}

let newOnw = document.querySelector(".new");

newOnw.onclick = () => {
  window.location = "./cartPage/cart.html";
};
