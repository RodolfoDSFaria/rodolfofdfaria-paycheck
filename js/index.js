var buttonCalc = document.getElementById('buttonCalc');

buttonCalc.addEventListener('click', function () {
    calcSalary(parseFloat(document.getElementById('inputSalary').value));
});

function calcSalary(salaryValue) {

    var INSSValue = 0, IRPFValue = 0, liquidSalary = 0, aux = 0;

    // calc INSS:
    if (salaryValue <= 1399.12) {
        INSSValue = (salaryValue * 8) / 100;
    } else if (salaryValue <= 2331.88) {
        INSSValue = (salaryValue * 9) / 100;
    } else {
        INSSValue = (salaryValue * 11) / 100;
    }

    aux = salaryValue - INSSValue;

    // calc IRPF:
    if (aux <= 1903.98) {
        IRPFValue = 0;
    } else if (aux <= 2826.65) {
        IRPFValue = (aux * 7.5) / 100;
        IRPFValue -= 142.80;
    } else if (aux <= 3751.05) {
        IRPFValue = (aux * 15) / 100;
        IRPFValue -= 354.80;
    } else if (aux <= 4664.68) {
        IRPFValue = (aux * 22.5) / 100;
        IRPFValue -= 636.13;
    } else {
        IRPFValue = (aux * 27.5) / 100;
        IRPFValue -= 869.36;
    }

    liquidSalary = salaryValue - INSSValue - IRPFValue;
    document.getElementById('labelINSS').innerHTML = Number(INSSValue).toFixed(2);
    document.getElementById('labelIRPF').innerHTML = Number(IRPFValue).toFixed(2);
    document.getElementById('labelLiquidSalary').innerHTML = Number(liquidSalary).toFixed(2);

}