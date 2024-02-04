
/*
var Star = ""; 
for(var i = 0;i<4;i++){
    Star = "";
  for(var j = 0;j<=i;j++){
    Star+="*";
  }
  console.log(Star);
}
for(var i = 3;i>=0;i--){
    Star = "";
  for(var j = 0;j<=i;j++){
    Star+="*";
  }
  console.log(Star);
}
*/

function range(a,b){
    var Arr = [];
    while(a<=b){
        Arr.push(a);
        a++;
    }
    return Arr;

}

console.log(range(3,7));
