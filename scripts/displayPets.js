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

function displayPetCards(){
  const DIV = document.getElementById("pets");
  let card="";
  for(const elements of petSalon.pets){
    card+=`
      <div class="pet">
        <h5>${elements.name}</h5>
        <p>Age: ${elements.age}</p>
        <p>Service: ${elements.service}</p>
      </div>
    `;
  }
  DIV.innerHTML=card;
}

function displayPetTable(){
  // GET AN ELEMENT FROM THE DOM
  const tbody = document.getElementById("pets-body");
  let rows = "";

  for (const item of petSalon.pets) {
    rows+=`
    <tr>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.gender}</td>
      <td>${item.breed}</td>
      <td>${item.service}</td>
      <td>${item.type}</td>
      <td>${item.owner}</td>
      <td>${item.phone}</td>
      <td><button class="btn btn-sm btn-outline-danger" onclick="deletePet('${item.name}')">Remove</button></td>
    </tr>`;
  }
  tbody.innerHTML = rows;
}