const data = [
    { month: "April", visitors: 2000 },
    { month: "May", visitors: 3400 },
    { month: "June", visitors: 4500 },
    { month: "July", visitors: 5300 },
    { month: "August", visitors: 6700 },
    { month: "September", visitors: 7950 }
];

const table = document.getElementById("table");


const tableElement = document.createElement('table')
const headerRow = document.createElement("tr");
const monthHead = document.createElement("th");
const visitorHead = document.createElement("th");



const tmonth = document.createTextNode("Month");
const tvisitor = document.createTextNode("Visitors");


monthHead.appendChild(tmonth);
visitorHead.appendChild(tvisitor);


headerRow.appendChild(monthHead);
headerRow.appendChild(visitorHead);

tableElement.appendChild(headerRow);


for (let i = 0; i< data.length; i++){
    const tRow = document.createElement("tr");
    const monthData = document.createElement("td");
    const visitorData = document.createElement("td");


    const monthText = document.createTextNode(data[i].month);
    const visitorText = document.createTextNode(data[i].visitors);

    monthData.appendChild(monthText);
    visitorData.appendChild(visitorText);

    tRow.appendChild(monthData);
    tRow.appendChild(visitorData);


    tableElement.appendChild(tRow);
};

table.appendChild(tableElement);

const cookies = document.getElementById('cookies');
const accept = document.getElementById('accept');

accept.addEventListener('click', ()=>{
    cookies.innerHTML = `<p>You accepted cookies. Wanna Revoke?<a id="revoke" href="#">Revoke Cookies</a></p>`;

    const revoke = document.getElementById("revoke");

    revoke.addEventListener('click', ()=>{
        cookies.innerHTML = ` <p>Do you want to re-Accept Cookies <a id="reAccept" href="#">Accept Cookies</a></p>`;

        const reAccept = document.getElementById("reAccept");
        reAccept.addEventListener('click', ()=>{
            cookies.innerHTML = ``;
        })
    });
});

const toggle = document.getElementById("toggle");
const body = document.body;

toggle.addEventListener('click', ()=>{
    body.classList.toggle("contrast");
});

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "a") {
      body.classList.toggle("contrast");
    }
  });

