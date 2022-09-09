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
}
init()

const btnModificar = document.getElementById("btnCon")
btnModificar.addEventListener("click", async ()  =>{

    const contraseña = document.getElementById("password")
    const Nuevacontraseña = document.getElementById("confirmPassword")

    if(contraseña.value !== Nuevacontraseña.value){
        Swal.fire({
            icon: 'error',
            title: 'Ueeepaa',
            text: 'confirma si coinsiden >:D !',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          return

    }else{

        const newC ={

            "password":contraseña.value,
            "confirmPassword":Nuevacontraseña.value
        }

        const token = localStorage.getItem("token")
        const response = await fetch("https://vg-cine-server.herokuapp.com/change-password", {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify(newC)
        })

        Swal.fire(
            'Buen trabajo!',
            'registro exitoso!',
            'success'
          )
          window.location.href = "perfil.html"

    }

    })




