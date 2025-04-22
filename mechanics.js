const introLink = document.getElementById('intro-link');
const volunteerLink = document.getElementById('volunteer-link');
const contactLink = document.getElementById('contact-link');
const extraLink = document.getElementById('extra-link');

const intro = document.getElementById('intro');
const volunteer = document.getElementById('volunteer');
const contact = document.getElementById('contact');
const extra = document.getElementById('extra');

intro.style.display = 'block';
volunteer.style.display = 'none';
contact.style.display = 'none';
extra.style.display = 'none';

introLink.addEventListener('click', () => {
intro.style.display = 'block';
volunteer.style.display = 'none';
contact.style.display = 'none';
extra.style.display = 'none';
});

volunteerLink.addEventListener('click', () => {
intro.style.display = 'none';
volunteer.style.display = 'block';
contact.style.display = 'none';
extra.style.display = 'none';
});

contactLink.addEventListener('click', () => {
intro.style.display = 'none';
volunteer.style.display = 'none';
contact.style.display = 'block';
extra.style.display = 'none';
});

extraLink.addEventListener('click', () => {
intro.style.display = 'none';
volunteer.style.display = 'none';
contact.style.display = 'none';
extra.style.display = 'block';
});
