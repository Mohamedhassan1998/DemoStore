let contentHolder = document.querySelector(".content-holder");
let shippingForm = document.querySelector(".shipping-to form");
let updatebtn = document.querySelector(".shipping-to .update");
let input = document.querySelector(".shipping-to form input");
let strong = document.querySelector(".shipping-to p strong");
let changeAdd = document.querySelector(".change-add");
let Subtotal = document.querySelector(".Subtotal");
let finaltotal = document.querySelector(".final-total");
let heads = document.querySelector(".heads h2");
let checkoutBtn = document.querySelector(".checkout");
let cartArr = JSON.parse(localStorage.getItem("item")) || [];
function cartPage() {
  cartArr.map((ele) => {
    contentHolder.innerHTML += `

      <div class="product-cart">
      <div class="prod-img">
          <img src="../imgs/${ele.img}" alt="">
      </div>
      
      <div class="prod-info">
          <h2>${ele.name}${ele.id}</h2>
          <div class="units">
          
          <div class="icon" onclick="counterProduct('minus',${ele.id})"><i class="fa-sharp fa-solid fa-minus"></i></div>
          <span>${ele.numberOfUnits}</span>
         
          <div class="icon" onclick="counterProduct('plus',${ele.id})">  <i class="fa-solid fa-plus"></i></div>
          <p>x${ele.price}<small>${ele.pricetype}</small></p>
          <span class="removeitemcart two" onclick="removeItemFromCart(${ele.id})"><i class="fa-solid fa-trash"></i></span>
          </div>

      </div>
  </div>
  `;
  });
  localStorage.setItem("item", JSON.stringify(cartArr));
  priceCart();
  counterHeadTitle();
  backtohome();
  if (cartArr.length === 0) {
    contentHolder.innerHTML += `<h1>Your Cart Is Empty</h1> <button onclick="backToHome()">Back To HomePage</button>`;
    heads.innerHTML = "";
  }
}
function counterHeadTitle() {
  let counter = 0;
  cartArr.map((e) => {
    counter += e.numberOfUnits;
    heads.innerHTML = `Cart Products ${counter} Items`;
  });
}
function removeItemFromCart(id) {
  cartArr = cartArr.filter((item) => item.id !== id);
  contentHolder.innerHTML = "";
  Subtotal.innerHTML = "";
  finaltotal.innerHTML = "";

  cartPage();
}

function counterProduct(action, id) {
  contentHolder.innerHTML = "";
  for (let i = 0; i < cartArr.length; i++) {
    if (id === cartArr[i].id) {
      if (action === "plus") {
        cartArr[i].numberOfUnits++;
      } else if (action === "minus" && cartArr[i].numberOfUnits > 1) {
        cartArr[i].numberOfUnits--;
      }
    }
  }
  cartPage();
}

cartPage();
console.log(cartArr.length);

function priceCart() {
  let subtotal = 0;
  cartArr.map((s) => {
    subtotal += s.numberOfUnits * s.price;
    Subtotal.innerHTML = `${subtotal}.00 <small style="color: #777;  font-size: 15px;">${s.pricetype}`;
    finaltotal.innerHTML = `${subtotal}.00 <small style="color: #777;  font-size: 15px;">${s.pricetype}`;
  });
}

if (localStorage.getItem("address") !== null) {
  strong.innerHTML = JSON.parse(localStorage.getItem("address"));
}
shippingForm.addEventListener("click", (ele) => {
  ele.preventDefault();
  if (ele.target.classList.contains("update")) {
    if (input.value !== "") {
      strong.innerHTML = input.value;
      localStorage.setItem("address", JSON.stringify(input.value));
    }
    input.value = "";
  }
});

changeAdd.onclick = (ele) => {
  ele.preventDefault();
  ele.target.classList.toggle("oppend");
  if (ele.target.classList.contains("oppend")) {
    shippingForm.style.display = "block";
    input.focus();
  } else {
    shippingForm.style.display = "none";
  }
};

function backToHome() {
  window.location = "index.html";
}

checkoutBtn.onclick = () => {
  if (cartArr.length > 0) {
    window.location = "../checkOutpage/checkout.html";
  }
};

console.log(cartArr.length);
function backtohome() {
  if (cartArr.length == 0) {
    setTimeout(() => {
      window.location = "../index.html";
    });
  }
}
