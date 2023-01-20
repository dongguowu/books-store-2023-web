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
