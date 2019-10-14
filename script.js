//main function for success 
var codeMain = function(filmData)
{
    addtopageData(filmData);
    
    //var movieholder = 
        
        
 
    
    
  
}

//code to add in and bind the data
var addtopageData = function(filmData)
{
        
    
        d3.select("#movie-holder")
        .append("div")
        .selectAll("span")
        .data(filmData)
        .enter()
        .append("div")
        .attr("class","movie_icon")
        .attr("id",function(aFilmData){return "I" + aFilmData.id})
        .text(function(aFilmData){return aFilmData.title})
        .on("click",function(aFilmData){
                d3.selectAll(".movie_description").remove()
                //console.log(aFilmData.title)
                d3.select("#info-box")
                    .append("div")
                    .attr("class","movie_description")
                    .text(function(){return aFilmData.description})
                    })
}

// Promise to get data from API
var dataPromise = d3.json("https://ghibliapi.herokuapp.com/films")
dataPromise.then(
    function(filmData)
    {
        console.log("filmData: ", filmData)
        codeMain(filmData)
    },
    function(err)
    {
        console.log("Failure - Error : ", err)
    }
)