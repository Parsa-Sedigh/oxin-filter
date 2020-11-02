const accordions = document.querySelectorAll('.filter__accordion-heading');
const plusIcons = document.querySelectorAll('.fa-plus');
const minusIcons = document.querySelectorAll('.fa-minus');

for (let i = 0; i < accordions.length; i++) {
    minusIcons[i].style.display = 'none';

    accordions[i].addEventListener('click', () => {
        accordions[i].classList.toggle('open');
        const accItems = accordions[i].nextElementSibling;
        if (accItems.style.maxHeight) {
            accItems.style.maxHeight = null;
            minusIcons[i].style.display = 'none';
            plusIcons[i].style.display = 'inline-block';
        } else {
            accItems.style.maxHeight = accItems.scrollHeight + 'px';
            plusIcons[i].style.display = 'none';
            minusIcons[i].style.display = 'inline-block';
        }
    });
}
