// function Book(props) {
//     return <div style = {{
//         border : "2 px green",
//         padding: "5px",
//         marhin: "5px",
//         display: "inline-block",
//         backgroundColor: "aquamarine"
//     }}>
//         <div>Title: {props.title}</div>
//         <div>Author: {props.author}</div>
//         <div>Category: {props.category}</div>
//         <div>Price: Rs. {props.price}/-</div>
//     </div>
// }
// function Book(props) {
//     return <div style={{
//         border : "2 px green",
//         padding: "5px",
//         marhin: "5px",
//         display: "inline-block",
//         backgroundColor: "aquamarine"
//     }}>
//         <div>Title: {title}</div>
//         <div>Author: {author}</div>
//         <div>Category: {category}</div>
//         <div>Price: Rs. {price}/-</div>
//     </div>
// }

// function Book({title, author, category, price, }) {
//     return <div style={{
//         border : "2 px green",
//         padding: "5px",
//         margin: "5px",
//         display: "inline-block",
//         backgroundColor: "slategray",
//         boxShadow: '2px 2px 5px gray'
        
//     }}>
//         <div>Title: {title}</div>
//         <div>Author: {author}</div>
//         <div>Category: {category}</div>
//         <div>Price: Rs. {price}/-</div>
//     </div>
// }


function Book({ srno, title, author, category, price, baseImageURL }) {
    const imageUrl = `${baseImageURL}book${srno}.webp`;
    return (
        <div style={{
            border: "2px solid black",
            padding: "15px",
            margin: "15px",
            display: "flex", 
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "whitesmoke",
            color: "black",
            width: "200px",
            fontFamily: "Arial, sans-serif",
            textAlign: "center"
        }}>
            <img
                src={imageUrl}
                alt={`Cover for ${title}`}
                style={{
                    width: "120px", 
                    height: "180px",
                    borderRadius: "4px",
                    marginBottom: "10px", 

                }}
            />
            <h3 style={{margin: "5px 0", fontSize: "12" }}>{title}</h3>
            <p style={{margin: "2px 0", fontSize: "10", color: "black" }}>By: {author}</p>
            <p style={{margin: "2px 0", fontSize: "9" }}>Category: {category}</p>
            <p style={{margin: "5px 0", fontSize: "10", fontWeight: "bold" }}>Price: Rs. {price}/-</p>
        </div>
    );
}

export default Book;