function Book({srno, title, author, category, price}) {
    return <div style={{
        border: "1px solid black",
        padding: "4px",
        margin: "5px",
        display: "inline-block",
        backgroundColor: "beige",
        boxShadow: '2px 2px 5px gray'
    }}>
        <div><img src={`https://nilesh-g.github.io/learn-web/JS/images/webp/book${srno}.webp`} alt={title}/></div>
        <div>{title}</div>
        <div>{author}</div>
        <div>{category}</div>
        <div>{price}</div>
    </div>
}

export default Book;