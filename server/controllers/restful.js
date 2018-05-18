var mongoose=require('mongoose');
var Pets=mongoose.model('Pets');

function petss(){

this.index=function(req,res){
    Pets.find({},function(err, pets) {
        if(err) {
            console.log(err);
            res.json({message:'error',data:err});
        }
        res.json({message:'success',data:pets});
    }).sort({type:1});
  
}


this.createnew=function(req,res){
        console.log("Adding a new pet with the following details");
        console.log(req.body);

        Pets.findOne({name:req.body.name},function(err,val){
            console.log("I was here");
            if(val==null){
                var pet_new=new Pets({name:req.body.name,type:req.body.type,description:req.body.description,skillone:req.body.skillone,skilltwo:req.body.skilltwo,skillthree:req.body.skillthree});
                    pet_new.save(function(err,pet){
                        if(err)
                        {
                            console.log('error');
                            res.json({message:'error',data:err})
                        }
                        else
                        {
                            console.log('Succesfully added a new pet');
                            res.json({message:'success',data:pet});
                        }
                    });

            }
            else{
                console.log("Pet exists")
                res.json({message:'unique error',data:{message:'Name Already exists in the Database'}})
            
            }
        })
       
    
}



this.destroy=function(req,res){
    console.log("Imma delete you");
    Pets.findOneAndRemove({_id:req.params.id},function(err,desc){
        if(err)
        {
            console.log('error');
            res.json({message:'error',data:err})
        }
        else
        {
            console.log('Succesfully deleted a pet');
            res.json({message:'success',data:desc})
        }

    })
}

this.getPet= function(req, res) {
    console.log("Getting a pet",req.params.id);
    Pets.find({_id: req.params.id}, function(err, results){
        if(err)
        {
            res.json({message:'error',error:err})
        }
        else
        {
            console.log('Succesfully Got one');
            res.json({message:'success',data:results})
        }
    });
}

this.editPets=function(req,res){
    console.log(req.body);
    Pets.update({_id:req.params.id},{$set:{'name':req.body.name,'type':req.body.type,'description':req.body.description,'skillone':req.body.skillone,'skilltwo':req.body.skilltwo,'skillthree':req.body.skillthree}},function(err,pet){
        if(err){
            console.log("error");
            res.json({message:'error',error:err})
        }
        else{
            console.log("Successfully edited stuff",pet);
            res.json({message:'success',data:pet});
        }
    })
}


this.likes=function(req,res){
    console.log("Liking this pet",req.params.id,req.body.data);

    Pets.update({_id:req.params.id},{$set:{'likes':req.body.data}},function(err,upd){
        if(err){
            console.log("error");
            res.json({message:'error',error:err})
        }
        else{
            console.log("Successfully edited stuff",upd);
            res.json({message:'success',data:upd});
        }

    })
}

}

module.exports=new petss();