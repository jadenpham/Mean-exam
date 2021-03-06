var mongoose=require('mongoose');

Pets = mongoose.model("Pets");

module.exports = {
    create: (req,res) =>{
        console.log(req.body);
        Pets.create(req.body, function(err, pet){
            if(err){
                res.json({message: "Error", error: err})
            } else{
                // console.log("added succesfully");
                // console.log(pet, "pet at controller");
                res.json({message:"Succesful", pet:pet});
            }
        })
    },
    all_pets: (req ,res) =>{
        Pets.find({}, function(err, pet){
            if(err){
                res.json(err);
            } else{
                res.json(pet);
            }
        })
    },
    one_pet: (req, res) =>{
        Pets.findOne({_id: req.params.id}, (err, pet)=>{
            if(err){
                res.json(err);
            } else{
                // console.log("got the data");
                res.json(pet);
            }
        })
    },
    edit: (req, res) =>{
        Pets.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, context: 'query'}, (err, pet)=>{
            if(err){
                res.json({message:"Error", error: err});
            } else{
                res.json({message:"Success", pet: pet});
            }
        })
    },
    delete: (req,res) =>{
        Pets.remove({_id: req.params.id}, (err, pet) =>{
            if(err){
                res.json(err);
            } else{
                res.json(pet);
            }
        })
    }
}