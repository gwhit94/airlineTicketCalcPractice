document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
});
showDrinks();
showMeals();
function showDrinks(){
  var drinksSelect = document.getElementById("drinks").selectedIndex;
  if (drinksSelect == 1) {
        drinksDiv.style.display = "block";
    } else {
        drinksDiv.style.display = "none";
    }
}
function showMeals(){
  var mealSelect = document.getElementById("meal").selectedIndex;
  if (mealSelect == 1) {
        mealsDiv.style.display = "block";
    } else {
        mealsDiv.style.display = "none";
    }
}

function calculateCost(){
  var miles = document.getElementById("milesInput").value;
  var cost = 0;
  var rangeFee = 0;
  console.log(miles);
  if (miles > -1 && miles < 101) {
    cost = 2.5 * (miles / 10);
    } else if (miles >= 101 && miles < 201) {
      cost = 5 * (miles / 10);
    } else if (miles >= 300) {
      cost = 7.5 * (miles / 10);
      var flightOrigin = document.getElementById("flightOrigin").selectedIndex;
      var rangeFee = 0;
      if (flightOrigin == 0) {
        rangeFee = 5 * (miles / 10);
        console.log(rangeFee);
      } else if (flightOrigin == 1) {
          rangeFee = 4.5 * (miles / 10);
        } else if (flightOrigin == 2) {
          rangeFee = 3.2 * (miles / 10);
        }
      var milesCost = rangeFee + cost;
    } else {
    console.log("ERROR");
    return;
  }
}

function drinksCost(){
  var pops = document.getElementById("pop").value;
  var water = document.getElementById("water").value;
  var beer = document.getElementById("beer").value;
  var popCost = pops * 2;
  var waterCost = water * 2;
  var beerCost = beer * 6;
  var drinksTotal = popCost + waterCost + beerCost;

}
function totalKevinCostner(drinksTotal, calculateCost){
  var finalTotal = drinksTotal + calculateCost;
  var totalCost = document.getElementById("totalCost");
  totalCost.innerHTML = `Your flight will have an additional fee of: $${finalTotal}`;
}

// function mealCost(){
//   var meal = document.getElementById("meal").selectedIndex;
//
//   if (meal == 1) {
//     var mealSelect = document.getElementById("mealSelect");
//     if (mealSelect.selectedIndex == 0) {
//       cost = cost + 10;
//     } else {
//       cost = cost + 15;
//     }
//   }
// }
