document.addEventListener('DOMContentLoaded', () => {
    const uploadBtn = document.querySelector('button');
    
    // Create the hidden file input
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    // Create the result container
    const resultDiv = document.createElement('div');
    resultDiv.className = 'feature-card';
    resultDiv.style.display = 'none';
    resultDiv.style.marginTop = '20px';
    resultDiv.style.padding = '20px';
    resultDiv.style.border = '1px solid rgba(96, 165, 250, 0.4)'; // Blue glowing edge
    
    uploadBtn.parentNode.insertBefore(resultDiv, uploadBtn.nextSibling);

    uploadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const selectedFile = this.files[0];
            const originalText = uploadBtn.innerText;
            
            // Create a temporary URL to display the uploaded image
            const imageUrl = URL.createObjectURL(selectedFile);
            
            // UI state: Scanning
            uploadBtn.innerHTML = "🔍 Scanning visual data...";
            uploadBtn.style.opacity = "0.7";
            uploadBtn.style.pointerEvents = "none";
            resultDiv.style.display = 'none';

            // Simulate the AI processing time
            setTimeout(() => {
                // Reset upload button
                uploadBtn.innerText = originalText;
                uploadBtn.style.opacity = "1";
                uploadBtn.style.pointerEvents = "auto";
                
                // Show the modern result card
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = `
                    <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 20px;">
                        <div style="position: relative; width: 85px; height: 85px; padding: 4px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                            <div style="position: absolute; inset: 0; border-radius: 12px; background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%); z-index: 1;"></div>
                            <img src="${imageUrl}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; position: relative; z-index: 0;" alt="Scanned item" />
                        </div>
                        
                        <div>
                            <h3 style="color: #60A5FA; font-size: 1rem; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">✨ Exact Match</h3>
                            <p style="color: #F8FAFC; font-weight: 600; font-size: 1.1rem; line-height: 1.2;">Premium Aesthetic Graphic Tee</p>
                            <span style="display: inline-block; background: rgba(96, 165, 250, 0.15); color: #93C5FD; font-size: 0.75rem; padding: 4px 10px; border-radius: 20px; margin-top: 8px; font-weight: 500;">98.5% Visual Match</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 15px;">
                        <div style="display: flex; flex-direction: column;">
                            <span style="font-size: 0.8rem; color: #94A3B8;">Best Price Found</span>
                            <span style="font-weight: 700; color: #FFFFFF; font-size: 1.3rem;">₹499</span>
                        </div>
                        <button style="margin: 0; padding: 10px 18px; width: auto; font-size: 0.9rem; border-radius: 10px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);">Buy at A to Z Gift Gallery</button>
                    </div>
                `;
            }, 2500);
        }
        this.value = ''; // Reset input
    });
});
