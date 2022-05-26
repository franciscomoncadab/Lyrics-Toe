import User from '../models/User.js'
import generateId from '../helpers/generarId.js'
import generateJWT from '../helpers/generateJWT.js'

const registerUser = async (req, res) => {
     const { email } = req.body
     const userExists = await User.findOne({ email })

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

     const { email, password } = req.body

     const user = await User.findOne({ email })
     if (!user) {
          const err = new Error(`User don't exist`)
          return res.status(404).json({ msg: err.message })
     }

     if (!user.confirm) {
          const err = new Error(`Your account is not confirmed`)
          return res.status(403).json({ msg: err.message })
     }

     if (await user.passwordIsCorrect(password)) {
          res.json({
              _id: user._id,
              nombre: user.nombre,
              email: user.email,
              token : generateJWT(user._id)
          })
     } else {
          const err = new Error(`Your password is incorrect`)
          return res.status(403).json({ msg: err.message })
     }
    
}

const confirm = async (req, res) => {
     const {token} = req.params
     const userConfirm = await User.findOne({ token });
     if(!userConfirm) {
          const err = new Error(`Invalid token`)
          return res.status(403).json({ msg: err.message })
     }

     try  {
          userConfirm.confirm = true
          userConfirm.token = '';
          await userConfirm.save();
          res.json({ msg: 'User successfully confirmed'})
          console.log(userConfirm);

     } catch (err) {
          console.log(err)

     }
}

const forgotPassword = async (req, res) => {
     const { email } = req.body
     const user = await User.findOne({ email })
     if (!user) {
          const err = new Error(`User don't exist`)
          return res.status(404).json({ msg: err.message })
     }

     try {
          user.token = generateId()
          await user.save()
          res.json({ msg: 'Check your email'})
     } catch (err) {
          console.log(err)  
     }
}

const verifyToken = async (req, res) => {
     const {token} = req.params;

     const tokenValidate = await User.findOne({token})
     if (tokenValidate) {
          res.json({ msg: 'Token validation successful'})
     } else {
          const err = new Error(`Invalid token`)
          return res.status(404).json({ msg: err.message })
     }
}

const newPassword = async (req, res) => {
     const {token} = req.params
     const {password} = req.body

     const user = await User.findOne({token})
     if (user) {
          user.password = password;
          user.token = '';
          try {
               await user.save()
               res.json({msg: 'Your password has been changed'})
          } catch (err) {
               console.log(err)  
          }

     } else {
          const err = new Error(`Invalid token`)
          return res.status(404).json({ msg: err.message })
     }
}

const profile = async (req, res) => {
     const { user } = req

     res.json({ user })
}

export {
     registerUser,
     authLoginUser,
     confirm,
     forgotPassword,
     verifyToken,
     newPassword,
     profile
}    