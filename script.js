function getMovie(movieName="Game of thrones") {
    axios
      .get(`https://api.tvmaze.com/singlesearch/shows?q=${movieName}&embed=episodes`)
      .then(response => {
        console.log("::Get Movie::", movieName,response.data); 
      
      
           createUI(response.data);
       })
                                
}         


function createUI(movieData){
const title =  document.querySelector(".movie_title");
title.innerText  =movieData.name;


}

function handle_form(event){
event.preventDefault();  
const movieName =document.querySelector(".header_form-input").value;
getMovie(movieName);
}