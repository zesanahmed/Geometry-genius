
let serial = 0;

const convert = '<button class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Convert to m<sup>2</sup></button>';


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

function getNameById(nameId) {
    const name = document.getElementById(nameId).innerText;
    return name;
}
function getWidthElementById(widthId) {
    const width = parseFloat(document.getElementById(widthId).value).toFixed(2);
    return width;
}
function getLengthElementById(lengthId) {
    const length = parseFloat(document.getElementById(lengthId).value).toFixed(2);
    return length;
}


// function getTextElementById(nameId, widthId, lengthId) {
//     const name = parseFloat(document.getElementById(nameId).innerText);
//     const width = parseFloat(document.getElementById(widthId).value).toFixed(2);
//     const length = parseFloat(document.getElementById(lengthId).value).toFixed(2);
//     return name, width, length;
// }





document.getElementById('btn-triangle').addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById('name1').innerText;
    const base = document.getElementById('base-field').value;
    const height = document.getElementById('height-field').value;
    const result = 0.5 * parseFloat(base) * parseFloat(height);




    if (base === '' || base < 0 || isNaN(base) === true || height === '' || height < 0 || isNaN(height) === true) {
        alert('Please input a valid number')
        return;
    }
    else if (Number.isInteger(result) === true) {
        return displayData(name, result, convert);
    }

    else {
        const results = result.toFixed(2);
        displayData(name, results, convert);
    }

});

document.getElementById("btn-rectangle").addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById('name2').innerText;
    const width = document.getElementById('width-field').value;
    const length = document.getElementById('length-field').value;
    const result = parseFloat(width) * parseFloat(length);



    if (width === '' || width < 0 || isNaN(width) === true || length === '' || length < 0 || isNaN(length) === true) {
        alert('Please input a valid number')
    }
    else if (Number.isInteger(result) === true) {
        return displayData(name, result, convert);
    }

    else {
        const results = result.toFixed(2);
        displayData(name, results, convert);
    }
});

document.getElementById("btn-card3").addEventListener("click", function () {
    serial += 1;
    const name = getNameById("name3");
    const width = getWidthElementById("width-field-3");
    const length = getLengthElementById("length-field-3");
    const result = parseFloat(width) * parseFloat(length);
    if (width === '' || width < 0 || isNaN(width) === true || length === '' || length < 0 || isNaN(length) === true) {
        alert('Please input a valid number')
    }
    else if (Number.isInteger(result) === true) {
        return displayData(name, result, convert);
    }

    else {
        const results = result.toFixed(2);
        displayData(name, results, convert);
    }
});
document.getElementById("btn-card4").addEventListener("click", function () {
    serial += 1;
    const name = getNameById("name4");
    const width = getWidthElementById("width-field-4");
    const length = getLengthElementById("length-field-4");
    const result = 0.5 * parseFloat(width) * parseFloat(length);
    if (width === '' || width < 0 || isNaN(width) === true || length === '' || length < 0 || isNaN(length) === true) {
        alert('Please input a valid number')
        return;
    }
    else if (Number.isInteger(result) === true) {
        return displayData(name, result, convert);
    }

    else {
        const results = result.toFixed(2);
        displayData(name, results, convert);
    }
});
document.getElementById("btn-card5").addEventListener("click", function () {
    serial += 1;
    const name = getNameById("name5");
    const width = getWidthElementById("width-field-5");
    const length = getLengthElementById("length-field-5");
    const result = 0.5 * parseFloat(width) * parseFloat(length);
    if (width === '' || width < 0 || isNaN(width) === true || length === '' || length < 0 || isNaN(length) === true) {
        alert('Please input a valid number')
        return;
    }
    else if (Number.isInteger(result) === true) {
        return displayData(name, result, convert);
    }

    else {
        const results = result.toFixed(2);
        displayData(name, results, convert);
    }
});
document.getElementById("btn-card6").addEventListener("click", function () {
    serial += 1;
    const name = getNameById("name6");
    const width = getWidthElementById("width-field-6");
    const length = getLengthElementById("length-field-6");
    const result = 3.1416 * parseFloat(width) * parseFloat(length);
    if (width === '' || width < 0 || isNaN(width) === true || length === '' || length < 0 || isNaN(length) === true) {
        alert('Please input a valid number')
        return;
    }
    else if (Number.isInteger(result) === true) {
        return displayData(name, result, convert);
    }

    else {
        const results = result.toFixed(2);
        displayData(name, results, convert);
    }
});

document.getElementById("window").addEventListener("click", function () {
    window.location.href = "explore.html";
});









