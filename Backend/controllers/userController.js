import User from '../models/User.js'
import generateId from '../helpers/generarId.js'

const registerUser = async (req, res) => {
     const { email } = req.body
     const userExists = await User.findOne({ email})

     if (userExists) {
          const error = new Error('Usuario Registrado');
          return res.status(400).json({ msg: error.message})
     }
     try {
          const user = new User(req.body)
          user.token = generateId();
          const saveUser = await user.save()
          res.json(saveUser)
     } catch (err) {
          console.log({err: err.message})

     }
     
};

const authLoginUser = async (req, res) => {

     
}

export {
     registerUser,
     authLoginUser,    
}    