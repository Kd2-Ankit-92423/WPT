import './personStyled.css'

const person = {
    name: "Ankit",
    age: 23,
    address: 'New Delhi',
    email: 'Arkkseies967@gmail.com'
}
const styles = { 
    info: {
        border: "2px red",
        padding: "4px",
        margin: "4px"
    },
    name: {
        fontWeight: "bold"
    },
    address:{
        fontStyle: "italic"
    }
}
function Person(){
    return <>
    <h2 style = {styles.info}>Person Info: </h2>
    <h3 style = {{color: 'red', backgroundColor: 'black', padding: "4px"}}>Name: {person.name}</h3>
    <h3>Age: {person.age}</h3>
    <h3 style ={styles.address}>Address: {person.address}</h3>
    <h3>Email: {person.email}</h3>
    </>
}

export default Person