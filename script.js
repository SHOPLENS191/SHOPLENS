document.addEventListener('DOMContentLoaded', () => {
    // 1. Find the upload button (assuming you used a <button> tag)
    // If you used something else, this will look for elements containing the word "Upload"
    const uploadBtn = document.querySelector('button') || document.querySelector(':contains("Upload")');
    
    // 2. Create a hidden file input that accepts images
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // This tells the iPhone to open the Camera/Photos app
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    // 3. When the button is clicked, trigger the hidden file input
    if (uploadBtn) {
        uploadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fileInput.click();
        });
    }

    // 4. Handle what happens after they select a photo
    fileInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const selectedFile = this.files[0];
            
            // Save the original button text
            const originalText = uploadBtn.innerText || uploadBtn.textContent;
            
            // Change button state to simulate AI processing
            uploadBtn.innerText = "🤖 Analyzing Image...";
            uploadBtn.style.opacity = "0.7";
            uploadBtn.style.pointerEvents = "none";

            // Simulate a 2.5-second delay for "AI processing"
            setTimeout(() => {
                // Reset button
                uploadBtn.innerText = originalText;
                uploadBtn.style.opacity = "1";
                uploadBtn.style.pointerEvents = "auto";
                
                // Show a mock result alert
                alert(`Analysis complete for: ${selectedFile.name}\n\n(This is where we will show the matched products!)`);
            }, 2500);
        }
        
        // Reset the input so they can upload the same file again if needed
        this.value = ''; 
    });
});
