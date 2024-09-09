document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const system = document.getElementById('system').value;
    const otherSystem = document.getElementById('otherSystemInput').value;
    const arrays = document.getElementById('arrays').value;
    const stories = document.getElementById('stories').value;
    const description = document.getElementById('description').value;

    const templateParams = {
        name: name,
        phone: phone,
        email: email,
        system: system === 'OTHER' ? otherSystem : system,
        arrays: arrays,
        stories: stories,
        description: description
    };

    emailjs.send('service_9oxov8m', 'template_iah4myb', templateParams) // Service ID and Template ID
        .then(function(response) {
            alert('SUCCESS! Your quote request has been sent.');
        }, function(error) {
            alert('FAILED... Please try again later.');
        });
});
