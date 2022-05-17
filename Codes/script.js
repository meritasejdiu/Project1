const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})

function displayN(){
    var name = document.getElementById('CustomerName').value;
    var dDate = document.getElementById('deliveryDate').value;
    var dTime = document.getElementById('deliveryTime').value;	
    var oPhone = document.getElementById('CustomerPhone').value;
    var oArea = document.getElementById('area').value;
    

    if(dDate ==  '' || dTime ==  '' || name ==  '' || oPhone ==  '' || oArea ==  '') {
        alert('The form has not been submited. Please fill the required(*) field');
        return;
    }
  

    document.getElementById('displayText').innerHTML = 'Hello ' + name + ', the form has been submited';
   

}

function displayM(){
    var cName = document.getElementById('contactName').value;
    var cPhone = document.getElementById('contacPhone').value;
    var cMsg = document.getElementById('contactMsg').value;


    if( cName ==  '' || cPhone ==  '' || cMsg ==  '') {
        alert('Sending message failed. Please fill the required(*) field, then click submit');
        return;
    }
    alert('Hello ' + cName + ', the message has been sent');
    

}

function displayX(){
    var rName = document.getElementById('rezName').value;
    var rLName = document.getElementById('rezLName').value;
    var rPhone = document.getElementById('rezPhone').value;
    var rNGuest = document.getElementById('rezNGuest').value;
    var rDate = document.getElementById('rezDate').value;
    var rTime = document.getElementById('rezTime').value;
    

    if( rName ==  '' || rLName ==  '' || rPhone ==  ''|| rNGuest ==  '' || rDate ==  '' || rTime ==  '') {
        document.getElementById('displayText2').innerHTML = 'Hello ' + rName + ', booking has failed';
        return;
    }
    document.getElementById('displayText2').innerHTML = 'Hello ' + rName + ', the reservation was completed successfully';
    

}