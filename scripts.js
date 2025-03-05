function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        let subject = encodeURIComponent(`Message from ${name}`);
        let body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        let mailtoLink = `mailto:c0de-w0lfe@proton.me?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        document.getElementById("result").innerText = "Email sent! Check your email client to complete.";
    } else {
        document.getElementById("result").innerText = "Please fill in all fields.";
    }
}



// Friction Loss Calculator
function calculateFrictionLoss() {
    let flow = parseFloat(document.getElementById("flow").value);
    let length = parseFloat(document.getElementById("length").value);
    let diameter = parseFloat(document.getElementById("diameter").value);
    if (flow && length && diameter) {
        let loss = (0.002 * Math.pow(flow, 1.85) * length) / Math.pow(diameter, 4.87);
        document.getElementById("result").innerText = `Friction Loss: ${loss.toFixed(2)} psi`;
    } else {
        document.getElementById("result").innerText = "Please enter all values.";
    }
}

// Velocity Calculator
function calculateVelocity() {
    let flowRate = parseFloat(document.getElementById("flow-rate").value);
    let pipeDiameter = parseFloat(document.getElementById("pipe-diameter").value);
    if (flowRate && pipeDiameter) {
        let velocity = (4 * flowRate) / (Math.PI * Math.pow(pipeDiameter, 2));
        document.getElementById("result").innerText = `Velocity: ${velocity.toFixed(2)} ft/s`;
    } else {
        document.getElementById("result").innerText = "Please enter all values.";
    }
}

// Level Gauge Calculator
function calculateLevel() {
    let tankHeight = parseFloat(document.getElementById("tank-height").value);
    let liquidLevel = parseFloat(document.getElementById("liquid-level").value);
    let tankVolume = parseFloat(document.getElementById("tank-volume").value);

    if (tankHeight && liquidLevel && tankVolume && liquidLevel <= tankHeight) {
        let percentage = (liquidLevel / tankHeight) * 100;
        let currentVolume = (liquidLevel / tankHeight) * tankVolume;
        document.getElementById("result").innerHTML = 
            `Level: ${percentage.toFixed(2)}% full<br>Current Volume: ${currentVolume.toFixed(2)} gal`;
    } else {
        document.getElementById("result").innerText = "Please enter valid values (level ≤ height).";
    }
}
