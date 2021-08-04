var input = document.getElementById('input');     //to store input
var result = document.getElementById('result');  // to store result
var inputType = document.getElementById('select'); // store select
var resultType = document.getElementById('select1'); //store select1
var inputTypeValue, resultTypeValue;  //store inputvaluetype,result type
$(document).ready(function () {

    //store the values parameters
    var lengthoptions = ["Meter", "Centimeter", "Kilometer"];
    $(length = () => {
        input.value = 1;
        result.value = 100;
        $("#select").empty();
        $("#select1").empty();
        $.each(lengthoptions, function (index, value) {
            selection(value, "centimeter");
        });
        $(".box1").addClass("card1");
        $(".box2").removeClass("card2");
        $(".box3").removeClass("card3");
        $("#image1").attr({ style: "content:url(../assets/scale.svg)" });


    })
    $(".box1").click(length);   //gives the click on events

});
//apply condition to check value and select images
const selection = (value, select, number) => {
    if (value == select) {
        $("#select1").append(`<option selected> ` + value + `</option>` + '<br>');
        $("#select").append(`<option> ` + value + `</option>` + '<br>');
    }
    else {
        $("#select").append(`<option>` + value + `</option>` + '<br>');
        $("#select1").append(`<option>` + value + `</option>` + '<br>');
    }

};

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

//comparison between two values original as well as new
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

//to store result 
function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    //check the condion and get the result

    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {

        result.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {

        result.value = Number(input.value) * 100;
    }

}
