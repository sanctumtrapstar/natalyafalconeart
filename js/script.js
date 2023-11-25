const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) { // Исправлено: 'lenght' на 'length'
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) { // Исправлено: 'pageyoffset' на 'pageYOffset'
                animItem.classList.add('active');
            } else {
                animItem.classList.remove('active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, // Исправлено: 'pageoffset' на 'pageXOffset'
            scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Исправлено: 'pageyoffset' на 'pageYOffset'
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}


