function rhombusCalculator(){
    const firstD = getElementValue('DOne');
    const twoD = getElementValue('DTwo');
    const summationOfRhombus = 0.5*firstD*twoD;
    setValue('displayValueRhombus',summationOfRhombus);
    // const showResult = document.getElementById('displayValueRhombus');
    // showResult.innerText = summationOfRhombus;
    // console.log(summationOfRhombus);
    // console.log(firstD);
    // console.log(twoD);
}

function getElementValue(element){
    const elementInputValue = document.getElementById(element);
    const elementValue = elementInputValue.value ;
    const elementConverting = parseFloat(elementValue);
    // console.log(elementConverting);
    return elementConverting;
}
function setValue (elementId, area){
    const value = document.getElementById(elementId);
    value.innerText = area;
}