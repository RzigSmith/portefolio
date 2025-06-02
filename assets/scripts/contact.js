const contactForm = document.getElementById("contact-form");
contactForm.addEventListener('submit', async (e) => {
    (e).preventDefault();

    const formData = new FormData(contactForm);
    const response = await fetch('https://contact.com', {
        method: 'POST',
        body : formData
    });
    if (response.ok) {
        alert ('Message envoyé !');
    } else {
        alert ('Erreur, réessayer plus tard.');
    }
});