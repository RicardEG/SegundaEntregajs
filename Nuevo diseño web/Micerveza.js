const listaUsuarios = []

let btnEnviar = document.getElementById("Envioformulario")
btnEnviar.addEventListener("click",NuevoUsuario)
/*btnEnviar.addEventListener("click", DatosValid)*/


function NuevoUsuario (){
    alert("Registrando Nuevo Usuario")
    const Datosuser = document.getElementById("DatosUsuarios")
    const Todoslosdatos = {
        nombre: Datosuser.nombre.value,
        apellido: Datosuser.apellido.value,
        email: Datosuser.email.value,
        clave: Datosuser.password.value,
        clave1: Datosuser.password1.value
    }
    const nombrevalid = document.getElementById("nombre");
    const claveValid = document.getElementById("passsword");
    const Error = document.getElementById("Advertencianombre");
    Error.style.color = 'red';
    const errormsj = [];
    
    if((nombrevalid.value === null)||(nombrevalid.value === "")) {
        errormsj.push("Ingresa un nombre");

     }else if((claveValid.value === null)||(claveValid.value === "")){

        errormsj.push("Ingresa una contraseña")
     }else{

     
     
     Error.innerHTML = errormsj.join(", ")

     }

        
        


    const emailValue = document.getElementById("email")
    console.log(emailValue.value)

    let emailfind = listaUsuarios.find((e) => e.email === (emailValue.value))
    console.log(emailfind)
    console.log(listaUsuarios)
    if(emailfind === false){
        alert("Tu email ya esta en uso")
        
                        
    }else if (emailfind === undefined){
        alert(" Bienvenido " + Todoslosdatos.nombre )
        listaUsuarios.push(Todoslosdatos,"")
        const UseraJSON = JSON.stringify(listaUsuarios)
        localStorage.setItem("User",UseraJSON)
    }else{
        alert("Has sido registrado")
    }

    
    

    
}
/*
function DatosValid (){
    const Validando = document.getElementById("DatosUsuarios")  
    nombre = document.getElementById("nombre")
    email = document.getElementById("email")
    let clave = document.getElementById("password")
    let clave1 = document.getElementById("password1")
    const busquedanombre =  listaUsuarios.find((n)=> n.nombre === nombre)
    const busquedaemail = listaUsuarios.find((e)=> e.email === email)
    
    function datos (){
        if ((Validando.nombre.value)===(listaUsuarios.find(nombre))){
            alert("tu nombre ya existe")
        }
    }

    if (busquedanombre === true){
        alert("Tu nombre ya se encuentra en uso");
    
    }else if ( busquedaemail === true){
        alert("Tu email ya se encuentra en uso");
    
    }else if((clave.innerText)!=(clave1.innerText)){
        
        alert("Ingresaste mal la contraseña")
               
     }else if((clave)===(clave1)){
        
        alert("Bienvenido");
        NuevoUsuario()
        
     }else{

     }
        
      
        
     
}
*/