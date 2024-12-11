// get the button
const scrollToTopButton = document.getElementById("scrollToTop");

// show the button when we scroll to a particular height
window.addEventListener("scroll", ()=> {
    // console.log("here", window.scrollY)
    if (window.scrollY > 700) {
        scrollToTopButton.style.display = "block"
        // scrollToTopButton.style.transition = "0.3s ease"
    }else{
        scrollToTopButton.style.display = "none"
    }
})

// scroll to the top, on click of the button
scrollToTopButton.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        behaviour: "smooth"
    })
})

// form submission
// get the form
const contactForm = document.getElementById("contactForm");

// add the event listner for the form submission
contactForm.addEventListener("submit", (event)=> {
    // prevent default submission of the form
    event.preventDefault()

    //through success alert
    Swal.fire({
        title: "Submission Successful!",
        text: "Thank you for responding",
        icon: "success"
      });
      
})