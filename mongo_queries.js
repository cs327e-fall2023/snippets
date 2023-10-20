printjson("****************************************************************");
printjson("1) Number of documents in the restaurant collection");
printjson(db.restaurants.countDocuments())
                    
printjson("****************************************************************");
printjson("2) Find restaurants with name = Riviera Caterer, sort by cuisine");
printjson(db.restaurants.find({name: "Riviera Caterer"}, {name: 1, cuisine: 1, address: 1}).sort({cuisine: 1}));

printjson("****************************************************************");
printjson("3) Number of restaurants named Riviera Caterer");
printjson(db.restaurants.countDocuments({name: "Riviera Caterer"}))

printjson("****************************************************************");
printjson("4) Find restaurants with borough = Brooklyn and cuisine = American");
printjson(db.restaurants.find({borough: "Brooklyn", cuisine: "American"}, {name: 1, cuisine: 1, address: 1}).limit(1));

printjson("****************************************************************");
printjson("5) Find restaurants with address.zipcode = 11209");
printjson(db.restaurants.find({"address.zipcode": "11209"}, {name: 1, cuisine: 1, address: 1}).limit(1));

printjson("****************************************************************");
printjson("6) Find restaurants with borough = Brooklyn or cuisine = American");
printjson(db.restaurants.find({$or: [{borough: "Brooklyn"}, {cuisine: "American"}]}, {name: 1, cuisine: 1, address: 1}).limit(1));

printjson("****************************************************************");
printjson("7) Find restaurants with borough = Brooklyn and not cuisine = American");
printjson(db.restaurants.find({borough: "Brooklyn", cuisine: {$ne: "American"}}, {name: 1, cuisine: 1, address: 1}).limit(1));

printjson("****************************************************************");
printjson("8) Find restaurants with an array element score = 80");
printjson(db.restaurants.find({grades: {$elemMatch: {score: 80}}}, {grades: 1}).limit(1));

printjson("****************************************************************");
printjson("9) Find restaurants with an array element score between 70 and 80");
printjson(db.restaurants.find({grades: {$elemMatch: {score: {$gt: 70, $lt: 80}}}}, {grades: 1}).limit(1));

