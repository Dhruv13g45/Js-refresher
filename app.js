const start = document.querySelector('#start')
const stop = document.querySelector('#stop')


const changeColor = () => {
    const hxcode = "123456ABCDEF"
    let bgColor = "#"
    for (let i = 0; i < 6; i++) {
        bgColor += hxcode[Math.floor(Math.random() * 12)]
    }
    return bgColor;
}


let timer;
const startChangeColor = () => {
    if (!timer) {
        timer = setInterval(invokeColor, 1000)
        console.log("clicked")
    }

    function invokeColor() {
        document.body.style.backgroundColor = changeColor()
    }
}
const stopChangeColor = () => {
    clearInterval(timer);
    timer = null
    console.log("stoped")
}


start.addEventListener("click", startChangeColor)
stop.addEventListener("click", stopChangeColor)