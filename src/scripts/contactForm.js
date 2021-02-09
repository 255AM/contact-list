const contentTarget = document.querySelector(".contacts-form-container")

export const contactForm = () => {
    contentTarget.innerHTML = `
    <label for='name'>Name</label>
        <input type="text" name='name' id="name">
        <label for='number'>Number</label>
        <input type="text" id="number">
        <label for='address'>Address</label>
        <input type="text" id="address">

        <button type='button' id="saveContact" >Save Contact</button>
`
}

export const deleteForm = () =>{
    document.querySelector('.contacts-delete-form-container').innerHTML=`
    <label for='deletenumber'>Contact ID to Delete</label>
        <input type="text" id="deleteNumber">
    <button type='button' id="deleteContact" >Delete Contact</button>
    
    `
}