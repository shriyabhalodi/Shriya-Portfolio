const parentcontainer = document.querySelector('.project-list');

parentcontainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.classList.contains('read-more-btn');

    if (!isReadMoreBtn) return;

    const currentText = current.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
});
