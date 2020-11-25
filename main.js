function calc(){
    var a = parseInt(document.querySelector("#rhif1").value);
    var b = parseInt(document.querySelector("#rhif2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == "min") {
        calculate = a - b;
    } else if (op == "add"){
        calculate = a + b;
    } else if (op == "mul") {
        calculate = a * b;
    } else if (op == "div") {
        calculate = a / b;
    }

    document.querySelector("#result").innerHTML = calculate;
};
