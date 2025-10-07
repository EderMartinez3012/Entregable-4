document.getElementById("formContacto").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const motivo = document.getElementById("motivo").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje");

    if (!nombre || !motivo || !correo ) {
        mensaje.textContent = "Por favor, complete todos los campos";
        mensaje.style.color = "red";
    } else if (!correo.includes("@")) {
        mensaje.textContent = "Correo invalido";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Formulario enviado";
        mensaje.style.color = "green";
        this.reset();
    }

});
