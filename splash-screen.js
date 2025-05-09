const splash = document.getElementById('splash').classList;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < 10)
    {
        splash.add('fullscreen');
    }
    else
    {
        splash.remove('fullscreen');
    }
});