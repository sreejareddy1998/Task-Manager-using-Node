// we are setting up schema
const mongoose=require('mongoose');

const TaskSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'must provide name'],
        trim:true,
        maxlength:[20, 'Name cannot be more than 20 characters']
    }, completed:
    {
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task', TaskSchema);