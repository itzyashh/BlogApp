import React, { useState } from 'react'

const BlogContext = React.createContext()
export const BlogProvider = ({ children }) => {
    const initialState = [{ title: 'Blog Post 1' },
    { title: 'Blog Post 2' },
    { title: 'Blog Post 3' }]
    const [blogPosts, setBlogPosts] = useState(initialState)

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog post ${blogPosts.length + 1}` }])
    }

    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext