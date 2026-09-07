// JavaScript to handle hover events
function showInfo(title, description, imgSrc) {
    console.log("showInfo called with:", title, description, imgSrc); // Debugging log

    const mapInfoTitle = document.getElementById("map-info-title");
    const mapInfoDescription = document.getElementById("map-info-description");
    const mapInfoImg = document.getElementById("map-info-img");

    // Update the information box
    mapInfoTitle.textContent = title;
    mapInfoDescription.textContent = description;
    if (imgSrc) {
        mapInfoImg.src = imgSrc;
        mapInfoImg.style.display = "block";
    } else {
        mapInfoImg.style.display = "none";
    }
}

function hideInfo() {
    const mapInfoTitle = document.getElementById("map-info-title");
    const mapInfoDescription = document.getElementById("map-info-description");
    const mapInfoImg = document.getElementById("map-info-img");

    // Reset the information box
    mapInfoTitle.textContent = "Hover over an area";
    mapInfoDescription.textContent = "Hover over the map to see details about specific areas.";
    mapInfoImg.style.display = "none";
}

window.onload = function () {
    const img = document.getElementById('pup-map-img');
    console.log("Displayed width:", img.clientWidth);
    console.log("Displayed height:", img.clientHeight);
};