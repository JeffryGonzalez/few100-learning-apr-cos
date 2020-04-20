import { formatName } from './formatters';




const theButton = document.getElementById('formatIt') as HTMLButtonElement;
const firstName = document.getElementById('firstName') as HTMLInputElement;
const lastName = document.getElementById('lastName') as HTMLInputElement;
const formatted = document.getElementById('formatted') as HTMLHeadingElement;

console.log({
    theButton,
    firstName,
    lastName,
    formatted
});

theButton.addEventListener('click', getNames)


function getNames() {
    const fName = firstName.value; // ugh!
    const lName = lastName.value; // double ugh
    console.log({ fName, lName })
    const fullName = formatName(fName, lName);
    formatted.innerHTML = fullName;
}

const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const add = document.getElementById('add') as HTMLButtonElement;
const answer = document.getElementById('answer') as HTMLSpanElement;

add.addEventListener('click', () => {
    const n1 = num1.valueAsNumber;
    const n2 = num2.valueAsNumber;
    const sum = n1 + n2;
    answer.innerText = 'The answer is ' + sum;
})
