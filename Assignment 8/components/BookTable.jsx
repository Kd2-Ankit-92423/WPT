const books = [
    {
        srno: 1,
        title: "Chhava",
        author: "Shivaji Sawant",
        category: "Historical",
        price: 450,
    },
    {
        srno: 2,
        title: "Mrityunjay",
        author: "Shivaji Sawant",
        category: "Historical",
        price: 500,
    },
    {
        srno: 3,
        title: "Yugandhar",
        author: "Shivaji Sawant",
        category: "Mythological",
        price: 550,
    },
    {
        srno: 4,
        title: "Shriman Yogi",
        author: "Ranjit Desai",
        category: "Historical",
        price: 480,
    },
    {
        srno: 5,
        title: "Batatyachi Chawl",
        author: "P. L. Deshpande",
        category: "Humor",
        price: 350,
    },
    {
        srno: 6,
        title: "Swami",
        author: "Ranjit Desai",
        category: "Historical",
        price: 400,
    },
    {
        srno: 7,
        title: "Pawankhind",
        author: "Ranjit Desai",
        category: "Historical",
        price: 420,
    },
    {
        srno: 8,
        title: "Raja Ravi Verma",
        author: "Ranjit Desai",
        category: "Biography",
        price: 380,
    },
    {
        srno: 9,
        title: "Yayati",
        author: "V. S. Khandekar",
        category: "Mythological",
        price: 430,
    },
];
const imageBaseUrl = "https://nilesh-g.github.io/learn-web/JS/images/webp/"

function BookTable(){
    return <table border={1}>
        <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
        </tr>   
        </thead>
        <tbody>
            {books.map((b) =>
            <tr>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.category}</td>
                <td>{b.price}</td>
                <td><img width = {100} alt = {"image"} src = {imageBaseUrl + "book" + b.srno + ".webp"} controls/></td>
            </tr>
                )}
        </tbody>
    </table>
}

export default BookTable;