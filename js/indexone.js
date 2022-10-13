// Crew Page Starts




const hurley = document.querySelector(".crew_title_Hurley")
const mark = document.querySelector(".crew_title_Mark")
const pilot = document.querySelector(".crew_title_pilot")
const engineer = document.querySelector(".crew_title_engineer")


const hurleyimg = document.querySelector(".crew_commander_hurley")
const markimg = document.querySelector(".crew_commander_mark")
const pilotimg = document.querySelector(".crew_commander_pilot")
const engineerimg = document.querySelector(".crew_commander_engineer")

const dot1 = document.querySelector(".crewone")
const dot2 = document.querySelector(".crewtwo")
const dot3 = document.querySelector(".crewthree")
const dot4 = document.querySelector(".crewfour")




const activehurley = () => {

    hurley.classList.add("activecrew")
    mark.classList.remove("activecrew")
    pilot.classList.remove("activecrew")
    engineer.classList.remove("activecrew")


    hurleyimg.classList.add("activecrewimg")
    markimg.classList.remove("activecrewimg")
    pilotimg.classList.remove("activecrewimg")
    engineerimg.classList.remove("activecrewimg")


    dot1.classList.add("activecrewdot")
    dot2.classList.remove("activecrewdot")
    dot3.classList.remove("activecrewdot")
    dot4.classList.remove("activecrewdot")

}


const activemark = () => {

    hurley.classList.remove("activecrew")
    mark.classList.add("activecrew")
    pilot.classList.remove("activecrew")
    engineer.classList.remove("activecrew")


    hurleyimg.classList.remove("activecrewimg")
    markimg.classList.add("activecrewimg")
    pilotimg.classList.remove("activecrewimg")
    engineerimg.classList.remove("activecrewimg")


    dot1.classList.remove("activecrewdot")
    dot2.classList.add("activecrewdot")
    dot3.classList.remove("activecrewdot")
    dot4.classList.remove("activecrewdot")

}

const activepilot = () => {

    hurley.classList.remove("activecrew")
    mark.classList.remove("activecrew")
    pilot.classList.add("activecrew")
    engineer.classList.remove("activecrew")


    hurleyimg.classList.remove("activecrewimg")
    markimg.classList.remove("activecrewimg")
    pilotimg.classList.add("activecrewimg")
    engineerimg.classList.remove("activecrewimg")


    dot1.classList.remove("activecrewdot")
    dot2.classList.remove("activecrewdot")
    dot3.classList.add("activecrewdot")
    dot4.classList.remove("activecrewdot")

}

const activeengineer = () => {

    hurley.classList.remove("activecrew")
    mark.classList.remove("activecrew")
    pilot.classList.remove("activecrew")
    engineer.classList.add("activecrew")


    hurleyimg.classList.remove("activecrewimg")
    markimg.classList.remove("activecrewimg")
    pilotimg.classList.remove("activecrewimg")
    engineerimg.classList.add("activecrewimg")


    dot1.classList.remove("activecrewdot")
    dot2.classList.remove("activecrewdot")
    dot3.classList.remove("activecrewdot")
    dot4.classList.add("activecrewdot")

}


dot1.addEventListener("click", () => activehurley())
dot2.addEventListener("click", () => activemark())
dot3.addEventListener("click", () => activepilot())
dot4.addEventListener("click", () => activeengineer())
