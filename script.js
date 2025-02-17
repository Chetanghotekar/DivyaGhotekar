// Hardcoded usernames and passwords
const users = {
    "Divya": "1111",
    "Divya2": "2222",
    "Divya3": "123",
    "Divya4": "1234"
};

// Login function
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        window.location.href = "crops.html"; // Redirect to crops page
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password!";
        document.getElementById("error-message").style.color = "red";
    }
}

// Crop information
const cropInfo = {
    "Wheat": "Diseases: Rust, Blight | Soil: Well-drained, Loamy",
    "Rice": "Diseases: Blast, Sheath Blight | Soil: Clayey, High moisture",
    "Maize": "Diseases: Leaf Blight, Rust | Soil: Sandy Loam, pH 5.5-7.5",
    "Cotton": "Diseases: Wilt, Leaf Curl | Soil: Black soil, Drained",
    "Sugarcane": "Diseases: Red Rot, Smut | Soil: Loamy, pH 6-7.5",
    "Barley": "Diseases: Powdery Mildew, Rust | Soil: Loamy, pH 6-8",
    "Soybean": "Diseases: Rust, Blight | Soil: Well-drained, pH 6-7",
    "Peanuts": "Diseases: Leaf Spot, Rot | Soil: Sandy Loam, pH 6-7.5",
    "Millet": "Diseases: Downy Mildew, Blast | Soil: Sandy, Low pH",
    "Potato": "Diseases: Late Blight, Scab | Soil: Well-drained, pH 5-6.5"
};

// Show crop information
function showInfo(crop) {
    document.getElementById("info").innerText = cropInfo[crop];
}
