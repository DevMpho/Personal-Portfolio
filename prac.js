document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello, I'm Mpho Mosima";
    let index = 0;
  
    function type() {
      if (index < text.length) {
        document.getElementById("auto-type").textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust the speed by changing the timeout value
      }
    }
  
    type(); // Start the typing effect
  });
  