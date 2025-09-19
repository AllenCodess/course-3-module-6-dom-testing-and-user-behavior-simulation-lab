function addElementToDOM(id, text) {
  const element = document.getElementById(id)
  if (element) {
    element.textContent = text
  }
}

function removeElementFromDOM(id) {
  const element = document.getElementById(id)
  if (element) element.remove()
}

function simulateClick(id, text) {
  addElementToDOM(id, text)
}

function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId)
  const input = form.querySelector("input")
  const errorElement = document.getElementById("error-message")

  if (!input.value.trim()) {
    errorElement.textContent = "Input cannot be empty"
    errorElement.classList.remove("hidden")
    return
  }

  addElementToDOM(outputId, input.value)
  errorElement.textContent = ""
  errorElement.classList.add("hidden")
  input.value = ""
}

// Export for Jest
if (typeof module !== "undefined") {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
  }
}

// Event listeners can still use these functions
const clickButton = document.getElementById("simulate-click")
if (clickButton) {
  clickButton.addEventListener("click", () => {
    simulateClick("dynamic-content", "Button Clicked!")
  })
}

const form = document.getElementById("user-form")
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    handleFormSubmit("user-form", "dynamic-content")
  })
}