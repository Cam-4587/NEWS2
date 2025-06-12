# NEWS2 Calculator

## Overview

The **NEWS2 Calculator** is a web-based tool designed to assist healthcare professionals in calculating the National Early Warning Score 2 (NEWS2), a standardized system used to identify patients at risk of clinical deterioration. By inputting a patient's vital signs and oxygen supplementation details, the calculator computes the NEWS2 score and provides guidance on monitoring frequency and escalation procedures. This tool supports timely and efficient clinical response, promoting optimal patient safety and care outcomes.

## Features

- **Intuitive Form:** Enter vital signs including respiration rate, oxygen saturation, blood pressure, pulse, alertness, and temperature.
- **Oxygen Supplementation Details:** Select between air and various oxygen devices, and specify flow rate, percentage, and mask type.
- **Automatic Calculation:** Instantly computes the NEWS2 score based on current guidelines, including adjustments for oxygen use and different scoring scales.
- **Escalation Guidance:** Displays recommended monitoring frequency and escalation actions based on total score.
- **Clear & Reset:** Easily clear the form to enter new patient information.
- **Toggle Information:** Show or hide an introductory section explaining the NEWS2 system and escalation procedures.

## NEWS2 Scoring Parameters

- **Respiration Rate**
- **Oxygen Saturations** (with Scale 1 or Scale 2 selection)
- **Blood Pressure**
- **Pulse**
- **Alertness/Consciousness**
- **Temperature**
- **Oxygen Supplementation** (device, flow, mask type)

Each parameter is scored per NEWS2 guidelines. Supplemental oxygen use is automatically factored into the final score.

## Escalation Procedures

The calculator includes an escalation table outlining:

| NEWS2 Score/Trigger | Minimum Monitoring Frequency | Actions & Escalation |
|---------------------|-----------------------------|----------------------|
| 0                   | As per local policy         | No action required   |
| 1-4                 | At least every 4-6 hours    | Inform registered nurse, increased frequency as needed |
| 5 or more           | At least every hour         | Urgent review by clinician or team with competencies in acute illness; consider transfer to higher dependency care |
| 7 or more           | Continuous monitoring       | Emergency clinical response; transfer to critical care |

**Note:** Always consult local clinical guidelines.

## Project Structure

- `index.html` – Main user interface and form.
- `script.js` – Handles score calculations, form logic, and UI updates.
- `style.css` – Custom styles (if present).

## Technologies Used

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (vanilla)


## License

Distributed under the MIT License.

---

**Disclaimer:** This calculator is for educational and clinical support purposes only. Always verify results and follow your hospital or clinic's policies and procedures.
