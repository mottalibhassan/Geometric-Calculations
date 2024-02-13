function RectangleCalculator(){
    const baseInputValue = document.getElementById('wideValue');
    const baseOnlyValue = baseInputValue.value ;
    const base = parseFloat(baseOnlyValue);
    console.log(base);
    const heightInputValue = document.getElementById('lengthvalue');
    const heightOnlyValue = heightInputValue.value;
    const height = parseFloat(heightOnlyValue);
    console.log(height);
    // display area 
    const area = base * height;
    const displayValue = document.getElementById('displayValueRectangle');
    displayValue.innerText = area;
}