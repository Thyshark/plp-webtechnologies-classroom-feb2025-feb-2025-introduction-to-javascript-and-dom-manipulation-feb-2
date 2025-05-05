
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const textChangerBtn = document.getElementById('text-changer');
    const changeableText = document.getElementById('changeable-text');
    
    textChangerBtn.addEventListener('click', function() {
        changeableText.textContent = "The text has been changed successfully!";
        changeableText.style.color = "#2ecc71";
    });

    
    const styleDemo = document.getElementById('style-demo');
    
    styleDemo.addEventListener('click', function() {
        this.style.backgroundColor = "#3498db";
        this.style.color = "white";
        this.style.padding = "20px";
        this.style.borderRadius = "8px";
        this.textContent = "Styles have been applied dynamically!";
    });

    
    const toggleBtn = document.getElementById('toggle-element');
    const messageContainer = document.getElementById('special-message-container');
    let messageVisible = false;
    let messageElement = null;
    
    toggleBtn.addEventListener('click', function() {
        if (messageVisible) {
            messageContainer.removeChild(messageElement);
            messageVisible = false;
        } else {
            messageElement = document.createElement('div');
            messageElement.className = 'special-message';
            messageElement.innerHTML = `
                <h2>Special Message</h2>
                <p>This element was added dynamically using JavaScript!</p>
            `;
            messageContainer.appendChild(messageElement);
            messageVisible = true;
        }
    });

   
    const mainTitle = document.getElementById('main-title');
    
    mainTitle.addEventListener('mouseover', function() {
        this.style.color = "#e74c3c";
    });
    
    mainTitle.addEventListener('mouseout', function() {
        this.style.color = "";
    });
});
