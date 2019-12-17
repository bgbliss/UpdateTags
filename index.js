var inquirer = require('inquirer');
const getId = require('./get');

getUserId = () =>{
    inquirer.prompt([
        {
            type: "input",
            message: "what is the Product id?",
            name: "productID",
            validate: function(input){
                var done = this.async();
                if(input.toLowerCase().match(/[a-z]/i) || input.length > 20 || input.length < 3){
                    done("you need to provide a vaild id")
                    return;
                }
                else
                {
                    done(null, true);
                }
            }
        }
    ]).then((answer)=>{
        vailidateId(answer.productID)
    })
}

vailidateId =  async (id)=>{
    let get = await getId(id);
    if(get){
        console.log(`========================================
        \nCurrent Tags: 
        \n${get.tags} 
        \n========================================`)
    }
    else
    {
        console.log("you need to provide a vaild id")
        getUserId()
    }
}
getUserId()