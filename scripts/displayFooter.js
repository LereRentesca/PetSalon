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

function initFooter(){
    displayFooterInfo();
}
window.onload=initFooter;