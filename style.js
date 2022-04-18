const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
	element.addEventListener('click', () => {
		nav.classList.toggle('show')
	})
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
	link.addEventListener('click', () => {
		nav.classList.remove('show')
	})
}
