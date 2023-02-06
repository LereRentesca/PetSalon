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
    pets:[]
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

function Pet(name,age,gender,type,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.type=type;
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
}

function displayPetsNames(){
    for (const elements of petSalon.pets) {
        console.log(elements.name);
    }
}

//Global vars for the html inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputMale = document.getElementById("gender-male");
let inputFemale = document.getElementById("gender-female");
let inputBreed = document.getElementById("pet-breed");
let inputService = document.getElementById("pet-services")
let inputType = document.getElementById("pet-type");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");
const radioButtons = document.querySelectorAll('input[name="options"]');
let btn = document.querySelector('#register-btn');

function chargeDogs(){
    console.log(inputType.value);
    switch(inputType.value){
        case "Dog":
            inputBreed.innerHTML=`
                <option value="default" selected disabled>Choose the breed</option>
                <option value="Dalmatian">Dalmatian</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Golden Retriever">Golden Retriever</option>
                <option value="Alaskan Malamute">Alaskan Malamute</option>
                <option value="American English Coonhound">American English Coonhound</option>
                <option value="Giant Schnauzer">Giant Schnauzer</option>
                <option value="Harrier">Harrier</option>
                <option value="Havanese">Havanese</option>
                <option value="Pug">Pug</option>
                <option value="Yorkshire Terrier">Yorkshire Terrier</option>
            `;
            break;
        case "Cat":
            inputBreed.innerHTML=`
                <option value="default" selected disabled>Choose the breed</option>
                <option value="Abyssinian Cat">Abyssinian Cat</option>
                <option value="American Bobtail Cat Breed">American Bobtail Cat Breed</option>
                <option value="Bombay Cat">Bombay Cat</option>
                <option value="Chartreux Cat Breed">Chartreux Cat Breed</option>
            `;
            break;
        case "Guinea Pig":
            inputBreed.innerHTML=`
                <option value="default" selected disabled>Choose the breed</option>
                <option value="Abyssinian Guinea Pig">Abyssinian Guinea Pig</option>
                <option value="Alpaca Guinea Pig">Alpaca Guinea Pig</option>
                <option value="American Guinea Pig">American Guinea Pig</option>
                <option value="Coronet Guinea Pig">Coronet Guinea Pig</option>
                <option value="Peruvian Guinea Pig">Peruvian Guinea Pig</option>
                <option value="Silkie Guinea Pig">Silkie Guinea Pig</option>
            `;
            break;
        case "Bird":
            inputBreed.innerHTML=`
                <option value="default" selected disabled>Choose the breed</option>
                <option value="Border Canary">Border Canary</option>
                <option value="Burrowing Owl">Burrowing Owl</option>
                <option value="Curl-crested Aracari">Curl-crested Aracari</option>
                <option value="Fischer’s Lovebird">Fischer’s Lovebird</option>
                <option value="Golden Eagle">Golden Eagle</option>
                <option value="House Finch">House Finch</option>
            `;
            break;
        default:
            inputBreed.innerHTML=`
                <option value="default" selected disabled>Choose the breed</option>
            `;
            break;
    }
}

function register(){
    if(inputName.value==""){
        alert("You have to enter a name")
    } else {
        console.log("Register a new pet");
        let selectedGender;
        for(const radioButton of radioButtons){
            if(radioButton.checked){
                selectedGender = radioButton.value;
                break;
            }
        }
        //create a new pet
        let newPet = new Pet(inputName.value,inputAge.value,selectedGender,inputType.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
        //display the pet on the console
        console.log(newPet);
        //push the pet into the array
        petSalon.pets.push(newPet);
        //display the number of registered pets
        clearForm();
        displayPets();
    }
}

function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputOwner.value="";
    inputPhone.value="";
    inputFemale.checked=true;
    inputBreed.value="default";
    inputBreed.innerHTML=`<option value="default" selected disabled>Choose the breed</option>`;
    inputService.value="default";
    inputType.value="default";
}

function init(){
    //events

    //call the functions

    //create obj
}
window.onload=init;