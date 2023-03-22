function display(num)
{
    output=document.getElementById('displayScreen');
    output.value += num;
}

// button functions

function Solve() {
    try {
        output.value = eval(output.value);
    }

    catch (err) {
        alert("invalid");
    }

}

function allClear() {
    output.value = "";
}

function deLete() {
    output.value = output.value.slice(0, -1);
}

function square() {
    output.value = output.value * output.value;
}

function oneByX() {
    output.value = 1 / output.value;
}

function squareRoot() {
    output.value = Math.sqrt(output.value);
}

