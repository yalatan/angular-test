const mongoose = require('mongoose');

const user = new mongoose.Schema({
   firstname: {
       type: String,
    //    required: true
   },
   lastname: {
    type: String,
    // required: true
},
//    birthday: String,
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     city: String,
//     adress: String,
//     vehicle: Boolean,
//     vehicleInfo: {
//         brand: String,
//         model: String,
//         year: String,
//         color: String,
//     },
//     date:{
//         type: Date,
//         default: Date.now 
//     }  

});


// const UserSchema = mongoose.Schema({
//     firstname: {
//         type: String,
//         required: true
//     },
//     lastname: {
//      type: String,
//      required: true
//  },
//      email: {
//          type: String,
//          required: true
//      },

//      date:{
//          type: Date,
//          default: Date.now 
//      }  
 
//  });

module.exports = mongoose.model('UserPost', user);