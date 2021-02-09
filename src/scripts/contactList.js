import {saveContact, useContacts, getContacts, deleteData } from "./contactDataProvider.js";
import { contactObject } from "./contact.js";

export const contactList = () => {
    //targetElement.innerHTML = ""
    let stringOfContacts = ''
    //call fx to return data from api
    getContacts()
    //instruct program to wait until dat is returned
    .then(() => {
        const contacts = useContacts()
            contacts.map(element => {
                document.querySelector('.contacts-container').innerHTML += contactObject(element)
            });
            console.log(contacts);
    })        
}
        
let eventHub = document.querySelector('body')
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "saveContact") {
        console.log(clickEvent);
        // Make a new object representation of a note
        const newContact = {
            // Key/value pairs here
            name:document.querySelector("#name").value,
            number:document.querySelector("#number").value,
            address:document.querySelector("#address").value
        }
        
        // Change API state and application state
        saveContact(newContact)
        .then(contactList) // Refresh your list of notes once you've saved your new one
    }
    //noteForm()
})

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "deleteContact") {
        console.log(clickEvent);
        // Make a new object representation of a note
        deleteData(document.querySelector("#deleteNumber").value, 'http://localhost:8088/contacts')
    //noteForm()
}
})
     