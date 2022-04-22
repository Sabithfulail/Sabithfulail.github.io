document.getElementById("showShort").addEventListener("click", () => {
    hideSection("long", "showLong");
    showSelection("short", "showShort");
})

document.getElementById("showLong").addEventListener("click", () => {
    hideSection("short", "showShort");
    showSelection("long", "showLong");
})


function showSelection(textID, buttonID) {
    document.getElementById(textID).classList.remove("hidden");
    document.querySelector(`#${buttonID} span`).classList.remove('hidden');
}

function hideSection(textID, buttonID) {
    document.getElementById(textID).classList.add("hidden");
    document.querySelector(`#${buttonID} span`).classList.add('hidden');
}