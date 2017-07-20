
var itemArray = [0,0,0,0,0];

var priceArray = [0,0,0,0,0];


function addYogurt(){
 priceArray[0] += 1.00;
 itemArray[0] ++; 
 alert("You have added " + itemArray[0] + " Yogurt(s). Your Yogurt total is $" + priceArray[0] ) 
}


function addLaCroix(){
  priceArray[1] += 2.99;
   itemArray[1] ++; 
  alert("You have added " + itemArray[1] + " La Croix. Your La Croix total is $" + priceArray[1] )
}


function addGrapeFruit(){
  priceArray[2] += 2.00;
   itemArray[2] ++; 
  alert("You have added " + itemArray[2] + " Grapefruit(s). Your grapefruit total is $" + priceArray[2] )
}


function addRedpepper(){
  priceArray[3] += .99;
   itemArray[3] ++;
  alert("You have added " + itemArray[3] + " red pepper. Your red pepper total is $" + priceArray[3] )
}


function addCreamer(){
  priceArray[4] += 4.00;
   itemArray[4] ++; 
  alert("You have added " + itemArray[4] + " French Vanilla Creamer. Your French Vanilla Creamer total is $" + priceArray[4] )
}

function checkOut(){
  var reciept = "Reciept: \n";
  var sum = 0;
  

  for (var i = 0; i < priceArray.length; i++){
      sum = sum + priceArray[i];
  }
  

  if (itemArray[0] > 0){
    reciept += "\n" + itemArray[0] + " Yogurt - " + priceArray[0];    
  }
  if (itemArray[1] > 0){
    reciept += "\n" + itemArray[1] + " La Croix- " + priceArray[1];
  }
  if (itemArray[2] > 0){
    reciept += "\n" + itemArray[2] + " Grapefruit- " + priceArray[2];   
  }
  if (itemArray[3] > 0){
    reciept += "\n" + itemArray[3] + " Red Pepper- " + priceArray[3];   
  }
  if (itemArray[4] > 0){
    reciept += "\n" + itemArray[4] + " French Vanilla Creamer- " + priceArray[4];   
  }
  
  var total = (sum * 1.06);
  var finalPrice = total.toFixed(2);
  
  alert(reciept + "\n Subtotal: " + sum + "\n Your total bill with tax is: " + finalPrice)
}