import User from '../models/User.js'

const registerUser = async (req, res) => {
     const { email } = req.body
     const userExists = await User.findOne({ email})

     if (userExists) {
          const error = new Error('Usuario Registrado');
          return res.status(400).json({ msg: error.message})
     }
     try {
          const user = new User(req.body)
          const userId = await user.save()
          res.json(userId)
     } catch (err) {
          console.log({err: err.message})

     }
     
};

export {
     registerUser,    
}    