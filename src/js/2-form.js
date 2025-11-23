const storageKey = "feedback-form-state";
let formData = { email: "", message: "" };
const form = document.querySelector("form");

function initForm() {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    if (form.elements.email) form.elements.email.value = formData.email || "";
    if (form.elements.message) form.elements.message.value = formData.message || "";
  }
}

initForm();

form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem(storageKey);
  formData = { email: "", message: "" };
});
