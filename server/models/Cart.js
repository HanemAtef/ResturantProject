const mongoose = require ("mongoose");
const CartSchema = new mongoose.Schema(
{
   userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
   },

   meal:[
      {
         mealId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product"
         },

         quantity:{
            type:Number,
           
         },
        title: {
        type: String,
        required: true
        },
       image: {
        type: String,
        required: true,
        },
          price: {
        type: Number,
        required: true,
        }
      }
   ],

   totalPrice:{ 
    type : Number 
   }
});
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart; 