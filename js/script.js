// // Reference messages collection 
// var messageRef = firebase.database().ref('messages');

// // Listen for the submission of the contact form 
// document.getElementById('contactform').addEventListener('submit', 
// submitform)
 
// // Submit form
// function submitform(event){
//     event.preventDefault();

//     // Get values
//     var name = getInputVal('name');
//     var email = getInputVal('email');
//     var subject = getInputVal('subject');
//     var message = getInputVal('message'); 

//     // Save message
//     saveMessage(name, email, subject, message);

//     console.log(name)

// }

// // A function to get form values
// function getInputVal(id){
//     return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, email, subject, message){
//     var newMessageRef = messageRef.push();
//     newMessageRef.set({
//         name:name,
//         email:email,
//         subject:subject,
//         message:message
//     });
// }


