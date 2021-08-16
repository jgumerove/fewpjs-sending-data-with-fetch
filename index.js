// Add your code here

function submitData(name, email){
    const formData = {
        name: name,
        email: email
    }

    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      }

   return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let h1 = document.createElement('h1');
    h1.innerHTML = object.id;
    document.body.appendChild(h1);
    console.log(object);
  })
  .catch(function(error) {
    let h2 = document.createElement('h2');
    h2.innerHTML = error.message;
    document.body.appendChild(h2);
    console.log(error.message);
})
};

submitData("Steve", "steve@steve.con");
