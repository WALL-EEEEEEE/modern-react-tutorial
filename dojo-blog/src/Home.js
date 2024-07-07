import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]  = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    const [name, setName] = useState("mario")

    useEffect( () => { 
        console.log("use effect")
        console.log(name)
    }, [name])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !== id )
        setBlogs(newBlogs)
    }


    return ( 
        <div className="home">
            <BlogList blogs={blogs} handleDelete={handleDelete}/>
            <p > {name} </p>
            <button onClick={ ()  => {setName("luigi")}}> change name</button>
        </div>
     );
}

export default Home;