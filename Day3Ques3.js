//Day 3 - Question 3 Assessment
var req = new XMLHttpRequest;
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var data = JSON.parse(req.response);
    for(var i = 0; i < data.length;i++){
        console.log("Country: " + data[i].name.common);
        console.log("Region: " + data[i].region);
        console.log("SubRegion: " + data[i].subregion);
        console.log("Population: " + data[i].population);
    }
 //   console.log(data[0]);
}