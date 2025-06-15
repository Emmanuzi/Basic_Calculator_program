let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let current = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        current = eval(current);
      } catch {
        current = "Error";
      }
    } else {
      // If the display is "0" or "Error", reset it
      if (display.textContent === "0" || display.textContent === "Error") {
        display.textContent = "";
        current = "";
      }
      current += value;
    }

    display.textContent = current;
  });
});
// Clear the display when the page loads
window.onload = () => {
  display.textContent = "0";
  current = "";
};
// Add a clear button functionality
function clearDisplay() {
  display.textContent = "0";
  current = "";
}
