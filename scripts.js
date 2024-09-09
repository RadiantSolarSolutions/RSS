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

    // If "OTHER" is selected in the system dropdown, use the otherSystem input value
    const systemInfo = system === 'OTHER' ? `Other: ${otherSystem}` : system;

    // Construct the body of the email
    const body = `
    Name: ${name}
    Phone: ${phone}
    Email: ${email}
    System Model: ${systemInfo}
    Number of Solar Arrays: ${arrays}
    Number of Stories: ${stories}
    Additional Information: ${description}
    `;

    // Use mailto to open the default mail client with the subject and body
    window.location.href = `mailto:radiantsolarsolutions.pa@gmail.com?subject=Quote Request&body=${encodeURIComponent(body)}`;
});
