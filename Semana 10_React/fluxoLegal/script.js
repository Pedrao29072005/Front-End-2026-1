function compTitle(textTitle) {
    return (
        <h1>{textTitle}</h1>
    )
}
function compParagrafo(textParagrafo) {
    return (
        <p>{textParagrafo}</p>
    )
}
function render() {
    const element = (
        <div>
            {compTitle("Brasil para nas quartas")}
            {compParagrafo("Independente do Neymar, o Brasil não passa das quartas de final da copa do mundo.")}
        </div>
    )
    ReactDOM.render(element, document.getElementById('root'))
}
render();