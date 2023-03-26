
let serial = 0;

function displayData(name, result, convert) {

    const container = document.getElementById('table');
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial + '.' + name}</td>
        <td>${result + 'cm<sup>2</sup>'}</td >
        <td>${convert}</td>
`;
    container.appendChild(tr);
}

document.getElementById('btn-triangle').addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById('name1').innerText;
    const base = document.getElementById('base-field').value;
    const height = document.getElementById('height-field').value;
    const calculate = 0.5 * parseFloat(base) * parseFloat(height);
    const result = calculate.toFixed(2);
    const convert = '<button class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Convert to m<sup>2</sup></button>';
    if (base === '' || base < 0 || isNaN(base) === true || height === '' || height < 0 || isNaN(height) === true) {
        alert('Please input a valid number')
        return;
    }
    else {
        displayData(name, result, convert);
    }
});

document.getElementById("btn-rectangle").addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById('name2').innerText;
    const width = document.getElementById('width-field').value;
    const length = document.getElementById('length-field').value;
    const calculate = parseFloat(width) * parseFloat(length);
    const result = calculate.toFixed(2);
    const convert = '<button class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Convert to m<sup>2</sup></button>';
    if (width === '' || width < 0 || isNaN(width) === true || length === '' || length < 0 || isNaN(length) === true) {
        alert('Please input a valid number')
        return;
    }
    else {
        displayData(name, result, convert);
    }
});




