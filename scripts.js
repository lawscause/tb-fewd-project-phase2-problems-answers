//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}

//https://www.w3schools.com/js/js_loop_for.asp
//https://www.w3schools.com/js/js_errors.asp
function findInGrid() {
 
    //create a variable to signify that the number was found
    let found = false;
    //create a variable to hold a message
    let message;

    //create a reference to the input tbNumberToFind
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    //grab the number value from the input tbNumberToFind
    let numberToFind = tbNumberToFind.value;
    console.log("number: ", numberToFind);

    //place this action in a try..catch..finally
    //to allow for errors to be handled gracefully
    try {

        //throw an error if the number is less than 0
        if (numberToFind < 0) {
            throw "Please enter a valid number";
        }

        //grab a collection of the spans in the document
        let spans = document.getElementsByTagName('span');
        console.log("spans: ", spans);

        //loop through each span in the collection of spans
        for (let index = 0; index < spans.length; index++) {
            console.log("spans[index]: ", spans[index]);
            console.log("spans[index].innerText: ", spans[index].innerText);
            console.log("parseInt(spans[index].innerText) == numberToFind: ", parseInt(spans[index].innerText) ==
                numberToFind);
            
            //make sure that the span is not highlighted
            //by removing the spanHighlighted class from the span
            spans[index].classList.remove('spanHighlighted');

            //if the text in the span matches the number to find
            //this is the one to highlight
            if (spans[index].innerText == numberToFind) {

                console.log("spans[index].classList: ", spans[index].classList);
                //highlight this span by adding the spanHighlighted class to the span
                spans[index].classList.add('spanHighlighted');
                found = true; //indicate that you found it

            }
        }

        //if the numberToFind was not found then
        //set the message to inform the user
        if (!found) {
            message = `The text ${numberToFind} could not be found!`;
        }


    } catch (err) {
        //if an error occurred set the message to the error
        message = err;
    } finally {
        //alert the user with the message, if there is a message
        if (message) {
            alert(message);
        }

    }

}


//https://www.w3schools.com/js/js_loop_for.asp
//https://www.w3schools.com/js/js_typeof.asp
function findInList() {

    //create a variable to signify that the number was found
    let found = false;

    //create a reference to the input tbTextToFind
    let tbtextToFind = document.getElementById("tbTextToFind");
    //grab the text value from the input tbtextToFind
    let textToFind = tbtextToFind.value;

    //if value in the input is blank alert the user
    if (typeof textToFind === "undefined" || textToFind == '') {
        alert('Please enter a value to find!');
        return;
    }

    console.log("number", textToFind);
    //grab a collection of the spans in the document
    let spans = document.getElementsByTagName('span');

    console.log("spans: ", spans);

    //loop through each span in the collection of spans
    for (let index = 0; index < spans.length; index++) {
        console.log("spans[index]: ", spans[index]);
        console.log("spans[index].innerText: ", spans[index].innerText);
        console.log("parseInt(spans[index].innerText) == textToFind: ", parseInt(spans[index].innerText) ==
            textToFind);

        //make sure that the span is not highlighted
        //by removing the spanHighlighted class from the span
        spans[index].classList.remove('spanHighlighted');

        //if the text in the span matches the text to find
        //this is the one to highlight
        if (spans[index].innerText == textToFind) {
            console.log("spans[index].classList: ", spans[index].classList);

            //highlight this span by adding the spanHighlighted class to the span
            spans[index].classList.add('spanHighlighted');
            found = true; //indicate that you found it

        }
    }

    //if the text To Find was not found then alert the user
    if (!found) {
        alert(`The text ${textToFind} could not be found!`);
    }
}

//with two divs as parameters
//assume that each div contains a span
//use the innerText in that span
//to determine the order
//if the text in span1 is less than the text
//in span2 return -1 otherwise return 1
//https://www.w3schools.com/js/js_array_sort.asp
//https://www.w3schools.com/js/js_htmldom.asp
//https://www.w3schools.com/js/js_htmldom_document.asp
//https://www.w3schools.com/js/js_htmldom_elements.asp
//https://www.w3schools.com/js/js_htmldom_html.asp
var sortSpansInDiv = function (div1, div2) {
    let span1 = div1.children[0];
    let span2 = div2.children[0];

    if (span1.innerText < span2.innerText) {
        return -1;
    } else {
        return 1;
    }
}

function sortIt() {
    sortItVer4();
}

