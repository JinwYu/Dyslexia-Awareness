$(document).ready(function(){

	// All of the texts for each simulation that will be scrambled.
	var textSimulation1;
	var textSimulation2;
	var textSimulation3;

	var currentCorrectAnswer;
	var currentTitle;
	var currentInformation;
	var currentSource;

	var totalNumScreens = 10;
	var currentScreen = 0;
	/*
		Start screen = 1;
		1st info screen = 2;
		1st game screen = 3;
		2nd info screen = 4;
		2nd game screen = 5;
	*/	


	// When the game is first launched and the start button is clicked.
   	$("#start_button").click(function(){
   		incrementCurrentScreen();   
   		initCurrentScreen();		
   		createElementsForScreen(currentScreen); // Draw the information screen for the first simulation.   		
    });


   	// Init variables for the current screen.
   	function initCurrentScreen(){   		

   		// If the player has gone through every screen.
   		if(currentScreen === totalNumScreens)
   			currentScreen = 1;

   		console.log("currentScreen = " + currentScreen);

   		var tempVisualisationInfo;
   		switch (currentScreen) {
   			case 1: case 2:
		        tempVisualisationInfo = visualisation1;
		        break;
		    case 3: case 4:
		        tempVisualisationInfo = visualisation2;
		        break;
		    case 5: case 6:
		        tempVisualisationInfo = visualisation3;
		        break;
		    case 7: case 8:
		        tempVisualisationInfo = visualisation4;
		        break;
		    case 9: case 10:
		        tempVisualisationInfo = visualisation5;
		        break;
		    case 11:
		        // Final screen.
		}

   		currentCorrectAnswer = tempVisualisationInfo.correctAnswer;
		currentTitle = tempVisualisationInfo.title;
		currentInformation = tempVisualisationInfo.information;
		currentSource = tempVisualisationInfo.source;
   	}


   	// Function to increment the current screen.
    function incrementCurrentScreen(){ currentScreen++; }


	// Function to clear the DOM, removing all previous elements.
    function clearElementsInWrapper(){$("#wrapper").empty();}


   	// Function that draws the content in the div wrapper.
   	function createElementsForScreen(screenIndex){
   		
   		var typeOfScreenToDraw = screenIndex % 2;
   		console.log("typeOfScreenToDraw = " + typeOfScreenToDraw);

   		if(typeOfScreenToDraw === 0)
   			drawGameScreen(screenIndex);
   		else
   			drawInfoScreen(screenIndex);
   	}


   	// On click listener for dynamically created buttons.
   	$("#wrapper").on("click", "button.button_continue_class", function(){
   		incrementCurrentScreen();
   		initCurrentScreen();
    	createElementsForScreen(currentScreen);
	});


   	// On click listener for submit button.
	$("#wrapper").on("click", "button.button_submit_class", function(){

		// Retrieve answer from input field.
		var retrievedAnswer = $("#input_answer").val();
		retrievedAnswer = retrievedAnswer.toLowerCase();

		console.log("retrievedAnswer = " + retrievedAnswer + ", currentCorrectAnswer = " + currentCorrectAnswer);

		// Validate answer and change the label accordingly.
		if(currentCorrectAnswer.toLowerCase() === retrievedAnswer){
			$("#input_label").html("Correct, feel free to continue");
			$("#input_label").css("color", "#70db70");
		}
		else{
			$("#input_label").html("Try again");
			$("#input_label").css("color", "red");
		}
	});


   	// Function to create a continue button.
	function createContinueButton(){
		// Div that the button will be inside.
	    var divForButton = $("<div></div>");
	    divForButton.addClass("div_button_continue"); // CSS class.

	    // Button.
	    var continueButton = $("<button class='button_continue_class'></button>"); // Added class to allow a listener to be added to this dynamically created element.
		continueButton.addClass("btn btn-info");
		continueButton.text("Continue");

		// Add button to the div.
		divForButton.append(continueButton); 

		return divForButton;
	}


   	// Creating all elements to add to the div wrapper.
   	function drawInfoScreen(screenIndex){
		
	    clearElementsInWrapper();
	    
	    // Title text.
	    var titleText = $("<h1></h1>"); 
	    titleText.addClass("text_h1_center");
	    //titleText.text("Simulation " + screenIndex);
	    titleText.text(currentTitle);

	    // Information text.
	    var infoText = $("<p></p>");
	    infoText.addClass("text_info");	    
	    //infoText.load("/text_files/simulation" + screenIndex + ".txt");
	    infoText.text(currentInformation);

	    // Div that the button will be inside.
	    var divForButton = createContinueButton();

	    // Source text.
	    var sourceText = $("<p></p>");
	    sourceText.addClass("text_info");	    
	    //infoText.load("/text_files/simulation" + screenIndex + ".txt");
	    sourceText.text(currentSource);

	    // Add it to the DOM.
	    $("#wrapper").append(titleText, infoText, sourceText, divForButton); 
   	}

   	// Draw the game screen.
   	function drawGameScreen(screenIndex){

   		clearElementsInWrapper();

   		switch (screenIndex) {
   			case 2:
   				drawVisual1();
   				break;
		    case 4:
		        drawVisual2();
		        break;
		    case 6:
		        // visualisation3;
		        break;
		    case 8:
		        // visualisation4;
		        break;
		    case 10:
		        // visualisation5;
		        break;
		    case 11:
		        // Final screen.
		}
   	}



   	// Function that returns the div for a visualisation.
   	function createDivForVisualisation(){
   		var divForVisualisation = $("<div></div>");
	    divForVisualisation.css("text-align", "center");
	    divForVisualisation.css("background-color", "#d9d9d9");
	    divForVisualisation.css("border-radius", "10px");

	    return divForVisualisation;
   	}

   	// Visualisation: Spacing.
   	function drawVisual1(){
   		// Title text.
	    var titleText = $("<h1></h1>"); 
	    titleText.addClass("text_h1_center");
	    //titleText.text("Simulation " + screenIndex);
	    titleText.text(currentTitle);

	    // Div for visualisation.
	    var divForVisualisation = createDivForVisualisation();

	    // Create the animation for spacing.
	    var visualisation = $("<h3></h3>"); 
	    //visualisation.text("Spacing can look like this.");
	    visualisation.text(currentCorrectAnswer)
	    visualisation.css("letter-spacing", "-5px");

	    var movement1 = function(speed){
		  visualisation.animate({"letter-spacing": "-4.7px"}, speed,function(){
		      movement2(speed)
		  });
		}

		var movement2 = function(speed){
		  visualisation.animate({"letter-spacing": "-4px"}, speed,function(){
		      movement1(speed)
		  });
		}

		movement1(18000); // Animation speed in ms.

     	// Add visualisation to the div.
		divForVisualisation.append(visualisation); 

		// Input field.
		var divForInput = createInputForm();

	   	// Continue button.
	   	var divForButton = createContinueButton();

		// Add it to the DOM.
	    $("#wrapper").append(titleText, divForVisualisation, divForInput, divForButton); 
   	}


   	// Create the div for the input form.
   	function createInputForm(){

   		// Input field.
		var divForInput = $("<div style='text-align: center; margin-top: 10%; margin-bottom: 3%;'></div>");
		var label = $("<label for='answer' id='input_label'>Type what you think it says:</label>")
		var inputField = $("<input type='text' class='form-control' id='input_answer' style='margin-bottom: 1%;'>");
		var submitButton = $("<button class='button_submit_class'>Submit</button>");
		submitButton.addClass("btn btn-default");

		divForInput.append(label, inputField, submitButton);

   		return divForInput;
   	}


	// Visualisation: Some words might appear backwards.
   	function drawVisual2(){
   		var word1 = "the "
   		var word2 = "drib ";
   		var word3 = "flies ";
   		var word4 = "htron ";
   		var word5 = "ni ";
   		var word6 = "remmus";

   		var backwardsSentence = word1 + word2 + word3 + word4 + word5 + word6;

	    var divForVisualisation = createDivForVisualisation();

	    var visualisation = $("<h3></h3>"); 
	    visualisation.text(backwardsSentence)

	    // Add visualisation to the div.
		divForVisualisation.append(visualisation);

		// Input field.
		var divForInput = createInputForm();

	   	// Continue button.
	   	var divForButton = createContinueButton();

	   	// Add it to the DOM.
	    $("#wrapper").append(divForVisualisation, divForInput, divForButton); 
   	}



	// Source: https://www.dyslexia.com/question/what-dyslexics-see/
	//---------------------------------------------------------------------
	// Mål: Visa alla en och en, sen tydlig säga: 
	// "dyslektiker har olika severe dyslexi, och kan ha flera kombinationer av dessa, här kan det se ut när 1, 3, 5 tillsammans skrivs"
	// All text i programmet ska vara informationstext om dyslexi taget från någon känd dyslexi-sida med källa

	// 1. She might see some letters as backwards or upside down;
	// d -> b, p -> q, 
	// Men måste ordna UTF för de andra bokstäverna
	// ASBRA FÖR REVERSE CSS https://stackoverflow.com/questions/12179941/how-do-i-make-text-reverse-direction-in-html


	
	// 3. She might not be able to tell the difference between letters that look similar in shape such as o and e and c ;
	// 4. She might not be able to tell the difference between letters that have similar shape but different orientation, such as b and p and d and q ;
	// skriv kod där alla o, e och c random har bytts ut
	//http://twiki.org/cgi-bin/view/Blog/BlogEntry201110x2
	// För b/p och d/q kan jag bara manuellt skriva in dessa med ifsatser if(d) -> text = q;

	// 5. The letters might look all jumbled up and out of order;
	// Skriv random som github-sidan


	// 2. She might see text appearing to jump around on a page
	// Skriva ord med delim, som byter plats med varandra genom en random som plussar dessa separata ord till en string out += words;
	// eller gör med jquery från fiddlen här https://stackoverflow.com/questions/4822524/continuous-movement-animation-with-jquery

	// 7. The letters of some words might appear completely backwards, such as the word bird looking like drib ;
	// Ordna med någon slags reverse, googla fram detta


	// Hantera svar, i ett textfield
	// http://twiki.org/cgi-bin/view/Blog/BlogEntry201110x2
	// Sno hur de gjorde i denna, för att få texten i textfältet att ändras

});


// MISC CODE


        // var sentence = $("#testText").text(); // Retrieve the text from the p-tag.
        // console.log("sentence = " + sentence);
        // console.log("sentence[1] = " + sentence[1]);

        // // Save the correct answer.
        // var answer1 = sentence;

        // // Change the text in the p-tag.
        // $("#testText").text("replaced the text");

        // $('body').html($('<div class="spinner"></div>'));
        // $("#wrapper").html($('<h2>nyligen skapat objekt</h2>'));
        // var txt1 = "<p>Text.</p>";              // Create text with HTML
	    // var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
	    // var txt3 = document.createElement("p");
	    // txt3.innerHTML = "Text.";               // Create text with DOM
	    // $("#wrapper").append(txt1, txt2, txt3);     // Append new elements	   