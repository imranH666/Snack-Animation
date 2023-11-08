
const mainContainer = document.querySelector(".main-container")

mainContainer.addEventListener("mousemove", (e) => {
    let xAxis = e.pageX - 100
    let yAxis = e.pageY

    const circle = document.createElement("div")
    circle.className = 'circle'
    circle.style.top = `${yAxis}px`
    circle.style.left = `${xAxis}px`
    mainContainer.appendChild(circle)
    setTimeout(() => {
        mainContainer.removeChild(circle)
    }, 8000)
})

