const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    ", and " +
    pepperoni
);

const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);
if (!checkOrderName(orderName)) {
  alert("Sorry, we don't have that pizza on the menu.");
} else {
  const orderQuantity = parseInt(
    prompt("How many of " + orderName + " do you want?")
  );
  if (isNaN(orderQuantity) || orderQuantity <= 0) {
    alert("Please enter a valid quantity.");
  } else {
    const orderTotal = totalCost(orderQuantity);
    const timeToCook = cookingTime(orderQuantity);
    alert(
      "Great, I'll get started on your " +
        orderName +
        " right away, it will cost " +
        orderTotal +
        " kr. The pizzas will take " +
        timeToCook +
        " minutes."
    );
  }
}
