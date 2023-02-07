function displayPetCarousel(){
    const carousel = document.getElementById("carousel-start");
    let i=0;
    for(const elements of petSalon.pets){
        if(i==0){
            carousel.innerHTML=`
            <div class="carousel-item active">
                <div class="card d-block">
                  <img src="../images/logo.png" alt="logo">
                  <div class="pet-item">
                    <p id="name">Name: ${elements.name}</p>
                    <p>Age: ${elements.age}</p>
                    <p>Gender: ${elements.gender}</p>
                    <p>Type: ${elements.type}</p>
                    <p>Breed: ${elements.breed}</p>
                    <p>Service: ${elements.service}</p>
                    <p>Owner: ${elements.owner}</p>
                    <p>Phone: ${elements.phone}</p>
                  </div>
                </div>
            </div>
            `;
        }else{
            carousel.innerHTML+=`
            <div class="carousel-item">
                <div class="card d-block">
                  <img src="../images/logo.png" alt="logo">
                  <div class="pet-item">
                    <p id="name">Name: ${elements.name}</p>
                    <p>Age: ${elements.age}</p>
                    <p>Gender: ${elements.gender}</p>
                    <p>Type: ${elements.type}</p>
                    <p>Breed: ${elements.breed}</p>
                    <p>Service: ${elements.service}</p>
                    <p>Owner: ${elements.owner}</p>
                    <p>Phone: ${elements.phone}</p>
                  </div>
                </div>
            </div>
            `;
        }
        i++;
    }
}