let rbtnDelivery = document.getElementById("delivery-btn")
let rbtnTakeaway = document.getElementById("takeaway-btn")

let lblDelivery = document.getElementById("delivery-lbl")
let lblTakeaway = document.getElementById("takeaway-lbl")

let calle = document.getElementById("calle")
let numero = document.getElementById("numero")
let piso = document.getElementById("piso")

let errorSign = document.getElementById("error-sign")


rbtnDelivery.addEventListener("click", (e) => {
    if (e.target.checked) {
        lblDelivery.classList.add("clicked")
        lblTakeaway.classList.remove("clicked")
    }

    calle.disabled = false
    numero.disabled = false
    piso.disabled = false

})

rbtnTakeaway.addEventListener("click", (e) => {
    if (e.target.checked) {
        lblTakeaway.classList.add("clicked")
        lblDelivery.classList.remove("clicked")
    }

    calle.disabled = true
    numero.disabled = true
    piso.disabled = true

})

/* ------ Carga de formulario ------- */

document.querySelector("#form-paga").addEventListener("submit", (e) => {
    if ((!calle.value || !numero.value || !piso.value) && !rbtnTakeaway.checked) {
        e.preventDefault()

        if (errorSign.classList.contains("hide")) {
            errorSign.classList.toggle("hide")
        }
    } else {
        e.preventDefault()
        console.log("Formulario enviado")
        sessionStorage.clear()
        window.location.href = "./compraExitosa.html"
        /* Envio al backend */
    }    
})

