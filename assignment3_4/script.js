// Function to convert Canadian Dollars to US Dollars
function convertToUSD() {
    // Get input value
    var cadInput = parseFloat(document.getElementById("cadInput").value);

    // Check for valid input
    if (isNaN(cadInput) || cadInput < 0) {
        alert("Please enter a valid positive number for Canadian Dollars.");
        return;
    }

    // Hardcoded exchange rate
    var exchangeRate = 0.75;

    // Perform conversion
    var usdResult = cadInput * exchangeRate;

    // Display result with up to 3 decimal places
    document.getElementById("resultUSD").innerHTML = "Converted to USD: " + usdResult.toFixed(3);
}

// Function to convert US Dollars to Canadian Dollars
function convertToCAD() {
    // Get input value
    var usdInput = parseFloat(document.getElementById("usdInput").value);

    // Check for valid input
    if (isNaN(usdInput) || usdInput < 0) {
        alert("Please enter a valid positive number for US Dollars.");
        return;
    }

    // Hardcoded exchange rate
    var exchangeRate = 1.33;

    // Perform conversion
    var cadResult = usdInput * exchangeRate;

    // Display result with up to 3 decimal places
    document.getElementById("resultCAD").innerHTML = "Converted to CAD: " + cadResult.toFixed(3);
}
