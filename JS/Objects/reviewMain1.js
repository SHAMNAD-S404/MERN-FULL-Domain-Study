//? REPLACE EVERY VALUES TO "SUDO" ;

const obj = {
    username: "apple",
    age: 44,
    admin: false,
    skills: ["css", "html", "js"],
    levels: [
      {
        css: "good",
        html: 99,
        js: true
      }
    ]
  };


  //* METHOD ONE USING STACK


  function changeStack(obj){

    const stack = [obj];

    while (stack.length > 0) {
        
        let current = stack.pop();

        for(const key in current){
            if (typeof current[key] === "object" && current[key]) {
                stack.push(current[key]);                
            } else {
                current[key] = "sudo"
            }
        }
    }


  }



  changeStack(obj)
  console.log(obj);


  //*  METHOD 2 USING RECURSION 

        
  function changeRecursion(obj){

    if (typeof obj === "object" && obj !== null) {
        
        for(const key in obj){

            if (typeof obj[key] === "object" && obj[key]) {
                changeRecursion(obj[key])
            } else {
                obj[key] = "apt update"
            }
        }
    }

  }



  changeRecursion(obj)
  console.log(obj);
  
  