//main function for success 
var codeMain = function(filmData)
{
    d3.select("#movie-holder")
        .append("div")
        .selectAll("span")
        .data(filmData)
        .enter()
        .append("span")
        .attr("class","movie_icon")
        .text(function(d){return d.title})
    
    
    
}

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