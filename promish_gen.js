// document.querySelector("#clickPromish").addEventListener('click',function (event) {
// 	const response = promiseRequest();
// 	response
// 	.then(function(value){
// 		console.log('response :',+value);
// 	})
// 	.catch(function(error){
// 		console.log("some Error is occured....")
// 	});
// });

document.querySelector("#clickPromish").addEventListener('click', function(event) {
    const response = window.fetch('http://127.0.0.1:8080/data.json');
    response
        .then(function(getResponse) {
        	console.log('getResponse',getResponse);
            return getResponse.json();
        }).then(function(responseObj) {
        	console.log("response Object: ",responseObj.people);
        	document.querySelector('#container').innerHTML += `<p>${responseObj.people[0].name}</p>`;
        });

});