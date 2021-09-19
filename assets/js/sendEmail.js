function sendEmail(event) {
    event.preventDefault();
        
    emailjs.send("service_7wjurxm", "Spanish courses", {
        "from_name": this.fullname.value,
        "from_email": this.emailaddress.value,
        "information_request": this.informationsummary.value,
    })
     .then(
        function(response) {
          console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    
    this.reset();
    
    return false;
}
