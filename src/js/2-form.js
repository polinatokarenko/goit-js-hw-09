const storageKey = "feedback-form-state";
const formData = { email: "", message: "" };

const form = document.querySelector("form");

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.querySelector("input[name='email']").value.trim();
  const message = form.querySelector("textarea[name='message']").value.trim();
    if (!email || !message) {
        alert("Fill please all fields");
        return;
    } else {
        console.log(formData);
        form.reset();
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
    }
});