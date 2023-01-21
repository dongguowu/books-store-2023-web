function addCart(value) {
  var element = document.getElementById("current-cart");
  var array = element.innerHTML.split("(");
  var currentValue = 0;
  if (array.length >= 2) {
    var subArray = array[1].split(")");
    if (subArray.length >= 2) {
      currentValue = parseInt(subArray[0], 10);
    }
  }
  currentValue += parseInt(value);
  element.innerHTML = "Cart(" + currentValue + ")";
  let cartButton = document.getElementById("button-cart");
  if (currentValue != 0 && cartButton.classList.contains("disabled")) {
    cartButton.classList.remove("disabled");
  }
}

function getItemQuantity(item) {
  return parseInt(item.find(".item-quantity").val());
}

function calculateItemTotal(item) {
  var price = item.find(".item-price").text().slice(1);
  var quantity = item.find(".item-quantity").val();
  var itemTotal = (price * quantity).toFixed(2);
  item.find(".item-total").text("$" + itemTotal);
}

// function to calculate the overall total
function calculateTotal() {
  var quantityOfItems = 0;
  $(".shopping-cart-line").each(function () {
    quantityOfItems += getItemQuantity($(this));
  });

  var total = 0;
  $(".shopping-cart-line").each(function () {
    calculateItemTotal($(this));
    var itemTotal = $(this).find(".item-total").text().slice(1);
    total += parseFloat(itemTotal);
  });

  $("#order-total").text(
    "items(" + quantityOfItems + "): $" + total.toFixed(2)
  );
}
