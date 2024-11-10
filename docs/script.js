// import jsPDF from "jspdf";
function nextStep(step) {
    const steps = document.querySelectorAll('.page');
    steps.forEach((s) => {
        s.style.display = 'none';
    });
    const currentStep = document.getElementById(`salut${step}`);
    if (currentStep) {
        currentStep.style.display = 'grid';
        
        
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
        document.getElementById("salut4").innerHTML = ` <div id="allTicket" class="col-span-3 w-full">
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
    // prix adult 
    document.getElementById("Adult").innerHTML = "Adult : " + prixAdult + "dh" ;
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
        // decriment prix adult
        document.getElementById("Adult").innerHTML = "Adult : " + (prixAdult - 500 ) + "dh" ;
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
    // prix enfant
    document.getElementById("Enfant").innerHTML = "Enfant : " + prixEnfant + "dh" 
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
        //  decriment prix enfant
        document.getElementById("Enfant").innerHTML = "Enfant : " + (prixEnfant - 100 ) + "dh" ;
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
        <div class="max-w-md w-[300px] row-auto  mx-auto mt-10 z-10 bg-[#bc6c25] rounded-3xl">
            <div class="flex flex-col">
                <div class="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                    <div class="flex-none sm:flex">
                        <div class=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
                            <a href="#"
                                class="absolute -right-2 bottom-2  ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                            </a>
                        </div>
                        <div class="flex-auto justify-evenly">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center  my-1">
                                    <span class="mr-3 rounded-full bg-white w-8 h-8">
                                        <img src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
                                            class="h-8 p-1">
                                    </span>
                                    <h2 class="font-medium">Adult</h2>
                                </div>
                            </div>
                            <div class="flex items-center justify-around">
                                <div class="flex flex-col">
                                    <div class="w-full flex-none text-lg text-blue-800 font-bold leading-none">${depart.value}
                                    </div>
                                </div>
                                <div class="flex flex-col mx-auto">
                                    <img src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
                                        class="w-20 p-1">
                                </div>
                                <div class=" ">
                                    <div class="w-full flex-none text-lg text-blue-800 font-bold leading-none">${arriver.value}
                                    </div>
                                </div>
                            </div>
                            <div class="border-dashed border-b-2 my-5 pt-5">
                                <div class="absolute rounded-full w-5 h-5 bg-[#bc6c25] -mt-2 -left-2"></div>
                                <div class="absolute rounded-full w-5  h-5 bg-[#bc6c25] -mt-2 -right-2"></div>
                            </div> 
                            <div class="absolute rounded-full w-full h-5  -mt-2 -right-2 text-center">${date.value}<div>500Dh</div></div>
                            <div class=" border-dashed border-b-2 my-5 pt-5">
                                <div class="absolute rounded-full w-5 h-5 bg-[#bc6c25] -mt-2 -left-2"></div>
                                <div class="absolute rounded-full w-5 h-5 bg-[#bc6c25] -mt-2 -right-2"></div>
                            </div>
                            <div class="flex items-center mb-4 px-5">
                                <div class="flex flex-col text-sm">
                                    <span class="">Board</span>
                                    <div class="font-semibold">11:50AM</div>
                                </div>
                                <div class="flex flex-col mx-auto text-sm">
                                    <span class="">Departs</span>
                                    <div class="font-semibold">11:30Am</div>
                                </div>
                                <div class="flex flex-col text-sm">
                                    <span class="">Arrived</span>
                                    <div class="font-semibold">2:00PM</div>
                                </div>
                            </div>
                            <div class=" border-dashed border-b-2 my-5 pt-5">
                                <div class="absolute rounded-full w-5 h-5 bg-[#bc6c25] -mt-2 -left-2"></div>
                                <div class="absolute rounded-full w-5 h-5 bg-[#bc6c25] -mt-2 -right-2"></div>
                            </div>
                            <div class="flex flex-col  justify-center text-sm ">
                                <h6 class="font-bold text-center">Boarding Pass</h6>
                                <div class="flex justify-center  mt-4 ">
                                    <img src="../images/rb_2915.png" alt="" class="h-48">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    
    for(let i=0; i< numberInputa.value ; i++){
        document.getElementById("allTicket").innerHTML += `
        <div class="max-w-md w-[300px]  mx-auto mt-10 z-10 bg-[#606c38] rounded-3xl">
            <div class="flex flex-col">
                <div class="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                    <div class="flex-none sm:flex">
                        <div class=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
                            <a href="#"
                                class="absolute -right-2 bottom-2  ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                            </a>
                        </div>
                        <div class="flex-auto justify-evenly">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center  my-1">
                                    <span class="mr-3 rounded-full bg-white w-8 h-8">
                                        <img src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
                                            class="h-8 p-1">
                                    </span>
                                    <h2 class="font-medium">Enfant</h2>
                                </div>
                            </div>
                            <div class="flex items-center justify-around">
                                <div class="flex flex-col">
                                    <div class="w-full flex-none text-lg text-blue-800 font-bold leading-none">${depart.value}
                                    </div>
                                </div>
                                <div class="flex flex-col mx-auto">
                                    <img src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
                                        class="w-20 p-1">
                                </div>
                                <div class=" ">
                                    <div class="w-full flex-none text-lg text-blue-800 font-bold leading-none">${arriver.value}
                                    </div>
                                </div>
                            </div>
                            <div class=" border-dashed border-b-2 my-5 pt-5">
                                <div class="absolute rounded-full w-5 h-5 bg-[#606c38] -mt-2 -left-2"></div>
                                <div class="absolute rounded-full w-5 h-5 bg-[#606c38] -mt-2 -right-2"></div>
                            </div>
                            <div class="absolute rounded-full w-full h-5  -mt-2 -right-2 text-center">${date.value}<div>100Dh</div></div>
                            <div class=" border-dashed border-b-2 my-5 pt-5">
                                <div class="absolute rounded-full w-5 h-5 bg-[#606c38] -mt-2 -left-2"></div>
                                <div class="absolute rounded-full w-5 h-5 bg-[#606c38] -mt-2 -right-2"></div>
                            </div>
                            <div class="flex items-center mb-4 px-5">
                                <div class="flex flex-col text-sm">
                                    <span class="">Board</span>
                                    <div class="font-semibold">11:50AM</div>
                                </div>
                                <div class="flex flex-col mx-auto text-sm">
                                    <span class="">Departs</span>
                                    <div class="font-semibold">11:30Am</div>
                                </div>
                                <div class="flex flex-col text-sm">
                                    <span class="">Arrived</span>
                                    <div class="font-semibold">2:00PM</div>
                                </div>
                            </div>
                            <div class=" border-dashed border-b-2 my-5 pt-5">
                                <div class="absolute rounded-full w-5 h-5 bg-[#606c38] -mt-2 -left-2"></div>
                                <div class="absolute rounded-full w-5 h-5 bg-[#606c38] -mt-2 -right-2"></div>
                            </div>
                            <div class="flex flex-col  justify-center text-sm ">
                                <h6 class="font-bold text-center">Boarding Pass</h6>
                                <div class="flex justify-center  mt-4 ">
                                    <img src="../images/rb_2915.png" alt="" class="h-48">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}
function download(){
    const element = document.getElementById('allTicket');
    html2pdf().from(element).save();
    

}

