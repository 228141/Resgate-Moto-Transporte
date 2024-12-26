document.getElementById("telefone").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove não números
    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3"); // Formato celular
    } else {
        value = value.replace(/^(\d{2})(\d{4})(\d{4}).*/, "($1) $2-$3"); // Formato fixo
    }
    e.target.value = value;
});
