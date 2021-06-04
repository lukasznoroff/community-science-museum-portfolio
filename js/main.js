document.body.addEventListener("click", (ev) => {

    if (!ev.target.matches(".js-img")) {
        return;
    }

    const imgElm = ev.target;
    const imgElmSrc = imgElm.src;
    const newImgElm = new Image();
    newImgElm.src = imgElmSrc;
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `<div class="close-popup">close</div>`;
    popup.appendChild(newImgElm);
    document.body.appendChild(popup);
})

document.body.addEventListener("click", (ev) => {
    if (!ev.target.matches(".popup")) {
        return;
    }
    const popup = ev.target;
    popup.style.display = "none";
    popup.remove();
})
