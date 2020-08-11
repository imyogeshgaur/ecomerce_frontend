var product_amount = document.getElementById("product_amount");
var ship_amount = document.getElementById("ship_amount");
var total_cart_amt = document.getElementById("total_cart_amt");
var discountCode = document.getElementById("discount_code");

const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);

  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Minumum Value Reached !!!");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 150;
    product_amount.innerHTML = parseInt(product_amount.innerHTML) - 150;
    total_cart_amt.innerHTML =
      parseInt(product_amount.innerHTML) + parseInt(ship_amount.innerHTML);
  }
};

const increaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);

  if (itemval.value >= 5) {
    itemval.value = 5;
    alert("Maximum Value Reached !!!");
    itemval.style.background = "red";
    itemval.style.color = "#fff";
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + 150;
    product_amount.innerHTML = parseInt(product_amount.innerHTML) + 150;
    total_cart_amt.innerHTML =
      parseInt(product_amount.innerHTML) + parseInt(ship_amount.innerHTML);
  }
};

const dicountCodes = () => {
  let total_amt_current = parseInt(total_cart_amt.innerHTML);
  let error = document.getElementById("error");
  console.log(error);
  if (dicount_code.value === "yogesh") {
    let new_total_amt = total_amt_current - 15;
    total_cart_amt.innerHTML = new_total_amt;
    error.innerHTML = "You got $15 off !!!";
  } else {
    error.innerHTML = "Not Valid Code !!! Try Again";
  }
};
