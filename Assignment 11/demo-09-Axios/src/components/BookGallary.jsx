import { useEffect, useState } from "react"
import axios from "axios";

function BookGallary(){
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        async function fetchBooks(){
        const response = await axios.get("https://nilesh-g.github.io/learn-web/data/novels.json")
        console.log(response);
        if(response.status === 200 && response.data.length > 0){
            setBooks(response.data);
        }
        else{
            alert("Error in fetching books data");
        }
        }
        fetchBooks();
    },[]);
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book)=>(
                    <tr key={book.srno}>
                        <td>{book.srno}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.category}</td>
                        <td>{book.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}
export default BookGallary;