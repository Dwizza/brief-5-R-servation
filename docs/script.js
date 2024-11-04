let arriver = document.getElementById("arriver")
let li1 = document.getElementById("li1")
let count = 0
document.getElementById("salut1").style.display="none"
document.getElementById("salut2").style.display="none"
document.getElementById("salut3").style.display="none"
document.getElementById("salut21").style.display="none"
document.getElementById("salut22").style.display="none"

function next1() {
    let s = "salut"+count
    let s1= "salut"+(count+1)
    console.log(s1);
    
    document.getElementById(s).style.display="none"

  

    if(arriver.value === "Paris" || count < 1 ){
    document.getElementById(s1).style.display="flex"
    let li= "li"+count
    document.getElementById(li).innerHTML=`<li
    class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800"
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
    </li>`
    count++
}

    if(arriver.value === "London"){
        
        document.getElementById("salut21").style.display="flex"
        let li= "li"+count
    document.getElementById(li).innerHTML=`<li
    class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800"
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
    </li>`
    count++
}

    if(arriver.value === "Madrid"){
        
        document.getElementById("salut22").style.display="flex"
        let li= "li"+count
    document.getElementById(li).innerHTML=`<li
    class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800"
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
    </li>`
    count++
}
if(count > 2){
    document.getElementById("salut21").style.display="none"
    document.getElementById("salut22").style.display="none"
    document.getElementById("salut3").style.display="grid"
}


}