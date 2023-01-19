let address = document.querySelector("input[type='text']");
let phonenumber = document.querySelector(".phonenum");
let postal = document.querySelector(".postal");
let form = document.querySelector("form");
let check = [];

check.push(JSON.parse(localStorage.getItem("address")));

address.value = check;

form.onsubmit = (e) => {
  e.preventDefault();

  if (address.value != check) {
    localStorage.setItem("address", JSON.stringify(address.value));
  }
  sessionStorage.setItem("nubmer", JSON.stringify(phonenumber.value));
  sessionStorage.setItem("postal", JSON.stringify(postal.value));
  if (address.value == "" || phonenumber.value == "" || postal.value == "") {
    document.querySelector(".fill").innerHTML = "Please Fill All the data";
  } else {
    alert("thank Yout ");
    document.querySelector(".fill").innerHTML = "";
    address.value = "";
    phonenumber.value = "";
    postal.value = "";
    sessionStorage.clear();
    localStorage.removeItem("address");
    localStorage.removeItem("item");
    document.querySelector(
      ".checkoutPage"
    ).innerHTML = `<h1 class="emptyPage">Your Product Will sent to Your Address Asap</h1>`;
    setTimeout(() => {
      window.location = "../index.html";
    }, 2000);
  }
};

let btn = document.querySelector(" button");
phonenumber.value = JSON.parse(sessionStorage.getItem("nubmer"));
postal.value = JSON.parse(sessionStorage.getItem("postal"));

document.querySelector(".change-add").onclick = () => {
  address.removeAttribute("readonly");
  address.focus();
};
if (address.value !== "") {
  address.setAttribute("readonly", "true");
}
let checkOut;

checkOut = JSON.parse(localStorage.getItem("item"));

function chackInfo() {
  console.log(checkOut);
  let total = 0;
  let pnums = 0;
  checkOut.map((e) => {
    total += e.price * e.numberOfUnits;
    pnums += e.numberOfUnits;
    document.querySelector(
      ".check-total h4"
    ).innerHTML = `${total}.00 <small>${e.pricetype}</small>`;
    document.querySelector(
      ".check-info h1"
    ).innerHTML = `Checkout ${pnums} Products`;
  });
}
chackInfo();
