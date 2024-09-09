document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert('SUCCESS! Your quote request has been sent.');
            this.reset();
        } else {
            alert('FAILED... Please try again later.');
        }
    }).catch(error => {
        alert('FAILED... Please try again later.');
    });
});
