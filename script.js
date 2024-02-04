//XML http request Samples

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);

    for(var i = 0; i<250;i++){
        console.log("Common Name: " + res[i].name.common);
        console.log("Flag: " + res[i].flags.png);
        if(res[i].capital[0]){
            console.log("Capital: " + res[i].capital[0]);
        }else{
            console.log("Capital: No Capital");
        }
        console.log("Area: " + res[i].area);
    }
}