// Create localStorage variable 'displayMode' if null
if (localStorage.getItem("displayMode") === null) {
    window.localStorage.setItem("displayMode", "light");
}

// On current page load
window.onload = function() {
    // Variables
    let displayMode = window.localStorage.getItem("displayMode");
    let displaySelector = document.querySelector(".theme-toggle");
    let displayTextSelector = document.querySelector(".theme-toggle p");

    // For Reusability
    function setCSSProperty(variable, value) {
        document.documentElement.style.setProperty(variable, value);
    }

    // Dark Theme
    function goToDarkMode() {
        console.log("Dark Mode");
        displayTextSelector.textContent = "Light Mode";
        setCSSProperty('--primary', '#151515');
        setCSSProperty('--text-primary', 'white');
        setCSSProperty('--button-text', '#FFC837');
        setCSSProperty('--button-text-highlight', '#FF7F00');
        setCSSProperty('--button-icon', '#2A2A2A');
        setCSSProperty('--button-highlight', '#444444');
        window.localStorage.setItem("displayMode", "dark");
        displayMode = "dark";
    }

    // Light Theme
    function goToLightMode() {
        console.log("Light Mode");
        displayTextSelector.textContent = "Dark Mode";
        setCSSProperty('--primary', '#DEDFDF');
        setCSSProperty('--text-primary', 'black');
        setCSSProperty('--button-text', 'black');
        setCSSProperty('--button-text-highlight', 'black');
        setCSSProperty('--button-icon', 'lightsteelblue');
        setCSSProperty('--button-highlight', '#66a5e5');
        window.localStorage.setItem("displayMode", "light");
        displayMode = "light";
    }

    // Check current theme
    function displayFunc() {
        if (displayMode === "light") {
            goToDarkMode();
        }
        else if (displayMode === "dark") {
            goToLightMode();
        }
    }

    // Setup current saved theme on page refresh
    function startUpDisplay() {
        if (displayMode === "dark") {
            goToDarkMode();
        } else if (displayMode === "light") {
            goToLightMode();
        }
    }

    startUpDisplay();

    // Theme Toggle - Trigger on 'click'
    displaySelector.addEventListener("click", displayFunc);
}