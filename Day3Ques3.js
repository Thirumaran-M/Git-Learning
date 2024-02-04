
//Day 3 - Question 3 Assessment
var req = new XMLHttpRequest;
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var data = JSON.parse(req.response);
    for(var i = 0; i < 2;i++){
        console.log("Country: " + data[i].name.common);
        console.log("Region: " + data[i].region);
//        data[i].subregion = data[i].subregion?data[i].subregion:"No Sub Region Found";
        data[i].subregion??="Sub Region not found";
        console.log("SubRegion: " + data[i].subregion);
        console.log("Population: " + data[i].population);
    }
 //   console.log(data[0]);
}