function sortItVer1() {
    let newRow = document.createElement('div');
    newRow.id = "row0";
    newRow.className = "row";

    let row0 = document.getElementById("row0");
    console.log(row0);
    let pDiv = row0.parentNode;
    console.log(pDiv);

    console.log("using sortItVer1()");
    //grab a reference to the resultsRow where
    //I will place the sorted columns
    let resultsRow = document.getElementById("resultsRow");
    


    //create an array to hold the columns
    let arrayOfColumns = [];
    //get the divs where the class is column
    const listOfColumnDivElements = document.querySelectorAll("div.column");
    //show the columns in the console log
    console.log("listOfColumnDivElements: ", listOfColumnDivElements);
    //place each div with the class column into the arrayOfColumns
    //by looping through the listOfColumnDivElements
    for (let index = 0; index < listOfColumnDivElements.length; index++) {
        arrayOfColumns.push(listOfColumnDivElements[index]);
        console.log("listOfColumnDivElements[index].children[0]: ", listOfColumnDivElements[index].children[0].innerText);
    }

    //show the arrayOfColumns before I sort it in the console.log
    console.log("arrayOfColumns pre-sorted: ", arrayOfColumns);
    
    //sort the array by using the sort method.
    //supply the sort method with a function that finds the text in the span 
    //within the div and uses that as the values to sort by
    arrayOfColumns.sort(sortSpansInDiv);
    //show the arrayOfColumns after I sort it in the console.log
    console.log("arrayOfColumns sorted: ", arrayOfColumns);
/*
    //add the now sorted columns from the array into the resultsRow
    for (let index = 0; index < arrayOfColumns.length; index++) {
        resultsRow.appendChild(arrayOfColumns[index]);
        console.log("resultsRow: ", resultsRow);
    }
*/
    for (let index = 0; index < arrayOfColumns.length; index++) {
        newRow.appendChild(arrayOfColumns[index]);
        console.log("newRow: ", newRow);
    }

    row0.replaceWith(newRow);
}

//sort the columns in the original row and place them in the resultsRow
function sortItVer2() {

    console.log("using sortItVer2()");

    //grab a reference to the resultsRow where
    //I will place the sorted columns
    let resultsRow = document.getElementById("resultsRow");

    //create an array to hold the columns
    let arrayOfSpans = [];
    //get a collection of all the spans
    let spans = document.getElementsByTagName('span');
    //loop throught the collection of spans and place them in the array
    for (let index = 0; index < spans.length; index++) {
        arrayOfSpans.push(spans[index]);
    }


    console.log("arrayOfSpans pre-sorted: ", arrayOfSpans);

    //sort the array of spans by looking at the outText
    arrayOfSpans.sort(function (a, b) {
        if (a.outerText < b.outerText) {
            return -1;
        } else {
            return 1;
        }
    });

    console.log("arrayOfSpans sorted: ", arrayOfSpans);
 
    //go through the array of spans 
    //get parent div of the span
    //and append it as a child to the resultsRow
    for (let index = 0; index < arrayOfSpans.length; index++) {
        let pElement = arrayOfSpans[index].parentElement;
        console.log("pElement f: ", pElement);
        console.log("pElement.tagName f: ", pElement.tagName);
        while (pElement.tagName !== "DIV") {
            pElement = pElement.parentElement;
            console.log("pElement w: ", pElement);
        }
        //this should be a div
        resultsRow.appendChild(pElement);
        console.log("resultsRow: ", resultsRow);
    }
}


//https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
function sortItVer3() {

    let parentDiv = document.querySelector(".column").parentNode;

    //get a collection of all the spans
    let spans = document.getElementsByTagName('span');
    bblSort(parentDiv, spans);
}

// Bubble sort Implementation using Javascript
// Creating the bblSort function
function bblSort(parentDiv, spans ){
	
    for(var i = 0; i < spans.length; i++){
        console.log("i: ", i);
        
        // Last i elements are already in place
        for(var j = 0; j < ( spans.length - i -1 ); j++){
            console.log("j: ", j);

            console.log("spans[j].innerText: ", spans[j].innerText );
            console.log("spans[j+1].innerText:  ", spans[j+1].innerText);
            // Checking if the item at present iteration
            // is greater than the next iteration
            if(spans[j].innerText > spans[j+1].innerText){
                // If the condition is true then insert the one after before this one
                //parentDiv.insertBefore(spans[j + 1].parentNode, spans[j].parentNode);
            }
            
        }
        //get the new values of the span
        spans = document.getElementsByTagName('span');
    }
        // Print the sorted array
        console.log(spans);
}

//https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith
function sortItVer4() {
    console.log("using sortItVer4()");

    let newRow = document.createElement('div');
    newRow.id = "row0";
    newRow.className = "row";

    let row0 = document.getElementById("row0");
    console.log(row0);

    //create an array to hold the columns
    let arrayOfColumns = [];
    //get the divs where the class is column
    const listOfColumnDivElements = document.querySelectorAll("div.column");
    //show the columns in the console log
    console.log("listOfColumnDivElements: ", listOfColumnDivElements);
    //place each div with the class column into the arrayOfColumns
    //by looping through the listOfColumnDivElements
    for (let index = 0; index < listOfColumnDivElements.length; index++) {
        arrayOfColumns.push(listOfColumnDivElements[index]);
        console.log("listOfColumnDivElements[index].children[0]: ", listOfColumnDivElements[index].children[0].innerText);
    }

    //show the arrayOfColumns before I sort it in the console.log
    console.log("arrayOfColumns pre-sorted: ", arrayOfColumns);
    
    //sort the array by using the sort method.
    //supply the sort method with a function that finds the text in the span 
    //within the div and uses that as the values to sort by
    arrayOfColumns.sort(sortSpansInDiv);
    //show the arrayOfColumns after I sort it in the console.log
    console.log("arrayOfColumns sorted: ", arrayOfColumns);

    for (let index = 0; index < arrayOfColumns.length; index++) {
        newRow.appendChild(arrayOfColumns[index]);
        console.log("newRow: ", newRow);
    }

    //replace the div row0 with the newRow that contains the sorted values
    row0.replaceWith(newRow);
}
