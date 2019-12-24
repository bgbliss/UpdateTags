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
    let getTags = await getId(id);
    if(getTags){
        console.log(`========================================
        \nCurrent Tags: 
        \n${getTags.tags} 
        \n========================================`)
        RemoveTags(getTags.tags)
    }
    else
    {
        console.log("you need to provide a vaild id")
        getUserId()
    }
}
getUserId()

RemoveTags = (tags) =>{
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to remove any of the tags",
            name: "input"      
        }
    ]).then((answer)=>{
        //console.log(answer)
    })
}