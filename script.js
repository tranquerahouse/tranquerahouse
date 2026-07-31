const conciergeBtn = document.querySelector(".chat-toggle");

if (conciergeBtn) {
  conciergeBtn.addEventListener("click", () => {
    window.open(
      "https://wa.me/60177270183?text=Hi%20Tranquera%20Concierge!%20I%20have%20a%20question%20about%20my%20stay.",
      "_blank"
    );
  });
}