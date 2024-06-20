// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const titleElemnt = document.getElementById('title');

console.dir(titleElemnt);
console.log(titleElemnt.clientWidth);

console.dir(titleElemnt.parentElement);
console.dir(titleElemnt.nextElementSibling);
