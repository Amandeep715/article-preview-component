const shareContainer = document.querySelector(".share-container");
const openShare = document.querySelector(".open-share");
const closeShare = document.querySelector(".close-share");

openShare.addEventListener("click", () => {
    shareContainer.classList.toggle("open");
    if(shareContainer.classList.contains("open")) {
       shareContainer.setAttribute("aria-hidden", "false"); 
    } else {
        shareContainer.setAttribute("aria-hidden", "true");
    }
    
})

closeShare.addEventListener("click", () => {
    shareContainer.classList.remove("open")
    shareContainer.setAttribute("aria-hidden", "true");
})