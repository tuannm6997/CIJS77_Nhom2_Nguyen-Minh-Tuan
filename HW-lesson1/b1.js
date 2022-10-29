a = [1,6,6,2,3,4,4,5]
let count =0
const map  = new Map()
for(let i = 0;i <a.length;i++ ){
    
    if(map.has(a[i])==false){
        count = count +1
        map.set(a[i],i)
    }
}
console.log(count)