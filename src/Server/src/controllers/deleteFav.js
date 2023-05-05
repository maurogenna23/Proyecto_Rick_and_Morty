const {Favorite} = require('../models/Favorite');

const deleteFav = async (req, res)=>{
    const {id} = req.params;
    
    try {
        deleteFav.findByIdAndRemove(id, (err)=>{
        if(err){
            res.status(400).send({message: 'Error al eliminar favorito'});
        }else{
            res.status(200).json({Favorite});
        }
    })}
    catch(err){
            res.status(500).send({message: err});
        }
}

module.exports = deleteFav;