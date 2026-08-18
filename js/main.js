const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// ==================== Pricing Section ====================

const pricingWatch = document.getElementById("pricingWatch");
const selectedColor = document.getElementById("selectedColor");
const productPrice = document.getElementById("productPrice");
const orderText = document.getElementById("orderText");

// ==================== Color Selection ====================

const colorButtons = document.querySelectorAll(".color-circle");

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active from all colors
    colorButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active to selected color
    button.classList.add("active");

    // Get selected color and image
    const color = button.dataset.color;
    const image = button.dataset.image;

    // Update color name
    selectedColor.textContent = color;

    // Small fade animation
    pricingWatch.style.opacity = "0";
    pricingWatch.style.transform = "scale(0.95)";

    setTimeout(() => {
      pricingWatch.src = image;

      pricingWatch.style.opacity = "1";
      pricingWatch.style.transform = "scale(1)";
    }, 200);
  });
});

// ==================== Model Selection ====================

const modelButtons = document.querySelectorAll(".model-card");

modelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active from all models
    modelButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Activate selected model
    button.classList.add("active");

    // Get model data
    const price = button.dataset.price;

    // Update price
    productPrice.textContent = price;

    // Update CTA
    orderText.textContent = `Pre-Order Now — ${price}`;
  });
});
