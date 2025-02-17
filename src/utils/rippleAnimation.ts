export const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget
    const circle = document.createElement("span")
    const diameter = Math.max(container.clientWidth, container.clientHeight)
    const radius = diameter / 2

    circle.classList.add("ripple")
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - container.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - container.offsetTop - radius}px`
    container.appendChild(circle)

    setTimeout(() => {
        circle.remove()
    }, 500)
}

// ONLY WITH PIOSITION RELATIVE AND OVERFLOW HIDEN ON THE ELEMENT 
// SHOUD HAVE .ripple and ripple-animation keyframes