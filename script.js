document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");
    let draggedElement = null;

    images.forEach((image) => {
        image.setAttribute("draggable", "true"); // Ensure elements are draggable

        image.addEventListener("dragstart", (e) => {
            draggedElement = e.target;
            e.dataTransfer.setData("text/plain", e.target.id); // Store dragged element ID
            e.target.classList.add("selected"); // Highlight selected element
        });

        image.addEventListener("dragover", (e) => {
            e.preventDefault(); // Allow drop
        });

        image.addEventListener("drop", (e) => {
            e.preventDefault();

            const targetElement = e.target.closest(".image"); // Ensure dropping on valid element
            if (!draggedElement || !targetElement || draggedElement === targetElement) return;

            // Swap images
            const tempBackground = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
            targetElement.style.backgroundImage = tempBackground;

            draggedElement.classList.remove("selected"); // Remove highlight
        });

        image.addEventListener("dragend", () => {
            if (draggedElement) {
                draggedElement.classList.remove("selected"); // Ensure highlight is removed
                draggedElement = null; // Reset after dragging
            }
        });
    });
});
