import {
    Handlersdata
}
from "../js/data.js"
const Handlers = document.getElementById("Handlers");
Handlersdata.forEach((data) => {
    const HandlersDiv = document.createElement("div");
    HandlersDiv.id = data.id;
    HandlersDiv.classList.add("theme-Handlers", "rounded", "my-2", "px-3", "py-2", "d-flex");
    HandlersDiv.innerHTML = `
        <div class="col-10">
        <a class="text-decoration-none" href="${data.userinfo}">
            <h3 class="">${data.Drname}</h3>
            <span class="">${data.Dr}</span>
            <p class="">${data.drdiscretion}</p>
        </div>
        <div class="col-2 pt-3">
        <img src="${data.Drimage}" class="img-fluid " alt="${data.Drname}">
        </a>
        </div>
        `;
    Handlers.appendChild(HandlersDiv);
});