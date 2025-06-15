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
      current += value;
    }

    display.textContent = current;
  });
});
// Clear the display when the page loads
window.onload = () => {
  display.textContent = "";
  current = "";
};