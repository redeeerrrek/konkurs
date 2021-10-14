const ws = new WebSocket('ws://localhost:3001');
ws.onmessage = (msg) => {
    console.log(msg.data)
}

document.querySelector('#btn').addEventListener('click', () => {
    const fromValue = document.querySelector('#ipt1').value;
    const curr1 = document.querySelector('#from').value;
    const curr2 = document.querySelector('#to').value;

    ws.send([fromValue, curr1, curr2])
})