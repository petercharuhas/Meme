document.addEventListener("DOMContentLoaded", function () {
    const memeForm = document.querySelector("#memeForm");
    const topTextInput = document.querySelector("#topTextInput");
    const bottomTextInput = document.querySelector("#bottomTextInput");
    const imageFileInput = document.querySelector("#imageFileInput");
    const memeContainer = document.querySelector("#memeContainer");

    memeForm.addEventListener("submit", function (e) {
        e.preventDefault();

       
        const meme = document.createElement("div");
        meme.className = "meme";

      
        const memeImage = document.createElement("img");
        memeImage.src = URL.createObjectURL(imageFileInput.files[0]);
        memeImage.alt = "Meme Image";

      
        const memeTopText = document.createElement("div");
        memeTopText.className = "meme-text meme-top-text";
        memeTopText.innerText = topTextInput.value;

        const memeBottomText = document.createElement("div");
        memeBottomText.className = "meme-text meme-bottom-text";
        memeBottomText.innerText = bottomTextInput.value;

        
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function () {
            memeContainer.removeChild(meme);
        });

       
        meme.appendChild(memeImage);
        meme.appendChild(memeTopText);
        meme.appendChild(memeBottomText);
        meme.appendChild(deleteButton);
        memeContainer.appendChild(meme);

        
        memeForm.reset();
    });
});
