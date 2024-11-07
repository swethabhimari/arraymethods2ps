// 1. Check if all elements in an array are unique.

var arr=[2,3,20,30,70,2]
var result=true
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            result=false
            break;
        }
    }
}
console.log(result);

// 2. Find the missing numbers in an array containing numbers from 1 to N.

var arr1=[1,2,3,4,5,7,10];
var missingnumber=[]
j=0
for(i=1;i<=arr1[arr1.length-1];i++){
    if(i!==arr1[j]){
        missingnumber.push(i)
    }
    else{
        j++
    }
}
console.log(missingnumber);


// 3. Find the longest word in a given array.

var arr2=["swetha","gnaneshwari","bhimari","karimnagar","telangana"]
let largest=arr2[0]
for(i=1;i<arr2.length;i++){
    if(arr2[i].length > largest.length){
        largest=arr2[i]
    }
}
console.log(largest);