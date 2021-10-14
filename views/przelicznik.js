const ws = new WebSocket('ws://localhost:3001');
ws.onmessage = (msg) => {
    console.log(msg.data)
    document.querySelector("#ipt2").value = msg.data;
    document.querySelector(".currency1").innerHTML = `1 ${document.querySelector('#from').value.toString().toUpperCase()} = ${msg.data} ${document.querySelector('#to').value.toString().toUpperCase()}`;
}
function isNumeric(num){
    return !isNaN(num)
}

setInterval(() => {
    if(!isNumeric(document.querySelector('#ipt1').value)) {
        document.querySelector('#ipt1').value = "";
    }
    
}, 10)


document.querySelector('#btn').addEventListener('click', () => {
    var fromValue = document.querySelector('#ipt1').value;
    var curr1 = document.querySelector('#from').value;
    var curr2 = document.querySelector('#to').value;

    ws.send([fromValue, curr1, curr2])
})