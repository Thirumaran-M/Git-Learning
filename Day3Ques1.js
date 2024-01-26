let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

var status = 0;

if(obj1.length == obj2.length){
  for (var i in obj1){
    if(obj1[i] == obj2[i]){
      status = 1;
    }else{
      status = 0;
      break;
    }
  }
}else{  
      status = 0;
}

if(status == 1){
  console.log("Objects Matching");
}else{
  console.log("Objects Not Matching");
}