"use strict";

const form = document.getElementById("application-form");

if (form) {
  const fieldset = document.getElementById("services-fieldset");
  const checkboxes = Array.from(form.querySelectorAll('input[name="services"]'));
  const summary = document.getElementById("form-errors");
  const status = document.getElementById("form-status");
  const submitButton = document.getElementById("submit-button");
  const touched = new Set();

  const fields = {
    company: document.getElementById("company-name"),
    contact: document.getElementById("contact-name"),
    email: document.getElementById("work-email"),
    country: document.getElementById("country"),
    services: fieldset,
    message: document.getElementById("message"),
  };

  const errorIds = {
    company: "company-name-error",
    contact: "contact-name-error",
    email: "work-email-error",
    country: "country-error",
    services: "services-error",
    message: "message-error",
  };

  function getError(key) {
    return document.getElementById(errorIds[key]);
  }

  function getErrorMessage(key) {
    const field = fields[key];
    const value = field.value || "";

    if (key === "services") {
      return checkboxes.some((checkbox) => checkbox.checked)
        ? ""
        : "Selecciona al menos un servicio de interés.";
    }

    if (key === "message") {
      return value.length > 1000 ? "El mensaje no puede superar los 1000 caracteres." : "";
    }

    if (key === "company") {
      if (!value.trim()) return "Escribe el nombre de la empresa.";
      if (value.length > 120) return "El nombre de la empresa no puede superar los 120 caracteres.";
    }

    if (key === "contact") {
      if (!value.trim()) return "Escribe el nombre de la persona de contacto.";
      if (value.length > 100) return "El nombre de contacto no puede superar los 100 caracteres.";
    }

    if (key === "email") {
      if (!value.trim()) return "Introduce tu email laboral.";
      if (value.length > 254) return "El email no puede superar los 254 caracteres.";
      if (field.validity.typeMismatch) return "Introduce un email válido, como nombre@empresa.com.";
    }

    if (key === "country" && !value) return "Selecciona un país.";

    return "";
  }

  function setError(key, message) {
    const field = fields[key];
    const error = getError(key);
    error.textContent = message;
    error.classList.toggle("hidden", !message);

    if (message) {
      field.setAttribute("aria-invalid", "true");
    } else {
      field.removeAttribute("aria-invalid");
    }
  }

  function validateField(key) {
    const message = getErrorMessage(key);
    setError(key, message);
    return !message;
  }

  function clearFeedback() {
    touched.clear();
    Object.keys(fields).forEach((key) => setError(key, ""));
    summary.textContent = "";
    status.textContent = "";
  }

  Object.entries(fields).forEach(([key, field]) => {
    const control = key === "services" ? checkboxes : [field];

    control.forEach((element) => {
      element.addEventListener("blur", () => {
        touched.add(key);
        validateField(key);
      });

      element.addEventListener(key === "country" || key === "services" ? "change" : "input", () => {
        summary.textContent = "";
        status.textContent = "";
        if (touched.has(key)) validateField(key);
      });
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "";

    const keys = Object.keys(fields);
    keys.forEach((key) => touched.add(key));
    const invalidKeys = keys.filter((key) => !validateField(key));

    if (invalidKeys.length) {
      summary.textContent = `Hay ${invalidKeys.length} campos por revisar. Se ha enfocado el primero con error.`;
      const firstInvalid = invalidKeys[0] === "services" ? checkboxes[0] : fields[invalidKeys[0]];
      firstInvalid.focus();
      return;
    }

    summary.textContent = "";
    status.textContent =
      "Validación completada. Esta confirmación es una demostración: los datos no se han enviado ni guardado.";
  });

  form.addEventListener("reset", clearFeedback);
  submitButton.disabled = false;
}