import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';

function Blogpostpage() {


    const blogData = [
        {id:1, title:"First Blog page one", content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ut quia consequatur impedit dolorum. Corrupti delectus maxime ab quis est magnam deleniti laudantium esse, inventore architecto repellat itaque voluptatibus laboriosam.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eos illo. Deserunt, veritatis debitis mollitia quisquam dolorum molestias dolor, dignissimos officia doloribus accusamus dolorem rerum dolores officiis iste omnis exercitationem."},
        {id:2, title:"second Blog page", content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ut quia consequatur impedit dolorum. Corrupti delectus maxime ab quis est magnam deleniti laudantium esse, inventore architecto repellat itaque voluptatibus laboriosam.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eos illo. Deserunt, veritatis debitis mollitia quisquam dolorum molestias dolor, dignissimos officia doloribus accusamus dolorem rerum dolores officiis iste omnis exercitationem."},
        {id:3, title:"third Blog page", content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ut quia consequatur impedit dolorum. Corrupti delectus maxime ab quis est magnam deleniti laudantium esse, inventore architecto repellat itaque voluptatibus laboriosam.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eos illo. Deserunt, veritatis debitis mollitia quisquam dolorum molestias dolor, dignissimos officia doloribus accusamus dolorem rerum dolores officiis iste omnis exercitationem."}
    ]

    const {id} = useParams();


    const blogPost = blogData.find(blog=> blog.id == parseInt(id))



    if(!blogPost)  return <h2>this page is not found</h2>

  return (
    <div>
        <Navbar/>
        <h1>Blog Post {id}</h1>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.content}</p>
    </div>
  )
}

export default Blogpostpage
