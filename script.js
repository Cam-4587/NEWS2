const finalNews2Score = document.getElementById("news2score");
const btn = document.getElementById("button");

function calculateRespirationScore() {
    const respirations = Number(document.getElementById("respirations").value);
    if (respirations <= 8) return 3;
    else if (respirations <= 11) return 1;
    else if (respirations <= 20) return 0;
    else if (respirations <= 24) return 2;
    else if (respirations >= 25) return 3;
    else return 3;
}

function calculateO2Saturations() {
    const o2saturations = Number(document.getElementById("02saturation").value);
    const scale1 = document.getElementById("scale1").checked;
    const scale2 = document.getElementById("scale2").checked;
    const o2supplementationDevice = document.getElementById("o2supplementationDevice").checked;
    let o2Score = 0;

    if (scale1) {
        if (o2saturations <= 91) o2Score = 3;
        else if (o2saturations <= 93) o2Score = 2;
        else if (o2saturations <= 95) o2Score = 1;
        else if (o2saturations <= 100) o2Score = 0;
        else o2Score = 3;
    } else if (scale2) {
        if (o2saturations <= 83) o2Score = 3;
        else if (o2saturations <= 85) o2Score = 2;
        else if (o2saturations <= 87) o2Score = 1;
        else if (o2saturations <= 92) o2Score = 0;
        else if (o2saturations <= 94) o2Score = 1;
        else if (o2saturations <= 96) o2Score = 2;
        else if (o2saturations >= 97) o2Score = 3;
        else o2Score = 3;
    } else {
        // No scale selected, return 0 or handle as needed
        o2Score = 0;
    }

    if (o2supplementationDevice) {
        return o2Score + 2;
    } else {
        return o2Score;
    }
}

function calculateBloodpressure() {
    const bloodPressure = Number(document.getElementById("systolicbloodpressure").value);
    if (bloodPressure <= 90) return 3;
    else if (bloodPressure <= 100) return 2;
    else if (bloodPressure <= 110) return 1;
    else if (bloodPressure <= 120) return 0;
    else if (bloodPressure >= 220) return 3;
    else return 3;
}

function calculatePulse() {
    const pulse = Number(document.getElementById("pulse").value);
    if (pulse <= 40) return 3;
    else if (pulse <= 50) return 1;
    else if (pulse <= 90) return 0;
    else if (pulse <= 110) return 1;
    else if (pulse <= 130) return 2;
    else if (pulse > 130) return 3;
    else return 3;
}

function calculateAlertness() {
    const alertness = document.getElementById("alertness").value;
    if (alertness === "Alert") return 0;
    else return 3;
}

function calculateTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    if (temperature <= 35) return 3;
    else if (temperature <= 36) return 1;
    else if (temperature <= 38) return 0;
    else if (temperature <= 39) return 1;
    else if (temperature > 39) return 2;
    else return 3;
}

function calculateNews2Score() {
    const respirationScore = calculateRespirationScore();
    const o2saturationScore = calculateO2Saturations();
    const bloodPressureScore = calculateBloodpressure();
    const pulseScore = calculatePulse();
    const alertnessScore = calculateAlertness();
    const temperatureScore = calculateTemperature();

    return respirationScore + o2saturationScore + bloodPressureScore + pulseScore + alertnessScore + temperatureScore;
}

btn.addEventListener("click", function (e) {
    e.preventDefault();
    const news2score = calculateNews2Score();
    finalNews2Score.innerHTML = `The Final News2 Score is <strong>${news2score}</strong>`;
});