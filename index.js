let score_el = document.getElementById("scoreJS")
let score_el_guest = document.getElementById("scoreJS_guest")
let count_home = 0
let count_guest = 0

function add1_HOME() {
    count_home += 1
    score_el.textContent =  count_home
}

function add2_HOME() {
    count_home += 2
    score_el.textContent =  count_home
}

function add3_HOME() {
    count_home += 3
    score_el.textContent =  count_home
}

function add1_GUEST() {
    count_guest += 1
    score_el_guest.textContent = count_guest
}

function add2_GUEST() {
    count_guest += 2
    score_el_guest.textContent = count_guest
}

function add3_GUEST() {
    count_guest += 3
    score_el_guest.textContent = count_guest
}

function newGame() {
    count_guest = 0;
    count_home = 0;
    score_el_guest.textContent = count_guest
    score_el.textContent =  count_home
}


