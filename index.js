
// Get the root element
var r = document.querySelector(':root');
let antalratt = 0;

let legend = {
    0 : ["fenoximetylpenicillin", "pcv"],
    1 : ["bensylpenicillin", "pcg"],
    2 : ["pivmecillinam"],
    3 : ["amoxicillin", "ampicilin"],
    4 : ["amoxicillin/klavulansyra"],
    5 : ["flukloxacillin", "kloxacillin"],
    6 : ["piperacillin/tazobaktam"],
    7 : ["cefadroxil"],
    8 : ["ceftibuten"],
    9 : ["cefuroxim"],
    10 : ["cefotaxim"],
    11 : ["ceftriaxon"],
    12 : ["ceftazidim"],
    13 : ["imipenem"],
    14 : ["meropenem"],
    15 : ["ertapenem"],
    16 : ["aztreonam"],
    17 : ["erytromycin"],
    18 : ["azitromycin"],
    19 : ["klindamycin"],
    20 : ["doxycyklin"],
    21 : ["metronidazol"],
    22 : ["ciprofloxacin"],
    23 : ["moxifloxacin"],
    24 : ["trimetoprim"],
    25 : ["trimetoprim/sulfa"],
    26 : ["nitrofurantoin"],
    27 : ["amikacin", "gentamicin", "tobramycin"],
    28 : ["vankomycin"],
    29 : ["daptomycin"],
    30 : ["linezolid"]
    
    
    
}

cb = Math.floor(Math.random() * 31);
let avslojad = false;

function next() {
    cb = Math.floor(Math.random() * 31);
    let random = -269 - cb * 45;
    avslojad = false;
    document.documentElement.style.setProperty("--current_ab", String(random + "px"));
}
next()
try {antalratt = localStorage.getItem("antalratt");
    document.getElementById("antalratt").innerHTML = String(antalratt);
}
catch {}
function check() {
    console.log(cb);
    if (legend[cb].includes(document.getElementById("input").value)) {
        if (!avslojad) {correct();}
        next()
        document.getElementById("input").value = "";
    }

}



function avsloja() {
    avslojad = true;
    document.getElementById("rattsvar").innerHTML = String(legend[cb]);
}

function correct() {
    antalratt++;
    console.log("asdasd");
    localStorage.setItem("antalratt" , String(antalratt));
    document.getElementById("antalratt").innerHTML = String(antalratt);
}


