import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

     token: {
          type: String,
     },

     confirm: {
          type: Boolean,
          default: false,
     },
},
      {
        timestamps: true,
      }
);

UserSchema.pre('save', async function(next) {
     if(this.isModified('password')) {
          next();
     }
     const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('User', UserSchema)

export default User;