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