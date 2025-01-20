function informacion(){
    var params = {
        nombre : document.getElementById("nombre").value,
        email : document.getElementById("email").value,
        telefono : document.getElementById("telefono").value,
        mensaje : document.getElementById("mensaje").value
    }

    const serviceID = "service_rekeydp"
const templateID = "template_ft35zv4"

emailjs.send(serviceID,templateID,params)
.then((res) =>{
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mensaje").value = "";
    console.log(res);
    alert("Tu mensaje se ha enviado satisfactoriamente")

})
.catch((err)=>console.log(err));
    

}

