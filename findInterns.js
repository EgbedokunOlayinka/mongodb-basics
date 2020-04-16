exports.findDoc = function(db) {
    let collection = db.collection('myMovies');
    let query = { rating: 7 };
    collection.findOne({}, (err,res)=>{
        if(err) throw err;
        console.log(res);
    })

    collection.find(query).toArray((err,res)=>{
        if (err) throw err;
        console.log(res);
    }) 

    collection.find({}, { projection: { _id:0, movie:1 }}).toArray((err,res)=> {
        if(err) throw err;
        console.log(res);
    })
}