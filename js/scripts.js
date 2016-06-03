//Business Logic

var extractTemp = function(rawInput){
  return parseInt(rawInput.charAt(0))-5;
};

var extractPrice = function(rawInput){
  return parseInt(rawInput.charAt(1))-5;
};

var extractAdventure = function(rawInput){
  return parseInt(rawInput.charAt(2))-5;
};

//Front End Logic

$(document).ready(function() {

  $("button#personaltobasic").click(function() {
    $("#personalinfo").hide();
    $("#basics").show();
    $("#progress1").removeClass();
    $("#progress1").addClass("glyphicon glyphicon-ok");
    $("#progress2").removeClass();
    $("#progress2").addClass("glyphicon glyphicon-pencil");
    $('.name').text($("input#name").val());
    event.preventDefault();
  });

  $("button#basictopersonal").click(function() {
    $("#personalinfo").show();
    $("#basics").hide();
    $("#progress2").removeClass();
    $("#progress2").addClass("glyphicon glyphicon-remove");
    $("#progress1").removeClass();
    $("#progress1").addClass("glyphicon glyphicon-pencil");
    event.preventDefault();
  });

  $("button#basictocustom").click(function() {
    $("#customs").show();
    $("#basics").hide();
    $("#progress2").removeClass();
    $("#progress2").addClass("glyphicon glyphicon-ok");
    $("#progress3").removeClass();
    $("#progress3").addClass("glyphicon glyphicon-pencil");
    event.preventDefault();
  });

  $("button#customtobasic").click(function() {
    $("#customs").hide();
    $("#basics").show();
    $("#progress2").removeClass();
    $("#progress2").addClass("glyphicon glyphicon-pencil");
    $("#progress3").removeClass();
    $("#progress3").addClass("glyphicon glyphicon-remove");
    event.preventDefault();
  });

  $("button#customtoflavor").click(function() {
    $("#customs").hide();
    $("#flavor").show();
    $("#progress3").removeClass();
    $("#progress3").addClass("glyphicon glyphicon-ok");
    $("#progress4").removeClass();
    $("#progress4").addClass("glyphicon glyphicon-pencil");
    $("#finalsubmit").show();
    event.preventDefault();
  });

  $("button#flavortocustom").click(function() {
    $("#customs").show();
    $("#flavor").hide();
    $("#finalsubmit").hide();
    $("#output").hide();
    $("#progress3").removeClass();
    $("#progress3").addClass("glyphicon glyphicon-pencil");
    $("#progress4").removeClass();
    $("#progress4").addClass("glyphicon glyphicon-remove");
    event.preventDefault();
  });

  $("button#submitfinal").click(function(event) {
    event.preventDefault();

    $("#progress4").removeClass();
    $("#progress4").addClass("glyphicon glyphicon-ok");

    var adventureForeign=(parseInt($("#adventure2").val())===0);
    var foreignBanned=(parseInt($("#foreigners").val())===551);
    var foreignMust=(parseInt($("#foreigners").val())===559);

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
        if((foreignMust===true)||((adventure >= 4 || (adventure > 2 && adventureForeign)) && (foreignBanned===false))) {
          $(".destination").text("Egypt")
        } else if(adventure > -4) {
          $(".destination").text("Hawaii")
        } else {
          $(".destination").text("Myrtle Beach")
        }
      } else if(price > -4){
        if(adventure >= 4 && foreignBanned===false){
          $(".destination").text("Thailand")
        } else if((foreignMust===true)||((adventure > -4 || (adventure > -2 && adventureForeign))&&(foreignBanned===false))) {
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
        if((foreignMust===true)||((adventure >= 4 || (adventure > 2 && adventureForeign)) && (foreignBanned===false))){
          $(".destination").text("Paris")
        } else if(adventure > -4){
          $(".destination").text("Yosemite")
        } else{
          $(".destination").text("New York")
        }
      } else if(price > -4){
        if((foreignMust===true)||((adventure >= 4 || (adventure > 2 && adventureForeign)) && (foreignBanned===false))){
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
        if((foreignMust===true)||((adventure >= 4 || (adventure > 2 && adventureForeign)) && (foreignBanned===false))){
          $(".destination").text("St Petersburg")
        } else if(adventure > -4){
          $(".destination").text("Vale")
        } else {
          $(".destination").text("Vermont")
        }
      } else if(price > -4){
        if((foreignMust===true)||((adventure >= 4 || (adventure > 2 && adventureForeign)) && (foreignBanned===false))){
          $(".destination").text("Iceland")
        } else if(adventure > -4){
          $(".destination").text("Wyoming")
        } else{
          $(".destination").text("Seattle")
        }
      } else {
        if((foreignMust===true)||((adventure >= 4 || (adventure > 2 && adventureForeign)) && (foreignBanned===false))){
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
