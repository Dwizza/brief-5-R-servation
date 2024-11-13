// import jsPDF from "jspdf";
const dateNow =  new  Date().toLocaleDateString('en-CA');
console.log(dateNow);

function nextStep(step) {
    const steps = document.querySelectorAll('.page');
    console.log(date.value);
    if(salut1.style.display === 'block'){
        if (arriver.value == "nn" || depart.value == "nn" || depart.value == arriver.value || date.value <= dateNow) {
            alert("Please fill out the arrival and departure fields.");
            return;
        }
    }
    
    steps.forEach((s) => {
        s.style.display = 'none';
    });
    
    const currentStep = document.getElementById(`salut${step}`);
    if (currentStep) {
        
        currentStep.style.display = 'block';
        
        
        let li = "li" + step;
    document.getElementById(li).innerHTML = `<li
    class="flex w-full items-center text-[#bc6c25] dark:text-[#bc6c25] after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-gray-700"
    >
        <span
        class="flex items-center justify-center w-10 h-10 bg-[#bc6c25] rounded-full lg:h-12 lg:w-12 dark:bg-[#bc6c25] shrink-0"
        >
        <svg
            class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-[#fefae0]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
        >
            <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
            />
        </svg>
        </span>
    </li>`;
    }
    if(arriver.value === "Paris" && step === 2 ) {
        document.getElementById("salut20").style.display = "block";
        let li = "li" + step;
    document.getElementById(li).innerHTML = `<li
    class="flex w-full items-center text-[#bc6c25] dark:text-[#bc6c25] after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-gray-700"
    >
        <span
        class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-[#bc6c25] shrink-0"
        >
        <svg
            class="w-3.5 h-3.5 text-[#bc6c25] lg:w-4 lg:h-4 dark:text-[#fefae0]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
        >
            <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
            />
        </svg>
        </span>
    </li>`;
    } 
    if(arriver.value === "London" && step === 2 ) {
        document.getElementById("salut21").style.display = "block";
        let li = "li" + step;
    document.getElementById(li).innerHTML = `<li
    class="flex w-full items-center text-[#bc6c25] dark:text-[#bc6c25] after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-gray-700"
    >
        <span
        class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-[#bc6c25] shrink-0"
        >
        <svg
            class="w-3.5 h-3.5 text-[#bc6c25] lg:w-4 lg:h-4 dark:text-[#fefae0]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
        >
            <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
            />
        </svg>
        </span>
    </li>`;
    } 
    if(arriver.value === "Madrid" && step === 2 ) {
        document.getElementById("salut22").style.display = "block";
        let li = "li" + step;
    document.getElementById(li).innerHTML = `<li
    class="flex w-full items-center text-[#bc6c25] dark:text-[#bc6c25] after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-gray-700"
    >
        <span
        class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-[#bc6c25] shrink-0"
        >
        <svg
            class="w-3.5 h-3.5 bg-[#bc6c25] lg:w-4 lg:h-4 dark:text-[#fefae0]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
        >
            <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
            />
        </svg>
        </span>
    </li>`;
    } 
    
}
function previousStep(step) {
    // Hide all steps
    const steps = document.querySelectorAll('.page');
    steps.forEach((s) => {
        s.style.display = 'none';
    });

    // Show the previous step
    const previousStep = document.getElementById(`salut${step - 1}`);
    if (previousStep) {
        previousStep.style.display = 'block';
        // document.getElementById("allTicket").innerHTML = "";
        document.getElementById("salut4").innerHTML = ` <div id="allTicket" class="grid w-full gap-5">
        </div>
        <div class="flex justify-between  col-span-3">
            <button type="button" onclick="previousStep(4)"
                class="bg-[#283618] hover:bg-slate-900 text-white px-4 py-2 rounded-xl my-5 row-start-5 col-start-1">Previous</button>
            <button type="button" onclick="download()"
                class="bg-[#283618] hover:bg-slate-900 text-white px-8 py-2 rounded-xl my-5 row-start-5 col-start-3">download
                Pdf</button>
        </div>`;

        
    }
}
// nombre de place 
document.addEventListener('DOMContentLoaded', () => {
    nextStep(0); // Show the first step on page load
});

