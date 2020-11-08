function foo(id) {
    const item = document.getElementById(id);
}

const one = document.getElementById("one");
const arthur_shelby = document.getElementById("ars");
const two = document.getElementById("two");
const john_shelby = document.getElementById("js");
const three = document.getElementById("three");
const thomas_shelby = document.getElementById("ts");
const four = document.getElementById("four");
const polly_gray = document.getElementById("pg");
const five = document.getElementById("five");
const alfie_solomons = document.getElementById("als");

one.addEventListener('mouseover', () => {
    arthur_shelby.style.backgroundColor = '#020202a1'
    arthur_shelby.style.visibility = "visible";
});

one.addEventListener('mouseout', () => {
    arthur_shelby.style.background = 'none';
    arthur_shelby.style.visibility = "hidden";
});

two.addEventListener('mouseover', () => {
    john_shelby.style.backgroundColor = '#020202a1'
    john_shelby.style.visibility = "visible";
});

two.addEventListener('mouseout', () => {
    john_shelby.style.background = 'none';
    john_shelby.style.visibility = "hidden";
});

three.addEventListener('mouseover', () => {
    thomas_shelby.style.backgroundColor = '#020202a1'
    thomas_shelby.style.visibility = "visible";
});

three.addEventListener('mouseout', () => {
    thomas_shelby.style.background = 'none';
    thomas_shelby.style.visibility = "hidden";
});

four.addEventListener('mouseover', () => {
    polly_gray.style.backgroundColor = '#020202a1'
    polly_gray.style.visibility = "visible";
});

four.addEventListener('mouseout', () => {
    polly_gray.style.background = 'none';
    polly_gray.style.visibility = "hidden";
});

five.addEventListener('mouseover', () => {
    alfie_solomons.style.backgroundColor = '#020202a1'
    alfie_solomons.style.visibility = "visible";
});

five.addEventListener('mouseout', () => {
    alfie_solomons.style.background = 'none';
    alfie_solomons.style.visibility = "hidden";
});

