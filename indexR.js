const nombre = document.getElementById("nombre")
const apellido = document.getElementById("Apellido")
const cedula = document.getElementById("cedula")
const Fnacimiento = document.getElementById("Fnacimiento")
const direccion = document.getElementById("direccion")
const correo = document.getElementById("Correo")
const contraseña = document.getElementById("Contraseña")
const registro = document.getElementById("btnR")

registro.addEventListener("click",async() => {


    if(nombre.value === "" || apellido.value === "" || cedula.value === "" || Fnacimiento.value === "" || direccion.value === "" || correo.value === "" || contraseña.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Ueeepaa',
            text: 'debes llenar los espacios vacios!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        return
    }

    const newU = {
        "firstName":nombre.value,
        "lastName":apellido.value,
        "id":cedula.value,
        "birthday":Fnacimiento.value,
        "address":direccion.value,
        "email":correo.value,
        "password":contraseña.value
        
    }
    
    
    try {
        
        
        const response = await fetch(" https://vg-cine-server.herokuapp.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( newU )
        })

        const data = await response.json()
       

        console.log(data)


        if(response.status ===200){
            Swal.fire(
                'Buen trabajo!',
                'registro exitoso!',
                'success'
              )
              window.location.href = "/"
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Ueeepaa',
                text: 'debes llenar los espacios vacios!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
                    
        }
        

    } catch (error) {
        alert(error)
    }

})