const numberInput = document.getElementById("numberInput");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
let currentValue
let prixAdult =0
let prixTotal = document.getElementById("pt")
let pt = 0
incrementButton.addEventListener("click", () => {
    currentValue = parseInt(numberInput.value, 10);
    prixAdult = (currentValue+1) * 500;
    numberInput.value = currentValue + 1;
    // prix total
    pt = pt + 500;
    prixTotal.innerHTML = pt + "dh";
    inable()
    place++
});
decrementButton.addEventListener("click", () => {
    let currentValue = parseInt(numberInput.value, 10);
    if ( currentValue > 0) { 
        numberInput.value = currentValue - 1;
        prixAdult = currentValue * 500;
        // decriment prix total
        pt = pt - 500;
        prixTotal.innerHTML = pt + "dh";
        uncheck()
    } 
    place--
    count=1
});
const numberInputa = document.getElementById("numberInputa");
const incrementButtona = document.getElementById("incrementa");
const decrementButtona = document.getElementById("decrementa");
let currentValuea
let prixEnfant = 0
incrementButtona.addEventListener("click", () => {
    currentValuea = parseInt(numberInputa.value, 10)
    prixEnfant = (currentValuea+1) * 100
    numberInputa.value = currentValuea + 1
    // prix total 
    pt = pt + 100
    prixTotal.innerHTML = pt + "dh"
    inable()
    place++

});


