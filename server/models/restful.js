var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var petSchema=new mongoose.Schema({
    name:{ type:String, uniqueCaseInsensitive:true,required:[true,'Name is required'],minlength:[3,'Name is too short(minimum no. of characters id:3)']},
    type:{type:String, required:[true,'Type is required'],minlength:[3,'Type is too short(minimum no. of characters is:3)']},
    description:{type:String, required:[true,'Type is required'],minlength:[3,'Description is too short(minimum no. of characters is:3)']},
    skillone:{type:String},
    skilltwo:{type:String},
    skillthree:{type:String},
    likes:{type:Number,default:0},

},{timestamps:true});

petSchema.plugin(uniqueValidator, { type: 'Names have to be unique' });
    
mongoose.model('Pets',petSchema);
