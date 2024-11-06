function nextStep(step) {
    const steps = document.querySelectorAll('.page');
    steps.forEach((s) => {
        s.style.display = 'none';
    });
    const currentStep = document.getElementById(`salut${step}`);
    if (currentStep) {
        currentStep.style.display = 'block';
        
        
        let li = "li" + step;
    document.getElementById(li).innerHTML = `<li
    class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-gray-700"
    >
        <span
        class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
        >
        <svg
            class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
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
    class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-gray-700"
    >
        <span
        class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
        >
        <svg
            class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
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
    class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-gray-700"
    >
        <span
        class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
        >
        <svg
            class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
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
    class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-gray-700"
    >
        <span
        class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
        >
        <svg
            class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
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
    if (currentValue > 0) { 
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
    currentValuea = parseInt(numberInputa.value, 10);
    prixEnfant = (currentValuea+1) * 100;
    numberInputa.value = currentValuea + 1;
    // prix total 
    pt = pt + 100;
    prixTotal.innerHTML = pt + "dh";
    // prix enfant
    document.getElementById("Enfant").innerHTML = "Enfant : " + prixEnfant + "dh" ;
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
