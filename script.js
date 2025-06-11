const finalNews2Score = document.getElementById("news2score");
const btn = document.getElementById("button");
const o2supplementationDevice = document.getElementById("o2supplementationDevice");
const o2supplementationSection = document.getElementById("oxygen-supplemtation-section");
const clearSection = document.getElementById("clear-section");
const clearBtn = document.getElementById("clear");
const toggleInfoBtn = document.getElementById("info-toggle");


o2supplementationDevice.addEventListener("change", function () {

    if (o2supplementationDevice.value === "Oxygen") {
        o2supplementationSection.style.display = "block";
    } else {
        o2supplementationSection.style.display = "none";
    }
});


function calculateRespirationScore() {
    const respirations = Number(document.getElementById("respirations").value);
    if (respirations <= 8) return 3;
    else if (respirations <= 11) return 1;
    else if (respirations <= 20) return 0;
    else if (respirations <= 24) return 2;
    else if (respirations >= 25) return 3;
}

function calculateO2Saturations() {
    const o2saturations = Number(document.getElementById("02saturation").value);
    const scale1 = document.getElementById("scale1").checked;
    const scale2 = document.getElementById("scale2").checked;
    const o2supplementationDeviceValue = o2supplementationDevice.value;
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
        else o2Score = 0;
    } else {
        // No scale selected, return 0 or handle as needed
        o2Score = 0;
    }

    if (o2supplementationDeviceValue === "Oxygen") {
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
}

function calculatePulse() {
    const pulse = Number(document.getElementById("pulse").value);
    if (pulse <= 40) return 3;
    else if (pulse <= 50) return 1;
    else if (pulse <= 90) return 0;
    else if (pulse <= 110) return 1;
    else if (pulse <= 130) return 2;
    else if (pulse > 130) return 3;
}

function calculateAlertness() {
    const alertness = document.getElementById("alertness").value;
    if (alertness === "Alert") return 0;
    else if (alertness !== "Alert") return 3;
}

function calculateTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    if (temperature <= 35) return 3;
    else if (temperature <= 36) return 1;
    else if (temperature <= 38) return 0;
    else if (temperature <= 39) return 1;
    else if (temperature > 39) return 2;
}



btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
        form.reportValidity(); // Show native validation messages
        return; // Stop if invalid
    }
    

    const respirationScore = calculateRespirationScore();
    const o2saturationScore = calculateO2Saturations();
    const bloodPressureScore = calculateBloodpressure();
    const pulseScore = calculatePulse();
    const alertnessScore = calculateAlertness();
    const temperatureScore = calculateTemperature();

    function calculateNews2Score() {
        return respirationScore + o2saturationScore + bloodPressureScore + pulseScore + alertnessScore + temperatureScore;
    }

    const news2score = calculateNews2Score();

    let color = "black";

    if (
        news2score >= 7 
        || 
        respirationScore === 3 
        || 
        o2saturationScore === 3
        || 
        o2saturationScore === 5
        || 
        bloodPressureScore === 3 
        || 
        pulseScore === 3
        ||
        alertnessScore === 3
        ||
        temperatureScore === 3
    ) {
        color = "red";
    } else if (news2score >= 4) {
        color = "goldenrod";
    }


    finalNews2Score.innerHTML = `
        Respirations Score is: <span style="color:${respirationScore === 3 ? 'red' : 'black'}">${respirationScore}</span><br><br>
        Oxygen Saturation Score is: <span style="color:${o2saturationScore === 3 || o2saturationScore === 5 ? 'red' : 'black'}">${o2saturationScore}</span><br><br>
        Blood Pressure Score is: <span style="color:${bloodPressureScore === 3 ? 'red' : 'black'}">${bloodPressureScore}</span><br><br>
        Pulse Score is: <span style="color:${pulseScore === 3 ? 'red' : 'black'}">${pulseScore}</span><br><br>
        Alertness Score is: <span style="color:${alertnessScore === 3 ? 'red' : 'black'}">${alertnessScore}</span><br><br>
        Temperature Score is: <span style="color:${temperatureScore === 3 ? 'red' : 'black'}">${temperatureScore}</span><br><br>
        The Final News2 Score is <span style="color:${color}"><strong>${news2score}</span>
    `;


    // Oxygen device info
    let o2Device = document.getElementById("o2supplementationDevice").value;
    let o2flow = document.getElementById("o2flow").value;
    let o2percentage = document.getElementById("02percentage").value;
    let maskType = document.getElementById("maskType").value;

    let o2Info = '';
    if (o2Device === "Oxygen") {
        o2Info = `
          <strong>Oxygen Device Details:</strong><br>
          Flow: ${o2flow || 'N/A'} L/min<br>
          Percentage: ${o2percentage || 'N/A'}%<br>
          Mask Type: ${maskType || 'N/A'}
        `;
    } else {
        o2Info = "Air selected (no oxygen device in use)";
    }
    document.getElementById("o2maskInfo").innerHTML = o2Info;
    clearSection.classList.remove("none");
});

clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("form").reset();
    o2maskInfo.innerHTML = '';
    finalNews2Score.innerHTML = '';
    clearSection.classList.add("none");
});

function toggleInfo() {
  var x = document.getElementById("introductory-section");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
