function sendEmail(contactForm) {
    emailjs.send("service_7wjurxm", "Spanish courses", {
            "from_name": contactForm.fullname.value,
            "from_email": contactForm.emailaddress.value,
            "information_request": contactForm.informationsummary.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );

    return false;
}

document.getElementById("contactForm").addEventListener("submit", sendEmail);