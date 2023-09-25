const inputs = document.querySelectorAll("input");
    const sendButton = document.getElementById("sendBtn");
    sendButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent form submission
      let allFieldsFilled = true;

      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          allFieldsFilled = false;
        }
      });

      if (allFieldsFilled) {
        alert("Thanks for reaching out!");
      } else {
        alert("Some fields are empty!");
      }
    });

    // scroll up button
    const scrollUpBtn = document.getElementById("scroll-up");
    scrollUpBtn.addEventListener("click",()=>{
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
      
      })  
      
    })

    //typing effect
   
    // let charIndex = 0;
    // const typingText = document.querySelector(".typing-text");
    
    // function type() {
    //     if (charIndex < text.length) {
    //         typingText.textContent += text.charAt(charIndex);
    //         charIndex++;
    //         setTimeout(type, 100000); // Adjust typing speed here (milliseconds)
    //     } else {
    //         // Stop the animation when the text is fully typed
    //         clearTimeout(typingTimeout);
    //     }
    // }
    
    // // Start the typing animation
    // const typingTimeout = setTimeout(type, 100000);
    
