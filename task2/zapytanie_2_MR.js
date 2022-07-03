let mapFunc = function () { this.credit.forEach( val => {
      emit(val.currency, val.balance);
    });}
    
let reduceFunc = function(key, val ){ return Array.sum(val};

db.people.mapReduce( mapFunc, reduceFunc, {out: 'currency_sum'} )  ; 
