//business Logic
function gramTopounds(g) {
    return (g) / 453.592;
}

function gramToounces(g) {
    return (g) / 453.592 * 16;
}

//user interface logic
const gram = prompt("Enter a gram");


window.alert('The result of function (Ibs): ' + gramTopounds(gram).toFixed(3) + '.\n' +
    'The result if function (oz): ' + gramToounces(gram).toFixed(4) + '.');