decrementButtona.addEventListener("click", () => {
    let currentValue = parseInt(numberInputa.value, 10);
    if (currentValue > 0) { 
        numberInputa.value = currentValue - 1;
         prixEnfant = currentValue * 100;
        //  decriment prix total 
        pt = pt - 100;
        prixTotal.innerHTML = pt + "dh" ;
        uncheck()
    }
    place--
    count=1
});
let place =0
let count = 1
function check() {
    console.log('place', place);
    console.log('count', count);
    
    if(place <= count){
        document.querySelectorAll('.che').forEach(element => {
        element.setAttribute('disabled', true) 
        });
    }
    count++
}
function inable() {
    if(place > count-2){
        document.querySelectorAll('.che').forEach(element => {
        element.removeAttribute('disabled', false)
        });
    }
}
function uncheck() {
        document.querySelectorAll('.che').forEach(element => {
        element.removeAttribute('disabled', false)
        element.checked = false
        });
    
}
function ticket(){
    for(let i=0; i< numberInput.value ; i++){
        document.getElementById("allTicket").innerHTML += `
        <div id="ticketA${i}" class="grid grid-cols-4 text-center h-[300px] w-[60vw]">
        <div class="grid grid-cols-4 text-center col-span-3 h-[300px] border rounded-lg bg-[#DDB383] ">
            <h2 class="text-[#FEFAE0] col-span-4 text-2xl rounded-tl-lg rounded-tr-lg" >AIR TICKET</h2>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${depart.value + " to " + arriver.value + " " + date.value + " prix total " + pt}" class="row-span-3 row-start-3">
            <span class="p-5 text-3xl text-[#FEFAE0]">${depart.value}</span>
            <i class="fa-solid fa-plane-departure p-5 text-3xl col-span-2"></i>
            <span class="p-5 text-3xl text-[#FEFAE0] ">${arriver.value}</span>
            <div class="border-t-2 col-span-3 justify-center"></div>
            <span class=" border-b-2">Date</span>
            <span class=" border-b-2">Prix</span>
            <span class="row-span-2 ">Adult</span>
            <span class="p-5">${date.value}</span>
            <span class="p-5">500 Dh</span>
        </div>
        <div class="grid grid-cols-3 text-center h-[300px] border rounded-lg">
            <h2 class="text-[#FEFAE0] bg-[#DDB383] rounded-tl-lg rounded-tr-lg col-span-3 " >BOARDING PASS</h2>
            <span class=" text-xl text-[#DDB383]">${depart.value}</span>
            <i class="fa-solid fa-plane-departure  text-xl"></i>
            <span class=" text-xl text-[#DDB383] ">${arriver.value}</span>
            <div class="border-t-2  col-span-3 w-[90%]"></div>
            <span class="">Date</span>
            <span class=" col-span-2">${date.value}</span>
            <span class="">Prix</span>
            <span class=" col-span-2">500 Dh</span>
            <span class=" col-span-3">Adult</span>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${depart.value + " to " + arriver.value + " " + date.value + " prix total " + pt}" alt="" class="col-start-2">
        </div>
    </div>`
    }
    
    for(let i=0; i< numberInputa.value ; i++){
        document.getElementById("allTicket").innerHTML += `
        <div id="ticketE${i}" class="grid grid-cols-4 text-center h-[300px] w-[60vw]">
        <div class="grid grid-cols-4 text-center col-span-3 h-[300px] border rounded-lg bg-[#52a7ed] ">
            <h2 class="text-[#FEFAE0] col-span-4 text-2xl rounded-tl-lg rounded-tr-lg" >AIR TICKET</h2>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${depart.value + " to " + arriver.value + " " + date.value + " prix total " + pt}" alt="" class="row-span-3 row-start-3">
            <span class="p-5 text-3xl text-[#FEFAE0]">${depart.value}</span>
            <i class="fa-solid fa-plane-departure col-span-2 p-5 text-3xl"></i>
            <span class="p-5 text-3xl text-[#FEFAE0] ">${arriver.value}</span>
            <div class="border-t-2 col-span-3 justify-center"></div>
            <span class=" border-b-2">Date</span>
            <span class=" border-b-2">Prix</span>
            <span class="row-span-2 ">Enfant</span>
            <span class="p-5">${date.value}</span>
            <span class="p-5">100 Dh</span>
        </div>
        <div class="grid grid-cols-3 text-center h-[300px] border rounded-lg">
            <h2 class="text-[#FEFAE0] bg-[#52a7ed] rounded-tl-lg rounded-tr-lg col-span-3 " >BOARDING PASS</h2>
            <span class=" text-xl text-[#52a7ed]">${depart.value}</span>
            <i class="fa-solid fa-plane-departure  text-xl"></i>
            <span class=" text-xl text-[#52a7ed] ">${arriver.value}</span>
            <div class="border-t-2  col-span-3 w-[90%]"></div>
            <span class="">Date</span>
            <span class=" col-span-2">${date.value}</span>
            <span class="">Prix</span>
            <span class=" col-span-2">100 Dh</span>
            <span class=" col-span-3">Enfant</span>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${depart.value + " to " + arriver.value + " " + date.value + " prix total " + pt}" alt="" class="col-start-2">
        </div>
    </div>`
    }
}
function download(){
    print()
    // for(let i=0; i< numberInputa.value ; i++){
    // const element = document.getElementById(`ticketE${i}`);
    // const elements = document.getElementById(`ticketA${e}`);
    // var opt = {
    //     margin: [0, -0.1, 0, 0],
    //     filename: "ticket.pdf",
    //     image: { type: "jpeg", quality: 1 },
    //     pagebreak: { avoid: "tr", mode: "html", },
    //     html2canvas: { scale: 4, useCORS: true, dpi: 192, letterRendering: true },
    //     jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
    // };
    
    // var opts = {
    //     margin: [0, -0.1, 0, 0],
    //     filename: "ticket.pdf",
    //     image: { type: "jpeg", quality: 1 },
    //     pagebreak: { avoid: "tr", mode: "html", },
    //     html2canvas: { scale: 4, useCORS: true, dpi: 192, letterRendering: true },
    //     jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
    // };
            
    // html2pdf().set(opts).from(elements).save();
    // html2pdf().set(opt).from(element).save();

// }
    
    // const content = document.getElementById('index0').innerHTML;
    // const printWindow = window.open('', '', 'height=600,width=800');
    
    // printWindow.document.write('<html><head><title>Print</title>');
    // printWindow.document.write('<style>body { margin: 0; }</style>'); // Set any custom styles here
    // printWindow.document.write('</head><body>');
    // printWindow.document.write(content);
    // printWindow.document.write('</body></html>');

    // printWindow.document.close(); // Necessary for some browsers to finish loading
    // printWindow.print();
    // print()  

}

