//Home Page For Online Food Order App wit css from bootstrap.

import { Link } from "react-router"

function Home() {
    return <div className="container mt-5">
        <div className="jumbotron">
            {/* Bootstrap Carousel */}
            <div id="foodCarousel" className="carousel slide mb-4" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://www.littledayout.com/wp-content/uploads/carousel-buffet-05.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7xQZ1yccyxAqBbV_IvMkL25WDXO5FZHF2Q&s" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcjONyAws0ELLMJrEvKHRlx4Ot1jPmQtehw&s" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#foodCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#foodCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            
            <h1 className="display-4">Welcome to FoodOrder App!</h1>
            <p className="lead">Order your favorite meals online with ease.</p>
            <hr className="my-4" />
            <p>Browse our extensive menu and enjoy delicious food delivered to your doorstep.</p>
            <Link className="btn btn-primary btn-lg" to="/login" role="button">Login to Order</Link>
        </div>
    </div>
}

export default Home
