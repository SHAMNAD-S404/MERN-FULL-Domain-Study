
 function registerUser (name,clalback){

    setTimeout(() => {

        console.log('user registered for :',name);
        clalback(name)
        
    }, 1000);
 }

 function authenticate(user,callback){

    setTimeout(() => {
        console.log('authentication for : ',user ,  ' success');
        callback(user)
    }, 1000);
 }

 function fetchProfile(name,callback){

    setTimeout(()=>{
        console.log(`profile is fetching for ${name}`);
        callback({username:name,age:24})
    })
 }


 registerUser('adil',(user) => {
    authenticate(user,(auth) =>{
        fetchProfile(auth,(profile) => {
            console.table(profile);
            
        })
    })
 })

