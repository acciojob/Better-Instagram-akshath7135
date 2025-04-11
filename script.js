//your code here
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");

    let draggedElement = null;

    images.forEach(image => {
        image.addEventListener("dragstart", (e) => {
            draggedElement = e.target; // Store the dragged element
            e.target.classList.add("selected"); // Highlight selected element
        });

        image.addEventListener("dragover", (e) => {
            e.preventDefault(); // Allow drop
        });

        image.addEventListener("drop", (e) => {
            e.preventDefault();
            if (draggedElement !== e.target) {
                // Swap backgrounds
                let tempBackground = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = e.target.style.backgroundImage;
                e.target.style.backgroundImage = tempBackground;
            }
            draggedElement.classList.remove("selected"); // Remove highlight
        });

        image.addEventListener("dragend", () => {
            draggedElement.classList.remove("selected"); // Ensure highlight is removed
        });
    });
});
