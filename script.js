const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
	navLinks.classList.toggle('open');

	const expanded = navLinks.classList.contains('open');
	menuButton.setAttribute('aria-expanded', expanded);
	menuButton.textContent = expanded ? '✕' : '☰';
});

const form = document.getElementById('contact-form-id');
const msgDiv = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const labelName = document.getElementById('label-name');
    const labelEmail = document.getElementById('label-email');
    const labelMessage = document.getElementById('label-message');

    let isValid = true;

    if (nameInput.value.trim() === "") {
        labelName.classList.add("label-error");
        labelName.classList.remove("label-success");
        isValid = false;
    } else {
        labelName.classList.remove("label-error");
        labelName.classList.add("label-success");
    }

    if (emailInput.value.trim() === "") {
        labelEmail.classList.add("label-error");
        labelEmail.classList.remove("label-success");
        isValid = false;
    } else {
        labelEmail.classList.remove("label-error");
        labelEmail.classList.add("label-success");
    }

    if (messageInput.value.trim() === "") {
        labelMessage.classList.add("label-error");
        labelMessage.classList.remove("label-success");
        isValid = false;
    } else {
        labelMessage.classList.remove("label-error");
        labelMessage.classList.add("label-success");
    }

    if (!isValid) {
        msgDiv.textContent = "Please fill out all required fields.";
        msgDiv.style.color = "red";
        return;
    }

    msgDiv.textContent = "Thank you for your message!";
    msgDiv.style.color = "lightgreen";

    form.reset();

    labelName.classList.remove("label-success");
    labelEmail.classList.remove("label-success");
    labelMessage.classList.remove("label-success");
});
