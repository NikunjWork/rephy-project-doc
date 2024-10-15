document.addEventListener("DOMContentLoaded", function () {
  const copyrightDiv = document.querySelector(".md-copyright");
  if (copyrightDiv) {
    copyrightDiv.innerHTML = `
        <div class="md-copyright__highlight">
          Copyright © 2024 Rephy
        </div>
      `;
  }
});
