// selector
const accordionHeadings = document.querySelectorAll('.accordion-heading');
const accordionDetails = document.querySelectorAll('.accordion-details');

// event
for (const heading of accordionHeadings) {
    heading.addEventListener('click', (e) => {
        const accordionHeading = e.target;
        if (accordionHeading.classList.contains('active')) {
            accordionHeading.classList.remove('active');
        }
        else {
            accordionHeadings.forEach(heading => {
                heading.classList.remove('active');
            });
            accordionHeading.classList.add('active');
        }
    });
}