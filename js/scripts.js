//Buisiness Logic

var extractTemp = function(rawInput){
  return parseInt(rawInput.charAt(0))-5;
};

var extractPrice = function(rawInput){
  return parseInt(rawInput.charAt(1))-5;
};

var extractAdventure = function(rawInput){
  return parseInt(rawInput.charAt(2))-5;
};

$(document).ready(function() {
  $("form#vacation-suggester").submit(function(event) {
    event.preventDefault();

    var temp=0;
    temp += extractTemp($("#climate").val());
    temp += extractTemp($("#book").val());
    temp += extractTemp($("#photo").val());
    temp += extractTemp($("#foreigners").val());
    var price=0;
    price += extractPrice($("#price").val());
    price += extractPrice($("#book").val());
    price += extractPrice($("#photo").val());
    price += extractPrice($("#foreigners").val());

    var adventure=0;
    adventure += extractAdventure($("#adventure").val());
    adventure += extractAdventure($("#book").val());
    adventure += extractAdventure($("#photo").val());
    adventure += extractAdventure($("#foreigners").val());

    if(temp >= 4) {
      if(price >= 4) {
        if(adventure >= 4) {
          $(".destination").text("Egypt")
        } else if(adventure > -4) {
          $(".destination").text("Hawaii")
        } else {
          $(".destination").text("Myrtle Beach")
        }
      } else if(price > -4){
        if(adventure >= 4){
          $(".destination").text("Thailand")
        } else if(adventure > -4){
          $(".destination").text("Mexico")
        } else {
          $(".destination").text("Corpus Christi")
        }
      } else {
        if(adventure >= 4){
          $(".destination").text("Grand Canyon")
        } else if(adventure > -4){
          $(".destination").text("Puerto Rico")
        } else {
          $(".destination").text("San Diego")
        }
      }
    } else if(temp > -4){
      if(price >= 4){
        if(adventure >= 4){
          $(".destination").text("Paris")
        } else if(adventure > -4){
          $(".destination").text("Yosemite")
        } else{
          $(".destination").text("New York")
        }
      } else if(price > -4){
        if(adventure >= 4){
          $(".destination").text("Rio de Janeiro")
        } else if(adventure > -4){
          $(".destination").text("Redwood Forests")
        } else {
          $(".destination").text("San Franciso")
        }
      } else{
        if(adventure >= 4){
          $(".destination").text("Camping Montana")
        } else if(adventure > -4){
          $(".destination").text("Columbia Gorge")
        } else {
          $(".destination").text("Nashville, Tennesee")
        }
      }
    } else {
      if(price >= 4){
        if(adventure >= 4){
          $(".destination").text("St Petersburg")
        } else if(adventure > -4){
          $(".destination").text("Vale")
        } else {
          $(".destination").text("Vermont")
        }
      } else if(price > -4){
        if(adventure >= 4){
          $(".destination").text("Iceland")
        } else if(adventure > -4){
          $(".destination").text("Wyoming")
        } else{
          $(".destination").text("Seattle")
        }
      } else {
        if(adventure >= 4){
          $(".destination").text("Alaska")
        } else if(adventure > -4){
          $(".destination").text("Mt. Hood")
        } else {
          $(".destination").text("Detroit")
        }
      }
    }

    $('#output').show();

  });
});
