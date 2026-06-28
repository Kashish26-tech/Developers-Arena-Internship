console.log("Portfolio JavaScript Loaded Successfully!");

// Welcome Message
const welcomeText = document.getElementById("welcomeText");

if (welcomeText) {
    welcomeText.textContent =
        "Welcome! Explore my portfolio and feel free to connect with me.";
}

// Dark Mode
const darkModeBtn = document.getElementById("darkModeBtn");

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (darkModeBtn) {
            darkModeBtn.textContent = "☀️ Light Mode";
        }
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
}

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", toggleDarkMode);
}

loadTheme();

// Profile Image Hover
const profileImage = document.getElementById("profileImage");

if (profileImage) {
    profileImage.addEventListener("mouseover", function () {
        profileImage.style.transform = "scale(1.1) rotate(5deg)";
    });

    profileImage.addEventListener("mouseout", function () {
        profileImage.style.transform = "scale(1)";
    });
}

// Skill Box Hover
const skillBoxes = document.querySelectorAll(".skill-box");

skillBoxes.forEach(function (box) {
    box.addEventListener("mouseenter", function () {
        box.style.transform = "translateY(-8px)";
    });

    box.addEventListener("mouseleave", function () {
        box.style.transform = "translateY(0)";
    });
});

// Form Validation
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", validateForm);
}

function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (message.length < 10) {
        messageError.textContent = "Message must contain at least 10 characters.";
        isValid = false;
    }

    if (isValid) {
        alert("Message sent successfully!");
        form.reset();
    }
}

// Input Focus
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
        input.style.borderColor = "#2563eb";
    });

    input.addEventListener("blur", function () {
        input.style.borderColor = "#d1d5db";
    });
});

// Button Animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.style.transform = "scale(0.95)";

        setTimeout(function () {
            button.style.transform = "scale(1)";
        }, 150);
    });
});