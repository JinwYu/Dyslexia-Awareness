$(document).ready(function(){ // Makes sure everything is loaded before executing jQuery code.

	// All of the texts for each simulation that will be scrambled.
	var textSimulation1;
	var textSimulation2;
	var textSimulation3;

	// FLOW:
	// Vill att varje sida ska ha samma sak så koden enkelt kan återanvändas
	/*
		Varje sida har en mening högst upp som scramblats

		En funktion tar in stringen som ska scramblas, och vilken metod som ska köras tex en siffra

			function(textToScramble, metod){
				if(metod == metod1)
					method1(textToScramble);
				else if(metod == metod2)
					method2(textToScramble);
			}


		En klockstimer

		En textfield

		En submit-knapp bredvid
	*/


   $("button").click(function(){
        var sentence = $("#testText").text(); // Retrieve the text from the p-tag.
        console.log("sentence = " + sentence);
        console.log("sentence[1] = " + sentence[1]);

        // Save the correct answer.
        var answer1 = sentence;

        // Change the text in the p-tag.
        $("#testText").text("replaced the text");
    });




   // Source: https://www.dyslexia.com/question/what-dyslexics-see/
   //---------------------------------------------------------------------
   // Mål: Visa alla en och en, sen tydlig säga: 
   // "dyslektiker har olika severe dyslexi, och kan ha flera kombinationer av dessa, här kan det se ut när 1, 3, 5 tillsammans skrivs"
   // All text i programmet ska vara informationstext om dyslexi taget från någon känd dyslexi-sida med källa


	// 1. She might see some letters as backwards or upside down;
	// d -> b, p -> q, 
	// Men måste ordna UTF för de andra bokstäverna
	// ASBRA FÖR REVERSE CSS https://stackoverflow.com/questions/12179941/how-do-i-make-text-reverse-direction-in-html


	// 6. The letters and words might look all bunched together;
	// Letter spacing med css, se index.html. Kanske göra så den varierar lite och rör sig?

	// 3. She might not be able to tell the difference between letters that look similar in shape such as o and e and c ;
	// 4. She might not be able to tell the difference between letters that have similar shape but different orientation, such as b and p and d and q ;
	// skriv kod där alla o, e och c random har bytts ut
	//http://twiki.org/cgi-bin/view/Blog/BlogEntry201110x2
	// För b/p och d/q kan jag bara manuellt skriva in dessa med ifsatser if(d) -> text = q;

	// 5. The letters might look all jumbled up and out of order;
	// Skriv random som github-sidan


	// 2. She might see text appearing to jump around on a page
	// Skriva ord med delim, som byter plats med varandra genom en random som plussar dessa separata ord till en string out += words;

	// 7. The letters of some words might appear completely backwards, such as the word bird looking like drib ;
	// Ordna med någon slags reverse, googla fram detta






   // Simulation 1


   // Simulation 2


   // Hantera svar, i ett textfield
   // http://twiki.org/cgi-bin/view/Blog/BlogEntry201110x2
   // Sno hur de gjorde i denna, för att få texten i textfältet att ändras

});