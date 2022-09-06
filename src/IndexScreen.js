import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from './context/BlogContext'

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext)
    // console.log(first);
    return (
        <View>
            <Button title="Add Blog Post" onPress={addBlogPost} />
            <FlatList
                keyExtractor={(blogPost) => blogPost.title}
                data={data}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})