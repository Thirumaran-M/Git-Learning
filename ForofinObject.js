//Object.keys();

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1));
  // Expected output: Array ["a", "b", "c"]

  for(var i of Object.keys(object1)){
    console.log(`For Of: ${i} => ${object1[i]}`);
  }
  
  Object.keys(object1).forEach((ele) => {
    console.log(`ForEach : ${object1[ele]} => ${ele}`);
  });
  