const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name:{
type:String,
required:[true, 'must provide name'],
trim:true,
maxlength:[20, 'name must not be more than 20 characters']
  },
  completed:{
type: Boolean,
// default:false

  },
  items:{
    type: Array,
    maxlength:[20, 'Array must not be more than 20 characters']
    
      },
      location:{
        type: String,
        maxlength:[20, 'location must not be more than 20 characters']
        
          },
          details :{
            type: String,
            maxlength:[20, 'location must not be more than 20 characters']
            
              },
      
  
});

module.exports = mongoose.model("Task", TaskSchema);
