const init = async() => {
    const movies = document.getElementById("movies")
    const movie =document.getElementById("movie")

    if(localStorage.getItem("token")){
        movie.innerHTML= 
        `
        <a class="nav-link" style="color:darkgray;" href="perfil.html">Ver perfil</a>
        `
        
    }


    const responsive = await fetch('https://vg-cine-server.herokuapp.com/movies' , {
        method: "GET",
        headers:{
            "Content-Type" : "application/json"
        }
    })

    const data = await responsive.json()


    for (let i= 0 ; i<data.data.length; i++) {

        movies.innerHTML+=`
        <a href="info-peli.html?id=${data.data[i].id}"> 
            <div class="movie1">
                <img class="peli1" src=" https://image.tmdb.org/t/p/w500/${data.data[i].poster_path}" alt="">
            </div>
        </a>
        `
        
    }}





    init()


