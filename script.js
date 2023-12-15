document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("check-in-button");
    const checkin = document.getElementById("check-in");
    const checkout = document.getElementById("check-out");
    const persons = document.getElementById("num-persons");

    function completeCheckin() {
        const checkinValue = checkin ? checkin.value.trim() : null;
        const checkoutValue = checkout ? checkout.value.trim() : null;

        if (!checkinValue || !checkoutValue ) {
            alert("Please fill in all fields.");
        } else {
            // Perform the check-in process
            // You can add your check-in logic here
            alert("Check-in process is complete!");
        }
    }

    // Check if the elements were found before adding the event listener
    if (button && checkin && checkout) {
        button.addEventListener("click", completeCheckin);
    } else {
        console.error("One or more elements not found. Check your id names.");
    }
});


