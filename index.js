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