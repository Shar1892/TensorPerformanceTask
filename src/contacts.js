const contacts = document.getElementsByClassName('contacts')[0];
const stickyHeader = document.getElementsByClassName('stickyHeader')[0];

function addContacts() {
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < 50000; i++) {
		const child = document.createElement('div');
		child.classList.add('contact');
		child.textContent = i;
		fragment.appendChild(child);
	}
	contacts.appendChild(fragment);
}

/*contacts.addEventListener('scroll', (e) => {
	const items = Array.from(contacts.getElementsByClassName('contact'));
	const itemOffsets = items.map((item) => item.offsetTop);
	const topItemIndex = itemOffsets.findIndex(
		(offset) => contacts.scrollTop - offset <= -18
	);
	if (topItemIndex !== -1) {
		stickyHeader.textContent = items[topItemIndex].textContent;
	}
});*/

contacts.addEventListener('scroll', (e) => {
	let topContactsList = contacts.scrollTop;
	const topItemIndex = Math.floor(topContactsList / itemOffset);
	if (topItemIndex !== -1) {
		stickyHeader.textContent = items[topItemIndex].textContent;
	}
});

addContacts();

const items = Array.from(contacts.getElementsByClassName('contact'));
const itemOffset = items[0].offsetTop;
