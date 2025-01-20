// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Login modal functionality
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Chatbot functionality
const chatIcon = document.getElementById('chatIcon');
const chatWindow = document.getElementById('chatWindow');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');

// Toggle chat window
chatIcon.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
});
// Add message to chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user' : 'bot');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send message functionality
sendMessage.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            addMessage('Gracias por tu mensaje. Un agente te responderá pronto.');
        }, 1000);
    }
});

// Send message on Enter key
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage.click();
    }
});

// Welcome message animation
setTimeout(() => {
    addMessage('¡Hola! ¿En qué puedo ayudarte hoy?');
}, 1000);

// Animate services on scroll
const observerOptions = {
    threshold: 0.1
};
document.addEventListener('click', (e) => {
    if (!chatWindow.contains(e.target) && e.target !== chatIcon) {
        chatWindow.classList.remove('active');
    }
});

// Prevent chat window close when clicking inside
chatWindow.addEventListener('click', (e) => {
    e.stopPropagation();
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});