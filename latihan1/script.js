const btnUbahWarna = document.getElementById('btnUbahWarna');
btnUbahWarna.onclick = function () {
	// document.body.style.backgroundColor = 'lightblue';
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
};

const btnAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
btnAcakWarna.appendChild(teksTombol);
btnAcakWarna.setAttribute('type', 'button');
btnUbahWarna.after(btnAcakWarna);

btnAcakWarna.addEventListener('click', function () {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + '';
});

// Range
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('change', function () {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});
sHijau.addEventListener('change', function () {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});
sBiru.addEventListener('change', function () {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

document.body.addEventListener('mousemove', function (event) {
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ',100';
});
