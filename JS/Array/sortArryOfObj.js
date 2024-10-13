
//? SORT ARRAY OF OBJECTS IN ASCENDING


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];


  //*   method one

  const sort1 = cars.sort((a,b) => a.type.localeCompare(b.type))
  console.log(sort1);

  //* method two

  const sort2 = cars.sort((a,b) => {

    if(a.type < b.type) return -1;
    if(a.type > b.type) return  1;
    return 0;
  })
  

   