const btnlogin = document.getElementById("btnL")

btnlogin?.addEventListener( "click", async() => {
    console.log("iniciando sesion...")

    const correoI = document.getElementById("email")
    const contraseña = document.getElementById("contraseña")



    if(correoI.value === "" || contraseña.value === ""){
        
    }

    const dataToSend ={
        email: correoI.value,
        password: contraseña.value
    }

    console.log(dataToSend)

    try {
        
        
        const response = await fetch("https://vg-cine-server.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( dataToSend )
        })

        const data = await response.json()


        console.log(data)


        if(response.status ===200){
            const jwt = data.token
            localStorage.setItem('token', jwt)
            Swal.fire(
                'Buen trabajo!',
                'inicio exitoso!',
                'success'
              )
              window.location.href = "index.html"
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Ueeepaa',
                text: 'debes llenar los espacios vacios!',
                footer: '<a href="registro.html">no tienes cuenta? toca aqui para registrarte?</a>'
              })
                    
        }
        

    } catch (error) {
        alert(error)
    }


})