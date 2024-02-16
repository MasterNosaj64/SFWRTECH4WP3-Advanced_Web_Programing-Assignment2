

document.getElementById('calc').addEventListener('click', function (event) {
    event.preventDefault();
    form_Logic();
});

document.getElementById('reset').addEventListener('click', function (event) {
    resetErrors();
});

function form_Logic() {
    let mamount = document.forms["calculator"]["mamount"].value;
    let irate = document.forms["calculator"]["irate"].value;
    let llength = document.forms["calculator"]["llength"].value;
    let pcode = document.forms["calculator"]["pcode"].value;

    let success = true;

    resetErrors();

    if (mamount == "") {

        document.getElementById("errorlist").style.display = "block";
        document.getElementById("mamount_Blank").style.display = "block";
        document.getElementById("mamount").classList.add("is-invalid");
        success = false;

    } else if (!validate_maamount(mamount)) {

        document.getElementById("errorlist").style.display = "block";
        document.getElementById("mamount_Error").style.display = "block";
        document.getElementById("mamount").classList.add("is-invalid");
        success = false;

    } else {

        document.getElementById("mamount").classList.add("is-valid");


    }

    if (irate == "") {

        document.getElementById("errorlist").style.display = "block";
        document.getElementById("irate_Blank").style.display = "block";
        document.getElementById("irate").classList.add("is-invalid");
        success = false;

    } else if (!validate_irate(irate)) {

        document.getElementById("errorlist").style.display = "block";
        document.getElementById("irate_Error").style.display = "block";
        document.getElementById("irate").classList.add("is-invalid");
        success = false;

    } else {

        document.getElementById("irate").classList.add("is-valid");

    }

    if (llength == "") {

        document.getElementById("errorlist").style.display = "block";
        document.getElementById("llength_Blank").style.display = "block";
        document.getElementById("llength").classList.add("is-invalid");
        success = false;

    } else if (!validate_llength(llength)) {

        document.getElementById("errorlist").style.display = "block";
        document.getElementById("llength_Error").style.display = "block";
        document.getElementById("llength").classList.add("is-invalid");
        success = false;

    } else {

        document.getElementById("llength").classList.add("is-valid");
    }

    if (pcode == "") {

        document.getElementById("errorlist").style.display = "block";
        document.getElementById("pcode_Blank").style.display = "block";
        document.getElementById("pcode").classList.add("is-invalid");
        success = false;

    } else if (!validate_pcode(pcode)) {

        document.getElementById("errorlist").style.display = "block";
        document.getElementById("pcode_Error").style.display = "block";
        document.getElementById("pcode").classList.add("is-invalid");
        success = false;

    } else {

        document.getElementById("pcode").classList.add("is-valid");
    }

    if (success) {

        let m = 0;
        let p = parseFloat(mamount);
        let r = parseFloat(irate) / 100 / 12;
        let n = parseInt(llength) * 12;

        m = p * (r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1)

        document.getElementById("calculation_Div").style.display = "block";
        document.getElementById("result").innerHTML = "$" + m.toFixed(2);

    }

}

function validate_maamount(mamount) {

    let amount = parseFloat(mamount);
    return !isNaN(amount) && amount > 0;

}

function validate_irate(irate) {

    let rate = parseFloat(irate);
    return !isNaN(rate) && rate > 0;

}

function validate_llength(llength) {

    let length = parseInt(llength);
    return !isNaN(length) && length >= 5 && length <= 30;

}

function validate_pcode(pcode) {

    return pcode.length === 7 && (pcode.charAt(0).toUpperCase() === "L");

}


function resetErrors() {

    document.getElementById("errorlist").style.display = "none";
    let errorMessages = document.querySelectorAll("#errorlist li");
    for (let message of errorMessages) {
        message.style.display = "none";
    }

    let calcDiv = document.getElementById("calculation_Div");
    calcDiv.style.display = "none";
    document.getElementById("result").innerHTML = "";

    let inputs = document.getElementsByClassName('form-control');
    for (let input of inputs) {
        input.classList.remove('is-invalid');
        input.classList.remove('is-valid');
    }

}