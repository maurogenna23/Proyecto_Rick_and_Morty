let myFavorites = [];

 const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character);
    res.json(myFavorites);
}

const deleteFav = (req, res) => {
    const favId = req.params.id;
    myFavorites = myFavorites.filter(fav => fav.id !== favId);
    res.json(myFavorites);
}

module.exports =  postFav, deleteFav ;
