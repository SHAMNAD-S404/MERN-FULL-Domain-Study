
//? difference bw set and weak set

 let obj = {name:"abhin"}

 const set = new Set()
 const weakset = new Set()

 set.add(obj)
 weakset.add(obj)

 obj = null

 console.log(weakset.has(obj));
 console.log(set.has(obj));

 const adil = set.entries()

 for(const [val,ele] of adil){
    console.log('namee:',val,'vays:::::',ele);
    
 }
 
 
 