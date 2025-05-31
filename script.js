// Respiration section
function calculateRespirationScore() {

    // Respirations
    respirations = 20;

    if (respirations <= 8) return 3;
    else if (respirations <= 11) return 1;
    else if (respirations <= 20) return 0;
    else if (respirations <= 24) return 2;
    else if (respirations >= 25) return 3;
    else return 3;
}
respirationScore = calculateRespirationScore();


// 02 Saturation levels section
function calculcate02saturations(){

    // o2 saturation levels and news2 score
    o2saturations = 96;
    o2Score = 0;

    // option for o2 supplementation device
    o2supplementationDevice = false;

    // option for either scale 1 or scale 2
    scale1 = true;
    scale2 = false;

    if (scale1 == true && scale2 == false) {
        if (o2saturations <= 91) o2Score = 3;
        else if (o2saturations <= 93) o2Score = 2;
        else if (o2saturations <= 95) o2Score = 1;
        else if (o2saturations <= 100) o2Score = 0;
        else o2Score = 3;
    }
     if (scale1 == false && scale2 == true) {
        if (o2saturations <= 83) return 3;
        else if (o2saturations <= 85) o2Score = 2;
        else if (o2saturations <= 87) o2Score = 1;
        else if (o2saturations <= 92) o2Score = 0;
        else if (o2saturations <= 94) o2Score = 1;
        else if (o2saturations <= 96) o2Score = 2;
        else if (o2saturations >= 97) o2Score = 3;
        else o2Score = 3;
    }
    if (o2supplementationDevice == true){
        return o2Score + 2;
    }
    else return o2Score;
}

o2saturationScore = calculcate02saturations();

// Blood Pressure Section
function calculateBloodpressure() {
    bloodPressure = 120;
    if (bloodPressure <= 90) return 3;
    else if (bloodPressure <= 100) return 2;
    else if (bloodPressure <= 110) return 1;
    else if (bloodPressure <= 120) return 0;
    else if (bloodPressure >= 220) return 3;
    else return 3;
}

bloodPressureScore = calculateBloodpressure();

// Pulse Section
function calculatePulse() {
    pulse = 80;
    if (pulse <= 40) return 3;
    else if (pulse <= 50) return 1;
    else if (pulse <= 90) return 0;
    else if (pulse <= 110) return 1;
    else if (pulse >= 130) return 2;
    else if (pulse > 130) return 3;
    else return 3;
}

pulse = calculatePulse();


// Alertness Section
function calculateAlertness() {
    alertness = true;
    if (alertness == true) {
        return 0;
    }
    else return 3;
}

alertness = calculateAlertness();

// Temerpature Section
function calculateTemperatture() {
    temperature = 35.9;
    if (temperature <= 35) return 3;
    else if (temperature <= 36) return 1;
    else if (temperature <= 38) return 0;
    else if (temperature <= 39) return 1;
    else if (temperature > 39) return 2;
    else return 3;
}

temperature = calculateTemperatture();




// News2 Calculations
function calculateNews2Score(respirationScore, o2saturationScore, bloodPressureScore, alertness, pulse, temperature){
    score = respirationScore + o2saturationScore + bloodPressureScore + alertness + pulse + temperature;
    return score
}

news2Score = calculateNews2Score(respirationScore, o2saturationScore, bloodPressureScore, alertness, pulse, temperature);


console.log(news2Score)