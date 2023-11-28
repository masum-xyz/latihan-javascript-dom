// DOM Selection
// document.getElementsById() => elements

// const judul = document.getElementById('judul');

// judul.style.backgroundColor = 'blue';
// judul.style.color = 'red';
// judul.innerHTML = 'Masum-XD';

// // Document.getElementByTagname() => HTML Colection
// const p = document.getElementsByTagName('p');
// p[1].style.backgroundColor = 'lightblue';

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // document.querySelector() => element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // const p = document.querySelector('p');
// // p.innerHTML = 'ini di ubah melalui Javascript';

// // bag document.querySelectorAll('p');
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor = 'lightblue';
// 	p[i].innerHTML = 'Ini Paragraf 1';
// }

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// Event
// const p3 = document.querySelector('.p3');
// function ubahWarnaP2() {
// 	p2.style.backgroundColor = 'red';
// }
// function ubahWarnaP3() {
// 	p3.style.backgroundColor = 'red';
// }
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// EVENLIST
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
// 	const ul = document.querySelector('section#b ul');
// 	const liBaru = document.createElement('li');
// 	const teksLiBaru = document.createTextNode('Item Baru');
// 	liBaru.appendChild(teksLiBaru);
// 	ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function () {
// 	p3.style.backgroundColor = 'red';
// };
// p3.onclick = function () {
// 	p3.style.color = 'blue';
// };

p3.addEventListener('mouseenter', function () {
	p3.style.backgroundColor = 'red';
});
p3.addEventListener('mouseleave', function () {
	p3.style.backgroundColor = 'green';
});
