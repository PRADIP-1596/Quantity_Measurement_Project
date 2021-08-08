

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('select');
var resultType = document.getElementById('select1');
var inputTypeValue, resultTypeValue;

// <!------------------------------------------------>


//--------------------function is used reload web page whole in jquery 
$(document).ready(function () {

	
//    length parameter  declared here
	var lengthoptions = ["meter", "centimeter", "millimeter", "kilometer", "mile"];
	$(length = () => {
		input.value = 1;
		result.value = 100;
		$("#select").empty();
		$("#select1").empty();
		$.each(lengthoptions, function (index, value) {
			selection(value, "centimeter");
		});
	

	})

  // temp Parameter declared here 
	var temperatureoptions = ["Celsius", "Fahrenheit", "Kelvin"];
	$(".box2").click(() => {
		input.value = 0;
		result.value = 32;
		$("#select").empty();
		$("#select1").empty();
		$.each(temperatureoptions, function (index, value) {
			selection(value, "Fahrenheit");
		});
	
	});
    
	// Volumn Parameter declared here
	var volumeoptions = ["Litres", "Millilitres", "Galons"];
	$(".box3").click(() => {
		input.value = 1;
		result.value = 1000;
		$("#select").empty();
		$("#select1").empty();
		$.each(volumeoptions, function (index, value) {
			selection(value, "Millilitres");
		});
	});
});

// ----------------------------------------------------------------------------------------------


// decclared arrow function
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
// ---------------------------------------------------------------------------------------------------------
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultType.value = result.value;

//function calling


