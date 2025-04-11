//your code here
const images = document.querySelectorAll('.image');

let draggedItem = null;

images.forEach(image => {
    image.addEventListener('dragstart', () => {
        draggedItem = image;
        setTimeout(() => {
            image.style.display = 'none';
        }, 0);
    });

    image.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedItem = null;
            image.style.display = 'block';
        }, 0);
    });

    image.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    image.addEventListener('dragenter', (e) => {
        e.preventDefault();
        image.classList.add('selected');
    });

    image.addEventListener('dragleave', () => {
        image.classList.remove('selected');
    });

    image.addEventListener('drop', () => {
        image.classList.remove('selected');
        if (draggedItem) {
            const draggedItemId = draggedItem.id;
            const targetItemId = image.id;

            // Swap the images
            const draggedItemContent = draggedItem.innerHTML;
            draggedItem.innerHTML = image.innerHTML;
            image.innerHTML = draggedItemContent;

            // Swap the IDs
            draggedItem.id = targetItemId;
            image.id = draggedItemId;
        }
    });
});