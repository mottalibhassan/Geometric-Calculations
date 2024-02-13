// triangle javaScript link file 
function triangleCalculator(){
    const baseInputValue = document.getElementById('baseValue');
    const baseOnlyValue = baseInputValue.value ;
    const base = parseFloat(baseOnlyValue);
    console.log(base);
    const heightInputValue = document.getElementById('height-value');
    const heightOnlyValue = heightInputValue.value;
    const height = parseFloat(heightOnlyValue);
    console.log(height);
    // display area 
    const area = 0.5 * base * height;
    const displayValue = document.getElementById('displayValue');
    displayValue.innerText = area;
}