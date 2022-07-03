let mapFunc = function(){emit(this.sex, {count:1, weight : this.weight, height : this.height })},
let reduceFunc = function(key, val){	
reducedVal= { count: 0, height: 0, weight: 0};
 for (let i=0; i<val.length; i++) {
        reducedVal.count +=val[i].count;
        reducedVal.height+=val[i].height;
        reducedVal.weight+=val[i].weight;
    }
    return reducedVal;
} ;
let finalizeFunction = function (key, reducedVal) {
    reducedVal.avg1= reducedVal.height/reducedVal.count;
    reducedVal.avg2= reducedVal.weight/reducedVal.count;
    return reducedVal;};
db.people.mapReduce( mapFunc, reduceFunc, {out:"map_reduce_ex2", finalize : finalizeFunction});
    
    
