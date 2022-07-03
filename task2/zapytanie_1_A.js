db.people.aggregate([{ $group: {
  _id: "$sex", 
  avg_weight:{$avg:"$weight"},
  avg_height:{$avg:"$height"} 
}},{$project: {avg_weight:1, avg_height:1 }} ]);
