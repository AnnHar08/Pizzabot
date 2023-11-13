function processOrder() {
  const pizzaType = document.getElementById("pizzaType").value;
  const quantity = document.getElementById("quantity").value;

  if (!checkOrderName(pizzaType)) {
    document.getElementById("response").innerHTML =
      "Sorry, we don't have that pizza on the menu.";
  } else if (isNaN(quantity) || quantity <= 0) {
    document.getElementById("response").innerHTML =
      "Please enter a valid quantity.";
  } else {
    const orderTotal = totalCost(quantity);
    const timeToCook = cookingTime(quantity);
    const responseMessage =
      "Great, I'll get started on your " +
      pizzaType +
      " right away, it will cost " +
      orderTotal +
      " kr. The pizzas will take " +
      timeToCook +
      " minutes.";
    document.getElementById("response").innerHTML = responseMessage;
  }
}
