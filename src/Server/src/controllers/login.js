const {User} = require('../models/User');

const login = async (req, res) => {
    const {email, password} = req.query;

    try {if (!email || !password) {
        res.status(400).json({message:"Faltan datos"})
    }
    const user = await User.findOne({ email })
    if (!user) {
        res.status(400).json({message:"Usuario no encontrado"})
    }
    const isMatch = await User.compare(password, user.password)
    if (!isMatch) {
        res.status(403).json({message:"Contraseña incorrecta"})
    }
    res.status(200).json({  access: true })
}
    catch (error) {
            res.status(500).json({message:error})
        }

}

module.exports = login