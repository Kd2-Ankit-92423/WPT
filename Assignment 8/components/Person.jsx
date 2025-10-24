const person = {
    name: "Ankit",
    age: 23,
    address: 'New Delhi',
    email: 'Arkkseies967@gmail.com'
}

function Person(){
    return <>
    <h3>Name: {person.name}</h3>
    <h3>Age: {person.age}</h3>
    <h3>Address: {person.address}</h3>
    <h3>Email: {person.email}</h3>
    </>
}

export default Person