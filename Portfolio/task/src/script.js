function portfolioDetails(elementId) {
    closeWindow();
    const section = document.getElementById(elementId);
    const element = section.getElementsByClassName("window")[0];
    element.style.visibility = "visible";
}

function closeWindow() {
    const element = document.getElementsByClassName("window");
    for (const elementElement of element) {
        elementElement.style.visibility = "hidden";
    }
}
