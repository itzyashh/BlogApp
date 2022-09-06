import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from './context/BlogContext'

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext)
    console.log(data);
    return (
        <View>
            <Button title="Add Blog Post" onPress={addBlogPost} />
            <FlatList
                data={data}
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem={({ item }) => {
                    return (<Text>{item.title}</Text>)
                }}
            />
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})