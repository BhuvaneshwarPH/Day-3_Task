let obj1={
    name:"person 1",
    age:5
};
const key1= Object.keys(obj1).sort();
console.log(key1);


let obj2={
    age:5,
    name:"person 1"
};
const key2 =Object.keys(obj2).sort();
console.log(key2);


if(JSON.stringify(key1)===JSON.stringify(key2))
{
    console.log("Equal")
}
else{
    console.log("not equal")
}