let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(s => {
        let top = window.scrollY;
        let offset = s.offsetTop;
        let height = s.offsetHeight;
        let id = s.getAttribute('id');

        if(top >= offset && top <= offset + height){
            navLinks.forEach(l => {
                l.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};