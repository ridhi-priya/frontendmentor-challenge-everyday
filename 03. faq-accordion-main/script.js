function toggleParagraph(className, button) {
  const pTag = document.querySelector(className);
  const isHidden = pTag.style.display === 'none';
  
  pTag.style.display = isHidden ? 'block' : 'none';
  button.textContent = isHidden ? '-' : '+';
}

// Initialize paragraphs as hidden
document.querySelectorAll('.add').forEach(button => {
  const pTag = button.parentElement.nextElementSibling;
  pTag.style.display = 'none';
});
