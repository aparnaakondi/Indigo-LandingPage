

document.getElementById('first-class-plus').addEventListener('click', function () {
    handleTicketPrice('first-class', true);
})

document.getElementById('first-class-minus').addEventListener('click', function () {
    handleTicketPrice('first-class', false);
})

document.getElementById('economy-class-plus').addEventListener('click', function () {
    handleTicketPrice('economy-class', true);
})

document.getElementById('economy-class-minus').addEventListener('click', function () {
    handleTicketPrice('economy-class', false);
})

// Common function for both Class ticket

function handleTicketPrice(ticket, isIncrease) {
    let currentTicketNumber = document.getElementById(ticket + '-ticket-number').value;
    currentTicketNumber = parseInt(currentTicketNumber);

    let newTicketNumber = currentTicketNumber;

    if (isIncrease == true) {

        newTicketNumber = currentTicketNumber + 1;
    }

    if (isIncrease == false && currentTicketNumber > 0) {
        newTicketNumber = currentTicketNumber - 1;
    }

    document.getElementById(ticket + '-ticket-number').value = newTicketNumber;

    let ticketPrice = 0;

    if (ticket == 'first-class') {
        ticketPrice = newTicketNumber * 2200;
    } else if (ticket == 'economy-class') {
        ticketPrice = newTicketNumber * 5600;
    }

    console.log(ticketPrice);
    calculateTotal();
}

//Total Price
function calculateTotal() {
    const firstClassTicket = document.getElementById('first-class-ticket-number');
    const firstClassTicketNumber = parseInt(firstClassTicket.value);

    const economyClassTicket = document.getElementById('economy-class-ticket-number');
    const economyClassTicketNumber = parseInt(economyClassTicket.value);

    // Calculate the total ticket price
    const totalTicketPrice = firstClassTicketNumber * 2200 + economyClassTicketNumber * 5600s;

    // Calculate the total GST
    const totalgst = 0.1 * totalTicketPrice;

    // Calculate the total price including GST
    const priceTotal = totalTicketPrice + totalgst;

    // Set the inner text of the elements with the calculated values
    document.getElementById('price-subtotal').innerText = totalTicketPrice.toString();
    document.getElementById('price-gst').innerText = totalgst.toString();
    document.getElementById('price-total').innerText = priceTotal.toString();

    // Set the value of confirmation-price-total input field
    document.getElementById('confirmation-price-total').value = priceTotal;
}


// Confirmation form

document.getElementById('book-now-button').addEventListener('click', function () {

    const firstClassTicket = document.getElementById('first-class-ticket-number');
    const firstClassTicketNumber = parseInt(firstClassTicket.value);

    const economyClassTicket = document.getElementById('economy-class-ticket-number');
    const economyClassTicketNumber = parseInt(economyClassTicket.value);

    const depatureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;

    const flyingFrom = document.getElementById('flying-from').value;
    const flyingTo = document.getElementById('flying-to').value

    if ((firstClassTicketNumber > 0 || economyClassTicketNumber > 0) && (depatureDate.length > 0 && returnDate.length > 0) && (flyingFrom.length >0 && flyingTo.length>0)) {

        document.getElementById('booking-input').style.display = 'none';
        document.getElementById('booking-confirmation').style.display = 'block';
        document.getElementById('confirmation-flying-from').value = flyingFrom;
        document.getElementById('confirmation-flying-to').value = flyingTo;
        document.getElementById('confirmation-departure').value = depatureDate;
        document.getElementById('confirmation-return').value = returnDate;

    } else {

        alert('Please provide travel location, date and ticket number');

    }


})