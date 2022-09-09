const init = async () => {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const movieCaratula = document.getElementById("movie-caratula-container")
    const infoMovie = document.getElementById("info-container")
    console.log(params.id)


    const response = await fetch (`https://vg-cine-server.herokuapp.com/movie-detail/${params.id}`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })

    const data =  await response.json()

    console.log(data)

    const background = document.getElementById("peli-banner")
    background.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${data.data.backdrop_path})`
    background.style.height = "400px"
    background.style.backgroundSize = "cover"


    movieCaratula.innerHTML = `
     <img src=https://image.tmdb.org/t/p/w500${data.data.poster_path} alt="">
     <p class= "title"> ${data.data.title} </p>
    `
    infoMovie.innerHTML = data.data.overview


}
init()


const btn = document.getElementById("btnComprar")

btn.addEventListener("click", async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const response = await fetch (`https://vg-cine-server.herokuapp.com/movie-detail/${params.id}`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })

    const data =  await response.json()

    const { value: formValues } = await Swal.fire({
        title: 'Multiple inputs',
        html:`
        
        <label for="exampleFormControlInput1" class="form-label">Cantidad de entradas</label>
         <input type="number" class="form-control" id="TicketN" placeholder="">

        <label for="exampleFormControlInput1" class="form-label">Metodo de pago</label> <br> <br>
        <Select name="payment-Method" id="payment-Method" >
         <option value="transferencia">trasferencia</option>
         <option value="efectivo">Efectivo</option>
         <option value="Zelle">Pago zelle</option>

         </select>

         <br>
         <br>


         <label for="exampleFormControlInput1" class="form-label">Cedula</label>
         <input type="number" class="form-control" id="CedulaT" placeholder="Ingrese cedula">

         <label for="exampleFormControlInput1" class="form-label">Numero de referencia</label>
         <input type="number" class="form-control" id="numeroR" placeholder="">

        `,
           
        focusConfirm: false,
        preConfirm: () => {
          return {
            ticketNumber: document.getElementById("TicketN").value,
            paymentMethod: document.getElementById("payment-Method").value,
            CedulaT: document.getElementById("CedulaT").value,
            numeroR: document.getElementById("numeroR").value,
            movieTitle: data.data.title


          }
        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues))

        localStorage.getItem("token")

        const response = await fetch(" https://vg-cine-server.herokuapp.com/ticket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify( formValues )
        })
      }
})
