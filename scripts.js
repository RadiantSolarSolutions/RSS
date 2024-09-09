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

    emailjs.send("service_9oxov8m", "template_iah4myb", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('SUCCESS! Your quote request has been sent.');
        }, function(error) {
            console.error('FAILED...', error);
            alert('FAILED... Please try again later.');
        });
});
