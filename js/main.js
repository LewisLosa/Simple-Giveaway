document.addEventListener("DOMContentLoaded", () => {
    const mainDiv = document.querySelector(".relative");
    const button = document.querySelector("button");
    
    button.addEventListener("click", () => {
        mainDiv.classList.add("hidden");
        
        const countdownDiv = document.createElement("div");
        countdownDiv.className = "flex items-center justify-center h-screen text-8xl font-bold text-stone-800";
        document.body.appendChild(countdownDiv);

        let count = 0;
        const names = ["A", "B"];
        
        // Switch between A and B
        const interval = setInterval(() => {
            countdownDiv.textContent = names[count % 2];
            count++;
        }, 300);

        // Determine the winner after 3 seconds
        setTimeout(() => {
            clearInterval(interval);
            countdownDiv.textContent = "Winner: 🎉" + (Math.random() > 0.5 ? "A" : "B") + " 🎉";
            countdownDiv.classList.add("transition-all", "duration-1000", "scale-150", "text-pink-500");
        }, 3000);
    });
});
