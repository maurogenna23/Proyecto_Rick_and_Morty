const {User} = require('../DB_connection');

const postUser = async (req, res) => {
    const{email, password} = req.body;
    try {
        if(!email  || !password ){
            return res.status(400).json({message:"Faltan datos"});
        }
        const newUSer = await User.create({email: email, password: password})
        res.status(200).json({newUSer});
    } catch (error) {
        return res.status(500).json({error: error})
    }
}

module.exports = postUser;