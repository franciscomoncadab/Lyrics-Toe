import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
     nombre: {
          type: 'string',
          required: true,
          trim: true,
     },

     password: {
          type: 'string',
          required: true,
          trim: true,
     },

     email: {
          type: 'string',
          required: true,
          trim: true,
          unique: true,
     },

     confirm: {
          type: 'boolean',
          default: false,
     },

     timestamp: true,

});

const User = mongoose.model('User', UserSchema)

export default User;