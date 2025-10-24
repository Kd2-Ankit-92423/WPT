const character = [{
    name: "Victor Von Weise",
    age: 18,
    job: "Fate Wiever",
    fate: "Unknown"
},
{
    name: "Lily Von Krone",
    age: 18,
    job: "Timeless Crow",
    fate: "X(heroic)"
}]

function Character(){
/*    return <div>
        <div><h2>Novel Characters</h2></div>
        <div>Name: {character[0].name}</div>
        <div>Age: {character[0].age}</div>
        <div>Job: {character[0].job}</div>
        <div>Fate: {character[0].fate}</div>
        <hr/>
        <div>Name: {character[1].name}</div>
        <div>age: {character[1].age}</div>
        <div>Job: {character[1].job}</div>
        <div>Fate: {character[1].fate}</div>
    </div> */
    return <div>
        {
            character.map((c)=>
            <div>
                <div>Name: {c.name}</div>
                <div>Age: {c.age}</div>
                <div>Job: {c.job}</div>
                <div>Fate: {c.fate}</div>
                <hr/>
            </div>
            )
        }
    </div>
}

export default Character