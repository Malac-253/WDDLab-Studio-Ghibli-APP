//main function for success 
var codeMain = function(filmData)
{
    addtopageData(filmData);
    
    //var movieholder = 
        
        
    d3.select("#movie-holder")
        .on("click",function(){
                d3.select("#2baf70d1")
                    .append("p")
                    .selectAll("span")
                    .attr("class","movie_description")
                    .text(function(d){return d.description})
                    })
    
    
  
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
        .attr("id",function(d){return d.id.split("-")[0]})
        .text(function(d){return d.title})
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