// hamburger
function toggleMenu() {
    document.getElementById("nav-list").classList.toggle("show");
}
// mailto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let subject = "New Contact Form Message from " + name;
    let body = `Name: ${name} Email: ${email} Message:${message}`;

    let mailtoLink = `mailto:sugeshpandisaravana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink; // Opens default email client
});