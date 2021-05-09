var readlineSync = require('readline-sync');

var recipe_names=["dosa_batter","idli_batter","adai_batter","pessarattu_batter"]
console.log(recipe_names)

var input_batter = readlineSync.question("Choose an item from the above list?")


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





