var arr1 = [3,'q','q','q','q',3,'q',2,4,9,3];

function count(args){
    var Result = {};
    var min_occ = 1;
    var max_ele;
    for(var i = 0; i<args.length; i++){
        var temp = args[i];
        if(Result[temp]){
            Result[temp]++;
        }else{
            Result[temp] = 1;
        }
        
        if(Result[temp] > min_occ){
            min_occ = Result[temp];
            max_ele = temp;
        }
    }
    console.log(`${max_ele} count is ${min_occ}`);
}
count(arr1)