function myResult() {

	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;

	//   Length all logic Conversion Parameters
	if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {

		result.value = Number(input.value) * 0.001;
	        input.value = Number(result.value) * 0.001;
	}
	else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {

		result.value = Number(input.value) * 100;
		input.value = Number(result.value) * 0.001;

	} else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
		result.value = input.value
	} else if (inputTypeValue === "meter" && resultTypeValue === "millimeter") {
		result.value = Number(input.value) * 1000;
	} else if (inputTypeValue === "meter" && resultTypeValue === "micrometer") {
		result.value = Number(input.value) * 1000000;
	} else if (inputTypeValue === "meter" && resultTypeValue === "mile") {
		result.value = Number(input.value) * 0.000621371;
	}

	if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {

		result.value = Number(input.value) * 1000;
	} else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
		result.value = Number(input.value) * 100000;
	} else if (inputTypeValue === "kilometre" && resultTypeValue === "kilometer") {
		result.value = input.value
	} else if (inputTypeValue === "kilometre" && resultTypeValue === "millimeter") {
		result.value = Number(input.value) * 1000000;
	} else if (inputTypeValue === "kilometre" && resultTypeValue === "micrometer") {
		result.value = Number(input.value) * 1000000000;
	} else if (inputTypeValue === "kilometre" && resultTypeValue === "mile") {
		result.value = Number(input.value) * 0.621371;
	}
 


	if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
		result.value = Number(input.value) * 0.00001;
	} else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
		result.value = Number(input.value) * 0.01;
	} else if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {
		result.value = input.value
	} else if (inputTypeValue === "centimeter" && resultTypeValue === "millimeter") {
		result.value = Number(input.value) * 10;
	} else if (inputTypeValue === "centimeter" && resultTypeValue === "micrometer") {
		result.value = Number(input.value) * 10000;
	} else if (inputTypeValue === "centimeter" && resultTypeValue === "mile") {
		result.value = Number(input.value) * 6.2137e-6;
	}

	if (inputTypeValue === "millimeter" && resultTypeValue === "kilometer") {
		result.value = Number(input.value) * 1e-6;
	} else if (inputTypeValue === "millimeter" && resultTypeValue === "meter") {
		result.value = Number(input.value) * 0.001;
	} else if (inputTypeValue === "millimeter" && resultTypeValue === "centimeter") {
		result.value = Number(input.value) * 0.1;
	} else if (inputTypeValue === "millimeter" && resultTypeValue === "millimeter") {
		result.value = input.value;
	} else if (inputTypeValue === "millimeter" && resultTypeValue === "micrometer") {
		result.value = Number(input.value) * 1000;
	} else if (inputTypeValue === "millimeter" && resultTypeValue === "mile") {
		result.value = Number(input.value) * 6.2137e-7;
	}

	if (inputTypeValue === "micrometer" && resultTypeValue === "kilometer") {
		result.value = Number(input.value) * 1e-9;
	} else if (inputTypeValue === "micrometer" && resultTypeValue === "meter") {
		result.value = Number(input.value) * 1e-6;
	} else if (inputTypeValue === "micrometer" && resultTypeValue === "centimeter") {
		result.value = Number(input.value) * 1e-4;
	} else if (inputTypeValue === "micrometer" && resultTypeValue === "millimeter") {
		result.value = Number(input.value) * 0.001;
	} else if (inputTypeValue === "micrometer" && resultTypeValue === "micrometer") {
		result.value = input.value;
	} else if (inputTypeValue === "micrometer" && resultTypeValue === "mile") {
		result.value = Number(input.value) * 6.2137e-10;
	}

	//  TemperatureConverter all Logic 
	if (inputTypeValue === "Celsius" && resultTypeValue === "Celsius") {
		result.value = input.value;
	} else if (inputTypeValue === "Celsius" && resultTypeValue === "Fahrenheit") {
		result.value = (Number(input.value) * 9 / 5) + 32;
		;
	} else if (inputTypeValue === "Celsius" && resultTypeValue === "Kelvin") {
		result.value = Number(input.value) + 273.15;
	}
	if (inputTypeValue === "Fahrenheit" && resultTypeValue === "Celsius") {
		result.value = (Number(input.value) - 32) * 5 / 9;
	} else if (inputTypeValue === "Fahrenheit" && resultTypeValue === "Fahrenheit") {
		result.value = input.value;
	} else if (inputTypeValue === "Fahrenheit" && resultTypeValue === "Kelvin") {
		result.value = (Number(input.value) - 32) * 5 / 9 + 273.15;
	}

	if (inputTypeValue === "Kelvin" && resultTypeValue === "Celsius") {
		result.value = Number(input.value) - 273.15;
	} else if (inputTypeValue === "Kelvin" && resultTypeValue === "Fahrenheit") {
		result.value = (Number(input.value) - 459.67);
	} else if (inputTypeValue === "Kelvin" && resultTypeValue === "Kelvin") {
		result.value = input.value;
	}

	//Volumn For All Logic

	//  switch (resultType.value,inputType.value) {
	// 	case 0:
	// 		if (inputTypeValue === "Kelvin" && resultTypeValue === "Celsius") {
	// 			result.value = Number(input.value) - 273.15;
	// 		} else if (inputTypeValue === "Kelvin" && resultTypeValue === "Fahrenheit") {
	// 			result.value = (Number(input.value) - 459.67);
	// 		} else if (inputTypeValue === "Kelvin" && resultTypeValue === "Kelvin") {
	// 			result.value = input.value;
	// 		}
	// 	case 1:
	// 	  $('#txtConsole').val("Some Val 1");
	// 	  break;
	// 	case 2:
	// 	  $('#txtConsole').text("Some Val 2");
	// 	  break;
	//   }

	// volume conversion for all  logic 
	if (inputTypeValue === "Litres" && resultTypeValue === "Millilitres") {
		result.value = Number(input.value) * 1000;
	} else if (inputTypeValue === "Litres" && resultTypeValue === "Galons") {
		result.value = (Number(input.value) * 0.219969);
	} else if (inputTypeValue === "Litres" && resultTypeValue === "Litres") {
		result.value = input.value;
	}

	if (inputTypeValue === "Millilitres" && resultTypeValue === "Millilitres") {
		result.value = input.value;
	} else if (inputTypeValue === "Millilitres" && resultTypeValue === "Galons") {
		result.value = (Number(input.value) * 0.000219969);
	} else if (inputTypeValue === "Millilitres" && resultTypeValue === "Litres") {
		result.value = Number(input.value) * 0.001;
	}

	if (inputTypeValue === "Galons" && resultTypeValue === "Millilitres") {
		result.value = Number(input.value) * 4546.09;
	} else if (inputTypeValue === "Galons" && resultTypeValue === "Litres") {
		result.value = (Number(input.value) * 4.54609);
	} else if (inputTypeValue === "Galons" && resultTypeValue === "Galons") {
		result.value = input.value;
	}
 
}
