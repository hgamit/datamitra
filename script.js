// Form endpoint for lead submissions.
// To activate the contact form:
//   1. Sign up at https://formspree.io and create a new form.
//   2. Replace the empty string below with your Formspree endpoint:
//      e.g. "https://formspree.io/f/abcdefgh"
//   3. Commit and redeploy.
// Fallback: if left empty, users are shown a message to email hello@datamitra.ai
const FORM_ENDPOINT = "";

const form = document.querySelector("#lead-form");
const statusEl = document.querySelector("#form-status");
const yearEl = document.querySelector("#year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// ── Mobile hamburger nav ──────────────────────────────────────
const navToggle = document.querySelector("#nav-toggle");
const mainNav   = document.querySelector("nav[aria-label='Main navigation']");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // Close nav when a link is clicked (single-page scroll)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

  // Close nav on outside click
  document.addEventListener("click", (e) => {
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
}

function setStatus(message, type) {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.classList.remove("success", "error");
  if (type) {
    statusEl.classList.add(type);
  }
}

async function submitToEndpoint(payload) {
  if (!FORM_ENDPOINT) {
    throw new Error("FORM_ENDPOINT_NOT_CONFIGURED");
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("SUBMISSION_FAILED");
  }
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please complete all required fields.", "error");
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      painPoint: String(formData.get("painPoint") || "").trim(),
      consent: formData.get("consent") === "on",
      submittedAt: new Date().toISOString()
    };

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    setStatus("Submitting your details...", null);

    try {
      await submitToEndpoint(payload);
      setStatus("Thank you. Your message was submitted successfully.", "success");
      form.reset();
    } catch (error) {
      if (String(error.message) === "FORM_ENDPOINT_NOT_CONFIGURED") {
        setStatus(
          "Form is not configured yet. Please set FORM_ENDPOINT in script.js or email hello@datamitra.ai.",
          "error"
        );
      } else {
        setStatus(
          "Submission failed. Please try again or email hello@datamitra.ai.",
          "error"
        );
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
      }
    }
  });
}
