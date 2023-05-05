const {Favorite} = require('../models/Favorite')

const postFav = (req, res) => {
    const { name, origin, status, image, species, gender } = req.body;

    try {if(!name || !origin || !status || !image || !species || !gender){
        return res.status(401).json({error: 'Faltan datos'})
    }
    const favorite = new Favorite({name, origin, status, image, species, gender})
    res.status(200).json({favorite})
}
    
    catch(error){
        return res.status(500).json({error: error})
    }
}

module.exports = postFav;