/**  Links the contact form with Email JS */
/** Code taken from Code Institute and adapted to fit the project */
function sendEmail(contactForm) {
    emailjs.send("service_7wjurxm", "Spanish courses", {
            "from_name": contactForm.fullname.value,
            "from_email": contactForm.emailaddress.value,
            "information_request": contactForm.informationsummary.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS - your email has been sent", response);
                document.getElementById("modal-success");
            },
            function (error) {
                console.log("FAILED - your email has not been sent", error);
            }
        );
        contactForm.reset();
    return false;
}

