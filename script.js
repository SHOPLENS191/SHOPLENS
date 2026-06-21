document.addEventListener("DOMContentLoaded", () => {

    const uploadCard = document.getElementById("uploadBtn");
    const headerUpload = document.getElementById("headerUpload");
    const fileInput = document.getElementById("fileInput");

    // Create result container
    const resultDiv = document.createElement("div");
    resultDiv.className = "feature-card";
    resultDiv.style.display = "none";
    resultDiv.style.marginTop = "30px";

    uploadCard.insertAdjacentElement("afterend", resultDiv);

    function openUploader() {
        fileInput.click();
    }

    uploadCard.addEventListener("click", openUploader);
    headerUpload.addEventListener("click", openUploader);

    fileInput.addEventListener("change", function () {

        if (!this.files || !this.files[0]) return;

        const selectedFile = this.files[0];
        const imageUrl = URL.createObjectURL(selectedFile);

        const uploadText = uploadCard.querySelector(".upload-text h3");
        const originalText = uploadText.textContent;

        uploadText.textContent = "Scanning visual data...";
        uploadCard.style.opacity = "0.7";
        uploadCard.style.pointerEvents = "none";

        resultDiv.style.display = "none";

        setTimeout(() => {

            uploadText.textContent = originalText;
            uploadCard.style.opacity = "1";
            uploadCard.style.pointerEvents = "auto";

            resultDiv.style.display = "block";

            resultDiv.innerHTML = `
                <div style="
                    display:flex;
                    gap:20px;
                    align-items:center;
                    margin-bottom:25px;
                ">

                    <img
                        src="${imageUrl}"
                        alt="uploaded"
                        style="
                            width:100px;
                            height:100px;
                            object-fit:cover;
                            border-radius:20px;
                            box-shadow:0 10px 30px rgba(0,0,0,.12);
                        "
                    >

                    <div>
                        <div style="
                            color:#8b5cf6;
                            font-size:.85rem;
                            font-weight:700;
                            margin-bottom:8px;
                        ">
                            ✨ Exact Match
                        </div>

                        <h3 style="
                            margin-bottom:8px;
                            font-size:1.3rem;
                        ">
                            Premium Product Found
                        </h3>

                        <span style="
                            background:rgba(139,92,246,.15);
                            color:#8b5cf6;
                            padding:6px 12px;
                            border-radius:999px;
                            font-size:.8rem;
                            font-weight:600;
                        ">
                            98.5% Match
                        </span>
                    </div>

                </div>

                <div style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    flex-wrap:wrap;
                    gap:15px;
                ">

                    <div>
                        <div style="
                            color:#666;
                            font-size:.9rem;
                        ">
                            Best Price Found
                        </div>

                        <div style="
                            font-size:2rem;
                            font-weight:800;
                            margin-top:5px;
                        ">
                            ₹499
                        </div>
                    </div>

                    <button style="
                        border:none;
                        padding:14px 24px;
                        border-radius:16px;
                        cursor:pointer;
                        color:white;
                        font-weight:600;
                        background:linear-gradient(
                            135deg,
                            #8b5cf6,
                            #a855f7
                        );
                    ">
                        Buy Now →
                    </button>

                </div>
            `;

        }, 2500);

        this.value = "";
    });

});
