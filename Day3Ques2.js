var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var data = JSON.parse(req.response);
    for(var i = 0;i <= data.length ;i++){
        if(data[i].flags.png.length){
            console.log("Flags: " + data[i].flags.png);
        }
    }
}