const fetch = require("node-fetch");
function someFun(){
fetch("https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien").then((r)=>r.json()).then((r)=>{
    console.log(r)
})
}
arr=['a','b','c','d']
newArr=arr.filter((m)=>{
    if(m!='a'&&m!='c')
    return m;
})
console.log(newArr)
arr1=['a','b','c','d','e','f']
arr1.splice(2,3)
console.log(arr1)