const resources = ["people1.json", "people2.json", "people3.json", "people4.json", "people5.json"];
const url = "http://127.0.0.1:8080/";


function displayData() {

    document.querySelector('#displayBtn').addEventListener('click', function(event) {
        const resolvedPromise = new Promise(function(resolve, reject) { return resolve(); });
        const promises = responses(url, resources);
        // const firstPromise = promises[0];
        // const restPromises = promises.slice(1, promises.length);
        promises.push(resolvedPromise);
        // console.log(content);
        console.log('promises', promises.length);
        promises.reduce(function(chain, currentPromise) {
            // console.log('chain', chain);
            console.log('currentPromise', currentPromise);
            return chain.then(function(result) {
                // console.log('result');
                const jsonPromise = result.json();
                // console.log('jsonPromise', jsonPromise);
                jsonPromise.then(function(peopleObj) {
                    // console.log('peopleObj:', peopleObj.address);
                    el('#container').innerHTML += `<p>name: ${peopleObj.name} | address: ${peopleObj.address}</p>`;
                });
                // console.log('content',jsonObj);

                return currentPromise;
            });
        },);
    });
}


function el(element) {
    return document.querySelector(element);
};

function responses(url, resources) {
    return resources.map(function(item) {
        return window.fetch(url + item);
    });
};


// console.log('promises', promises);

displayData();