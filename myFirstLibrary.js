
//MAP: Produces a new array of values by mapping each value in list through a transformation function (iteratee). 
//If list is a JavaScript object, iteratee's arguments will be (value, key, list).

//REDUCE: Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. 
//The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
//If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.


var myLibrary = (function(){
  alert('hi')
  return {
	   map: function(list,iteratee) { 
		   var result = [];
		   for(var i in list) 
		   {
		   	result[i] = iteratee(list[i]);
		   }
		   return result;
	   }
	 //   return iteratee(list);
	 //   },
	 //   reduce: function(list,iteratee,[memo]) { 
	 //   //codes here
	 //   },
	 //   find: function() { 
	 //   //codes here
		// },
	 //   filter: function() { 
	 //   //codes here
		// },
	 //   reject: function() { 
	 //   //codes here}
  // 		}
  	}
}
 )();
//you just created a library with 5 methods!
//var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); //should return [2, 4, 6] after you finish implementing the codes above

