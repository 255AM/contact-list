let contacts = []
//getContacts from local json api server
export const getContacts = () => {
    return fetch('http://localhost:8088/contacts')
        .then(response => response.json())
        .then(parsedContacts => {
            contacts = parsedContacts
            console.log(contacts);
        })
}
//save a contact to a local json api server
export const saveContact = contact => {
    return fetch('http://localhost:8088/contacts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
}
//delete an item form an api
export function deleteData(item, url) {
  return fetch(url + '/' + item, {
    method: 'delete'
  })
  .then(response => response.json());
}

export const useContacts = () => {
    return contacts.slice()
}
