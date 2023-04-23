const axios = require ("axios")
 
const URL = "https://rickandmortyapi.com/api/character/"


const getChardById = (req, res)=>{
    const {id} = req.params;
    try{
    axios.get(`${URL}${id}`)
    .then(({data})=>{
        if(data){
            const character = {
                id: data.id,
                status: data.status,
                name: data.name,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                gender: data.gender,
            };
            res.status(200).json(character);
        }else{ 
            res.status(404).json({message: "character not found"})
        }
    }); 
    }catch(error){
        res.status(500).json({message: error});
    }
}

module.exports = getChardById;