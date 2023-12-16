function ellenoriz() {
    var form = document.getElementById("megrendeloForm");
    var inputs = form.querySelectorAll("input, select, textarea");

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            inputs[i].classList.add("error");
        } else {
            inputs[i].classList.remove("error");
        }
    }

    var errors = form.querySelectorAll(".error");
    if (errors.length === 0) {
        alert("Sikeres megrendelés!");
    }
}
    