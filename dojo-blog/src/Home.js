import { useState } from "react"

const Home = () => {
    const [blogs, setBlogs]  = useState([
        {}
    ])
    return ( 
        <div className="home">
            <h2>HomePage</h2>
        </div>
     );
}

export default Home;