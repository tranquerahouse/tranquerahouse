// ===============================
// Tranquera Concierge
// ===============================

const conciergeBtn = document.querySelector(".chat-toggle");
const chatMenu = document.querySelector(".chat-menu");

// Open / Close Concierge
if (conciergeBtn && chatMenu) {

    conciergeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        chatMenu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".chat-launcher")) {
            chatMenu.classList.remove("show");
        }
    });

}

// ===============================
// Accordion
// ===============================

const menuButtons = document.querySelectorAll(".menu-item");

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId = button.dataset.target;
        const target = document.getElementById(targetId);

        // Close all other sections
        document.querySelectorAll(".menu-content").forEach(section => {

            if (section !== target) {
                section.classList.remove("show");
            }

        });

        // Reset arrows/buttons
        menuButtons.forEach(btn => {

            if (btn !== button) {
                btn.classList.remove("active");
            }

        });

        // Toggle current section
        target.classList.toggle("show");
        button.classList.toggle("active");

    });

});

// ===============================
// Booking and enquiry analytics
// ===============================

document.addEventListener("click", (event) => {

    const link = event.target.closest("a[href]");

    if (!link || typeof window.gtag !== "function") {
        return;
    }

    const href = link.href;
    const decodedHref = decodeURIComponent(href).toLowerCase();
    let eventName = "";

    if (
        decodedHref.includes("book.tranquerahouse.com") ||
        decodedHref.includes("hotels.cloudbeds.com/reservation")
    ) {
        eventName = "booking_click";
    }
    else if (decodedHref.includes("wa.me/60177270183")) {

        if (
            document.body.classList.contains("dining-page") ||
            decodedHref.includes("reserve a table") ||
            decodedHref.includes("dining experience")
        ) {
            eventName = "whatsapp_dining_click";
        }
        else if (
            decodedHref.includes("transport") ||
            decodedHref.includes("attractions") ||
            decodedHref.includes("meragang")
        ) {
            eventName = "whatsapp_concierge_click";
        }
        else {
            eventName = "whatsapp_stay_click";
        }

    }

    if (!eventName) {
        return;
    }

    window.gtag("event", eventName, {
        link_url: href,
        link_text: link.textContent.trim().replace(/\s+/g, " ").slice(0, 100),
        page_path: window.location.pathname,
        transport_type: "beacon"
    });

});
