'use strict';

// Utility functions
// ...

// Color mapping function
function getColorName(hexCode) {
    const colorMap = {
        '#09f': 'Blue',
        '#9f0': 'Green',
        '#f90': 'Orange',
        '#f09': 'Pink',
        '#90f': 'Purple',
    };
    return colorMap[hexCode] || hexCode; // If the hex code is not found, return the original code
}

class Shape {
    constructor(name, colour, unitNumber) {
        this._name = name;
        this._colour = colour;
        this._unitNumber = unitNumber;
    }
    get name() {
        return this._name;
    }
    get colour() {
        return this._colour;
    }
    get unitNumber() {
        return this._unitNumber;
    }
    getInfo() {
        const colorName = getColorName(this._colour);
        return `Unit Number: ${this._unitNumber}, Shape: ${this._name}, Color: ${colorName}`;
    }
}

function createShape() {
    const shapeSelect = document.getElementById('shapeSelect');
    const colorSelect = document.getElementById('colorSelect');
    const shapeContainer = document.getElementById('shape-container');
    const messageParagraph = document.querySelector('.flex p');
    const selectedShape = shapeSelect.value;
    const selectedColor = colorSelect.value;

    if (shapeContainer.childElementCount < 25) {
        const unitNumber = shapeContainer.childElementCount + 1;
        const shape = new Shape(selectedShape, selectedColor, unitNumber);
        const shapeDiv = document.createElement('div');
        shapeDiv.className = `shape ${selectedShape}`;
        shapeDiv.style.backgroundColor = selectedColor;
        shapeDiv.onclick = () => {
            messageParagraph.textContent = shape.getInfo();
        };
        shapeContainer.appendChild(shapeDiv);
        messageParagraph.textContent = '';
    } else {
        messageParagraph.textContent = 'Box is full. Refresh the page to use again.';
    }
}