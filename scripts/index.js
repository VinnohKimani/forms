const button = document.querySelector("#submit");
button.addEventListener("click", () => {
  //   console.log("Button cliked");
  const firstNameInput = document.getElementById("first-name");
  //   console.log(firstNameInput.value);
  const lastNameInput = document.getElementById("last-name");
  const formData = {
    firstName: firstNameInput.value.trim(),
    lastNameInput: lastNameInput.value.trim(),
  };
  firstNameInput.value = "";
  lastNameInput.value = "";
  console.log(formData);
});

const studentDetailsForm = document.querySelector("#student-details");
studentDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log("Form submitted");
  const formData = new FormData(studentDetailsForm);
  console.log(Object.fromEntries(formData));
  studentDetailsForm.reset();
});
