function send() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! I'll get right back to you!`);
        // Here you would typically send the data to a server
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    } else {
        alert("Please fill in all fields!");
    }
}