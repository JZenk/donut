var frostingColor;
var defaultFrosting = "#965e25";

var sprinkleColor;
var defaultSprinkle = "#ffa3c0";

window.addEventListener("load", startup, false);

function startup() {
    frostingColor = document.querySelector("#frostingColor");
    frostingColor.value = defaultFrosting;
    frostingColor.addEventListener("input", updateFrosting, false);
    frostingColor.addEventListener("change", updateAllFrosting, false);
    frostingColor.select();

    sprinkleColor = document.querySelector("#sprinkleColor");
    sprinkleColor.value = defaultSprinkle;
    sprinkleColor.addEventListener("input", updateSprinkle, false);
    sprinkleColor.addEventListener("change", updateAllSprinkle, false);
    sprinkleColor.select();
}

function updateFrosting(event) {
    var icing = document.querySelector(".chocolate");
    if (icing) {
        icing.style.borderColor = event.target.value;
    }
}

function updateAllFrosting(event) {
    document.querySelectorAll(".chocolate").forEach(function (icing) {
        icing.style.borderColor = event.target.value;
    });
    document.querySelectorAll(".chocolate-curve").forEach(function (icing) {
        icing.style.borderColor = event.target.value;
        icing.style.backgroundColor = event.target.value;
        icing.style.boxShadow = "46vh 0px 0  " + event.target.value;
    });
}

function updateSprinkle(event) {
    var sprinkle = document.querySelector(".sprinkle");
    if (sprinkle) {
        sprinkle.style.backgroundColor = event.target.value;
    }
}

function updateAllSprinkle(event) {
    document.querySelectorAll(".sprinkle").forEach(function (sprinkle) {
        sprinkle.style.backgroundColor = event.target.value;
    });
}
