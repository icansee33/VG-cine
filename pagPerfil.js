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
    perfilInfo.innerHTML = `
        <p>Nombre:</p>
        <H3 id="nombreH">${data?.data?.firstName}</H3>
        <p>Apellido:</p>
        <H3 id="apellidoH">${data?.data?.lastName}</H3>
        <p>Cedula:</p>
        <H3 id="cedulaH">${data?.data?.id}</H3>
        <p>Fecha de nacimiento:</p>
        <H3 id="fechaH">${data?.data?.birthday}</H3>
        <p>Direccion:</p>
        <H3 id="direccionH">${data?.data?.address}</H3>
       
    `

}


const modificarP = document.getElementById("btnM")
modificarP.addEventListener("click", () =>{
window.location.href = "perfilM.html"
})



const cerrarS = document.getElementById("btnC")
cerrarS.addEventListener("click", () =>{
localStorage.removeItem("token")
window.location.href= "inicio.html"
})

init()