
function calculateTip() {

    let bill = document.getElementById("billAmount").value;
    let percent = document.getElementById("tipPercent").value;

    bill = parseFloat(bill);
    percent = parseFloat(percent);

    if (isNaN(bill) || isNaN(percent)) {
        alert("Please enter valid numbers!");
        return;
    }

    let tip = (bill * percent) / 100;
    let total = bill + tip;

    document.getElementById("tipAmount").value = "$" + tip.toFixed(2);
    document.getElementById("totalAmount").value = "$" + total.toFixed(2);

    showBackButton(); 
}



back.addEventListener("click", () => {
    window.location.href = "index.html";
});
