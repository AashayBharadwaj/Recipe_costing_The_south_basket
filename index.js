var readlineSync = require('readline-sync');
var input_batter = readlineSync.question("Choose a batter?")
var input_quantity = readlineSync.question("Choose the quantity of the batter")


var items = [
    {
      batter_name:"dosa_batter",
      dosaRice:400,
      redRice:300,
      uradDal:250,
      sabudana:400,
      methiSeeds:300,
      channaDal:240,
      poha:240,
      water:250
          },
    
    { 
      batter_name: "idli_batter ",
      idliRice:400,
      uradDal:250,
      nylonSabudana:400,
      poha:240,
      water:250
    },

    {
      batter_name:"pessarattu_batter",
      idliRice:400,
      uradDal:250,
      nylonSabudana:400,
      poha:240,
      water:250
    },

    {
      batter_name:"adai_batter",
      idliRice:400,
      uradDal:250,
      nylonSabudana:400,
      poha:240,
      water:25000
      }
  ]


    for(i=0; i<items.length; i++)
    {
     var currentBatter=(items[i].batter_name)
      if(currentBatter == input_batter)
        {
          // key_1=items[i].uradDal
          // updated_quantity=key_1*3
          var ingredients=Object.keys(items[i])
          console.log(ingredients)

          var quantities=Object.values(items[i])
          // console.log(quantities)

          for (j=0;j<quantities.length;j++)
          {
            var new_quantity = quantities[j]*input_quantity
            console.log(new_quantity)
          }
          

          // console.log(items[i])
          // console.log(items[i].poha)

          }
      
    }







// let a = {x: 200, y: 1, z:0,k:4}
// let attributes = Object.keys(a)
// console.log(attributes)
// console.log(a.x)


// for (i=0;i<attributes.length;i++)
// {
//   current_value=(attributes[i])
//   console.log(current_value)
//   console.log(a.current_value) 
  
// }


    
    



