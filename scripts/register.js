//object literal
let petSalon = {
    name:"The Fashion Pet",
    phone:"555-555-555",
    workingHours:{
        open:"9:00 am",
        close:"9:00 pm"
    },
    address:{
        street:"Palm Ave",
        zip:"22345",
        city:"San Diego"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming"
        },
        {
            name:"Brownie",
            age:10,
            gender:"Male",
            breed:"Chihuahua",
            service:"Cutting"
        },
        {
            name:"Drako",
            age:9,
            gender:"Male",
            breed:"Golden Retriever",
            service:"Full"
        }
    ]
};


function displayFooterInfo(){
    let item = `
    <div class="footer-info">
    <p>${petSalon.name} it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}</p>
    <p>${petSalon.address.street}, ${petSalon.address.city}, ${petSalon.address.zip}</p>
    </div>
    `;
    document.getElementById("footer").innerHTML=item;
}

function displayPets(){
    alert(`The salon actually have: ${petSalon.pets.length} pets`);
}

function displayPetsNames(){
    for (const elements of petSalon.pets) {
        console.log(elements.name);
    }
}

displayFooterInfo();