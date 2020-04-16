exports.updateDoc = function(db) {
    let collection = db.collection('myMovies');
    let former = { movie: "Inception" };
    let latter = { $set: { movie: "Inception", year: "2020", rating: 9} };
    
    collection.updateOne(former,latter,(err,res)=>{
        if (err) throw err;
        console.log(res.result);
       
    })

    collection.find({}).toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
    })
}