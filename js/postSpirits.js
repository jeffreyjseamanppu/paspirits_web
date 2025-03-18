const formEl = document.querySelector('.form'); //gets the form made on customerAdd.html page which includes the new customer order information

formEl.addEventListener('submit', event => { //listens for the submit button
    event.preventDefault();
    const formData = new FormData(formEl); //puts formEl into a formData constructor
    const data = Object.fromEntries(formData); //creates list of key-value pairs into an object(this keeps the header and data together Ex: firstname: Ethan)
   
    //Check to make sure that each field is filled in and that all the data was saved. If not then it throws an error
    if(data.name == "" || data.city == "" || data.state == "" || data.type == "" ){
        $.toaster({ priority :'danger', title :'Error', message :'Oops something went wrong and did not save'});
    }


    //gets the database and creates a post to add the new customer order to the database
    else {
        fetch('https://paspirits-app.onrender.com/api/accounts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .then(error => console.log(error))
      $.toaster({ priority :'success', title :'Spirits', message :'New Spirit Added'})
      //.catch(error => $.toaster({ priority :'danger', title :'Error', message :'Oops something went wrong and did not save'}))
    }
    
});