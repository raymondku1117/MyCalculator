//this variable holds the current value of the calculator.
var value = 0;
//Displays the value of "value" to the user
$("#output").val("Input Your Numbers");
//when I click the clear button do..
$("#clear").click(

  function(e) {
  
  e.preventDefault();
  //..Display a zero on the calculator
  $("#output").val("0");
  value = 0; 
}

);
var seven = 0;
$("#num7").click(
  function(e) {
  e.preventDefault();
  $("#output").val("7");
    
  }
);
var eight = 0;
$("#num8").click(
  function(e) {
    e.preventDefault();
    $("#output").val("8");
    eight = 8;
    eight = eight.toString();
    
  }
);



$("#num9").click(
  function(e) {
    e.preventDefault();
    $("#output").val("9");
    value = 9;  
  }
);

$("#num4").click(
  function(e) {
    e.preventDefault();
    $("#output").val("4");
    value = 4;  
  }
);

$("#num5").click(
  function(e) {
    e.preventDefault();
    $("#output").val("5");
    value = 5;  
  }
);

$("#num6").click(
  function(e) {
    e.preventDefault();
    $("#output").val("6");
    value = 6;  
  }
);

$("#num1").click(
  function(e) {
    e.preventDefault();
    $("#output").val("1");
    value = 1;  
  }
);

$("#num2").click(
  function(e) {
    e.preventDefault();
    $("#output").val("2");
    value = 2;  
  }
);

$("#num3").click(
  function(e) {
    e.preventDefault();
    $("#output").val("3");
    value = 3;  
  }
);

$("#add").click(
  function(e) {
    e.preventDefault();
    
  }
)






