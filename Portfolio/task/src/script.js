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

function hamburgerClick() {
    const navElement = document.getElementsByClassName("hamburger")[0].parentElement;
    for (const child of navElement.children) {
        if(child.tagName === "UL") {
            child.style.display = getComputedStyle(child).display === "flex"
                ? "none"
                : "flex";
        }
    }
}