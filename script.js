function scrollToFooter() {
    document.getElementById("pageFooter").scrollIntoView({ behavior: "smooth" });
  }

  window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    if (params.get("scroll") === "footer") {
      document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
    }
  };

  document.querySelectorAll('.form-control').forEach(input => {
    const label = input.nextElementSibling;

    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        label.classList.add('hidden'); // fades out
      } else {
        label.classList.remove('hidden'); // fades in
      }
    });
  });

  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent submit until valid
    let isValid = true;

    // First name
    const firstName = document.getElementById("firstName");
    const firstNameError = document.getElementById("firstNameError");
    if (!/^[A-Za-z]+$/.test(firstName.value.trim())) {
      firstNameError.style.display = "block";
      isValid = false;
    } else {
      firstNameError.style.display = "none";
    }

    // Last name
    const lastName = document.getElementById("lastName");
    const lastNameError = document.getElementById("lastNameError");
    if (!/^[A-Za-z]+$/.test(lastName.value.trim())) {
      lastNameError.style.display = "block";
      isValid = false;
    } else {
      lastNameError.style.display = "none";
    }

    // Email
    const email = document.getElementById("formEmail");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Phone
    const phone = document.getElementById("typePhone");
    const phoneError = document.getElementById("phoneError");
    if (!/^\d{10,15}$/.test(phone.value.trim())) {
      phoneError.style.display = "block";
      isValid = false;
    } else {
      phoneError.style.display = "none";
    }

    // Message
    const message = document.getElementById("textAreaExample");
    const messageError = document.getElementById("messageError");
    if (message.value.trim().length < 10) {
      messageError.style.display = "block";
      isValid = false;
    } else {
      messageError.style.display = "none";
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset(); // clear form
      document.querySelectorAll(".form-label").forEach(label => label.classList.remove("hidden"));
    }
  });