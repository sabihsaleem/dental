import { welcomeTitledata, treatmentdata, hlepguiddata } from "./data.js";

const welcome = document.getElementById("welcome");
welcomeTitledata.forEach((data) => {
  const welcomeDiv = document.createElement("div");
  welcomeDiv.id = data.id;
  welcomeDiv.innerHTML = `
        <h3>${data.title}</h3>
        <h6>${data.subtitle}</h6>
        `;
  welcome.appendChild(welcomeDiv);
});

const treatment = document.getElementById("treatment");
const treatmentDetails = document.getElementById("treatmentDetails");

treatmentdata.forEach((data) => {
  const treatmentDiv = document.createElement("div");
  treatmentDiv.id = data.id;
  treatmentDiv.classList.add(
    "theme-treatment",
    "rounded",
    "my-2",
    "px-3",
    "py-2"
  );
  treatmentDiv.innerHTML = `
        <a href="${data.timepage}" class="text-decoration-none">
        <h3 class="">${data.id}${data.treatment}</h3>
        <span class="">${data.treatmentdic}</span>
        </a>
    `;
  treatmentDiv.addEventListener("click", function () {
    // Display treatment details in another div
    showTreatmentDetails(data);
  });
  treatment.appendChild(treatmentDiv);
});

function showTreatmentDetails(data) {
  treatmentDetails.innerHTML = `
        <h3>${data.treatment}</h3>
    `;
}

const hlepguid = document.getElementById("hlepguid");
hlepguiddata.forEach((data) => {
  const hlepguidDiv = document.createElement("div");
  hlepguidDiv.id = data.id;
  hlepguidDiv.classList.add(
    "theme-treatment-hlepguid",
    "rounded",
    "mt-2",
    "px-3",
    "py-2"
  );
  hlepguidDiv.innerHTML = `
        <h3 class="text-black fs-6">${data.heading}</h3>
        <ul>
            <li class="theme-hlep-guid-text">${data.discretion}</li>
            <li>${data.openinghours}</li>
            <li>#${data.hourmon}</li>
            <li>${data.hourtue}</li>
            <li>${data.hourfri}</li>
            <li>#${data.patientdiscretion}</li>
        </ul>
        `;
  hlepguid.appendChild(hlepguidDiv);
});

var settings = {
  url: "https://tannlegesinsen.opusdentalonline.com/api/public/v1/treatments?clinicid=5610-690c9a66-7d19-425c-95df-852fdbf1a93d",
  method: "GET",
  dataType: "jsonp",
  timeout: 0,
  headers: {
    api_key: "c76f97b0c6194e45b9cac0d7a82edec8",
    "Access-Control-Allow-Origin": `*`, // Note: This header is usually set by the server, not the client
  },
};

$.ajax(settings).done(function (response) {
  console.log("clinic", response); // Logging the response to the console
});

// const clinicid = "5610-690c9a66-7d19-425c-95df-852fdbf1a93d";
// const clinicdata = `https://tannlegesinsen.opusdentalonline.com/api/public/v1/treatments?clinicid=${clinicid}`;
// const apiKey = 'c76f97b0c6194e45b9cac0d7a82edec8';

// fetch(clinicdata, {
//     headers: {
//         'API_KEY': apiKey,
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': `*`,
//         // Add other headers if necessary
//     }
// })
//     .then(response => {
//         console.log("response", response);
//     })
//     .then(data => {
//         // Handle the response data
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle errors
//         console.error("cathhhhha aewffw  ", error);
//     });
