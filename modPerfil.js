


const init = async() =>{
    
    
    const token = localStorage.getItem("token")
    const response = await fetch("https://vg-cine-server.herokuapp.com/profile", {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    })


    const data = await response.json()
    console.log(data)


    const perfilInfo = document.getElementById("contenedorsito")

    console.log(perfilInfo);
    perfilInfo.innerHTML =`
    <p>Nombre:</p>
            <input id="nombre" type="text" value="${data?.data?.firstName}">
            <p>Apellido:</p>
            <input id="Apellido" type="text" value="${data?.data?.lastName}">
            <p>Cedula:</p>
            <input type="text" id="cedula" value="${data?.data?.id}">
            <p>Fecha de nacimiento:</p>
            <input type="date" id="Fnacimiento" value="${data?.data?.birthday}" >
            <p>Direccion:</p>
            <input type="text" id="direccion" value="${data?.data?.address}">
    `

}

init()

const btnModificar = document.getElementById("btnM")
btnModificar.addEventListener("click", async ()  =>{

    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("Apellido")
    const cedula = document.getElementById("cedula")
    const Fnacimiento = document.getElementById("Fnacimiento")
    const direccion = document.getElementById("direccion")


    if(nombre.value === "" || apellido.value === "" || cedula.value === "" || Fnacimiento.value === "" || direccion.value === "" ){
        Swal.fire({
            icon: 'error',
            title: 'Ueeepaa',
            text: 'debes llenar los espacios vacios!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        return
    } else{


        const newU = {
            "firstName":nombre.value,
            "lastName":apellido.value,
            "id":cedula.value,
            "birthday":Fnacimiento.value,
            "address":direccion.value,
            
        }

        
    
    
       const token = localStorage.getItem("token")
        const response = await fetch("https://vg-cine-server.herokuapp.com/edit-profile", {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify(newU)
        })

        Swal.fire(
            'Buen trabajo!',
            'registro exitoso!',
            'success'
          )
          window.location.href = "perfil.html"

    }

        localStorage.removeItem("btnC")
    modificarP.addEventListener("click", () =>{
    window.location.href = "perfil.html"
    })


   
 

    

    
    
})