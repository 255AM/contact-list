
export const contactObject = (current) => {
    
    return `
        
            <div class='col-md-3 card mb-4 bg-light'> 
                <h5>Name: ${current.name}</h5>
                <h6>Number: ${current.number}</h6>
                <h6>Address: ${current.address}</h6>
            </div>
        
    `
}
