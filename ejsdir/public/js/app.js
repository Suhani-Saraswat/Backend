const btns = document.querySelectorAll("button");

for(btn of btns) {
    btn.addEventlisterner("click", () => {
        console.log("button was clicked");
    });
}