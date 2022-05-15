import User from '../models/User.js'

const registerUser = async (req, res) => {
     
     try {
          const user = new User(req.body)
          const userId = await user.save()
          res.json(userId)
     } catch (err) {
          console.log({err: err.message})

     }
     
}

export {
     registerUser,    
}    