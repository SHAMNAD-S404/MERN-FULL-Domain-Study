 //* COUNT THE VOWELS IN THE STRING "hello world"


 const vowels = ['a','e','i','o','u'];
 
 function count(str){
   
   let counts = 0;
   
   for(const char of str ){
     
     if(vowels.includes(char)){
       counts++
     }
   }
   
   return counts;
 }
 
 const str = "hello world"
 console.log(count(str))
