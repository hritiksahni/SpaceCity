


// For Destination Page

const clickmars = document.querySelector(".planet_tabs_mars")
const clickmoon = document.querySelector(".planet_tabs_moon")
const clicktitan = document.querySelector(".planet_tabs_titan")
const clickeuropa = document.querySelector(".planet_tabs_europa")


const mars = document.querySelector(".marspage")
const marspic = document.querySelector(".marsimg")
const moon = document.querySelector(".moonpage")
const moonpic = document.querySelector(".moonimg")
const titan = document.querySelector(".titanpage")
const titanpic = document.querySelector(".titanimg")
const europa = document.querySelector(".europapage")
const europapic = document.querySelector(".europaimg")









const togglemars = () => {

// these are to add an active underline on the slected tab in destination page
clickmars.classList.add("active_tab")
clickmoon.classList.remove("active_tab")
clicktitan.classList.remove("active_tab")
clickeuropa.classList.remove("active_tab")


// these are for adding an active class to change content details in destination page
mars.classList.add("active")
marspic.classList.add("active")
moon.classList.remove("active")
moonpic.classList.remove("active")
titan.classList.remove("active")
titanpic.classList.remove("active")
europa.classList.remove("active")
europapic.classList.remove("active")
}

const togglemoon = () => {

    // these are to add an active underline on the slected tab in destination page
    clickmars.classList.remove("active_tab")
    clickmoon.classList.add("active_tab")
    clicktitan.classList.remove("active_tab")
    clickeuropa.classList.remove("active_tab")

    


    // these are for adding an active class to change content details in destination page
    mars.classList.remove("active")
    marspic.classList.remove("active")
    moon.classList.add("active")
    moonpic.classList.add("active")
    titan.classList.remove("active")
    titanpic.classList.remove("active")
    europa.classList.remove("active")
    europapic.classList.remove("active")
}

const toggletitan = () => {
    // these are to add an active underline on the slected tab in destination page
    clickmars.classList.remove("active_tab")
    clickmoon.classList.remove("active_tab")
    clicktitan.classList.add("active_tab")
    clickeuropa.classList.remove("active_tab")




    // these are for adding an active class to change content details in destination page
    mars.classList.remove("active")
    marspic.classList.remove("active")
    moon.classList.remove("active")
    moonpic.classList.remove("active")
    titan.classList.add("active")
    titanpic.classList.add("active")
    europa.classList.remove("active")
    europapic.classList.remove("active")
}

const toggleeuropa = () => {
    // these are to add an active underline on the slected tab in destination page
    clickmars.classList.remove("active_tab")
    clickmoon.classList.remove("active_tab")
    clicktitan.classList.remove("active_tab")
    clickeuropa.classList.add("active_tab")



    // these are for adding an active class to change content details in destination page
    mars.classList.remove("active")
    marspic.classList.remove("active")
    moon.classList.remove("active")
    moonpic.classList.remove("active")
    titan.classList.remove("active")
    titanpic.classList.remove("active")
    europa.classList.add("active")
    europapic.classList.add("active")
}


clickmars.addEventListener("click", () => togglemars())
clickmoon.addEventListener("click", () => togglemoon())
clicktitan.addEventListener("click", () => toggletitan())
clickeuropa.addEventListener("click", () => toggleeuropa())


// Destination Page Ends



//--------------------------------------------------------------------



