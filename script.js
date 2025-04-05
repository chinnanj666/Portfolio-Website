let typed = new Typed(".multiple-text", {
    strings: ["Back-end Developer", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
})
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('active');
});