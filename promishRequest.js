function promiseRequest() {
    const promise = new Promise(function(resolve, reject) {
    	setTimeout(function(){
    		resolve(100);
    	},5000);
    });
    console.log(promise);
    return promise;
};