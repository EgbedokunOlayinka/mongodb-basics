exports.insertDocs = function(db) {
  db.createCollection("myMovies", (err, res) => {
    if (err) throw err;

    let myObj = [
      { movie: "The Banker", year: "2020", rating: 8 },
      { movie: "Bad Boys", year: "2020", rating: 7 },
      { movie: "The Hunt", year: "2020", rating: 7 },
      { movie: "The Bloodshot", year: "2020", rating: 7.5 },
      { movie: "First Cow", year: "2020", rating: 6.5 }
    ];

    let collection = db.collection('myMovies');
    collection.insertMany(myObj, (err,res)=>{
      if (err) throw err;
      console.log(`${res.insertedCount} documents inserted`);
      console.log(res);
    })

    
  });
};
