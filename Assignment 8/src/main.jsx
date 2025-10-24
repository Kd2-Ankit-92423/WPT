import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Person from '../components/Person.jsx'
import Character from '../components/Characters.jsx'
import BookTable from '../components/BookTable.jsx'
import PersonStyled from '../components/PersonStyled.jsx'
import Book from '../components/Book.jsx'
import BookGallary from '../components/BookGallary.jsx'
createRoot(document.getElementById("root")).render(
    <div>
    <App/>
    <Person/>
    <Character/>
    <BookTable/>
    <PersonStyled/>
    {/* <Book srno="123" title="Atlas Shrugged" author="Ayn Rand" category="Fiction" price="654.30"/>
    <Book srno="234" title="The Fountainhead" author="Ayn Rand" category="Fiction" price="532.40"/>
    <Book srno="345" title="The Alchemist" author="Paulo Cohelo" category="Fiction" price="432.90"/> */}
    <BookGallary/>
    </div>
)
