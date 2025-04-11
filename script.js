//your code here
// Select all the draggable elements and the parent container
const items = document.querySelectorAll('.image');
const container = document.getElementById('parent');

// Variables to hold the dragged item and the drop target
let draggedItem = null;

items.forEach((item) => {
  // Event listener for starting the drag
  item.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    setTimeout(() => {
      e.target.style.display = 'none';
    }, 0);
  });

  // Event listener for ending the drag
  item.addEventListener('dragend', (e) => {
    setTimeout(() => {
      e.target.style.display = 'block';
      draggedItem = null;
    }, 0);
  });

  // Prevent the default behavior to allow dropping
  item.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Handle the dragenter event for styling
  item.addEventListener('dragenter', (e) => {
    e.preventDefault();
    e.target.classList.add('selected');
  });

  // Remove styling on dragleave
  item.addEventListener('dragleave', (e) => {
    e.target.classList.remove('selected');
  });

  // Handle the drop event and swap content
  item.addEventListener('drop', (e) => {
    e.target.classList.remove('selected');
    if (e.target !== draggedItem) {
      // Swap the inner content of the dragged and drop targets
      const draggedContent = draggedItem.innerHTML;
      draggedItem.innerHTML = e.target.innerHTML;
      e.target.innerHTML = draggedContent;
    }
  });
});