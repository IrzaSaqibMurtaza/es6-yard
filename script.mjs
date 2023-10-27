function convertArea(event) {
    event.preventDefault();

    let yards = document.querySelector("#yardsInput").value;
    
    console.log(yards);
    
    // 1 Yard = 9 square feet
    let squareFeet = yards * 9;
    
    console.log(squareFeet);
    
    let resultMessage =
        `${yards} Yards is equal to ${squareFeet.toFixed(2)} square feet`;
    
        document.querySelector("#resultDisplay").innerHTML = resultMessage;
}