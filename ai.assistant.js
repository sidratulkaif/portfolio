const initAIAssistant = () => {
    const toggle = document.getElementById('aiToggle');
    const chatWindow = document.getElementById('aiChatWindow');
    const messages = document.getElementById('aiMessages');
    const input = document.getElementById('aiInput');

    if (!toggle || !chatWindow || !messages || !input) return;

    toggle.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            const message = input.value;
            addMessage('user', message);
            input.value = '';
            
            // Simulate AI response
            setTimeout(() => {
                const responses = [
                    "Sidratul specializes in futuristic web development with expertise in Web3 and quantum computing interfaces.",
                    "He has 5+ years experience building cutting-edge digital experiences that push the boundaries of web technology.",
                    "His current focus is on integrating AI, blockchain, and quantum computing principles into web applications.",
                    "You can view his NFT collection by connecting your wallet and clicking the Web3 section.",
                    "For collaborations, use the quantum communication form in the contact section."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage('ai', randomResponse);
            }, 1000);
        }
    });

    const addMessage = (sender, text) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.innerHTML = `<p>${text}</p>`;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    };
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initAIAssistant);