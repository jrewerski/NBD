let mapFunc = function(){emit(this.job, 0)};

let reduceFunc = function(key, val ){
return 1;
};


db.people.mapReduce( mapFunc, reduceFunc, {out: 'job'} )  ; 
