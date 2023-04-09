import { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'



export default function ProductDetailsItem({ product }) {



    return (
        <View style={styles.container}>
         
            <Text style={styles.textStyle}>{product.title}</Text>
            <Text style={styles.textStyle}>{product.description}</Text>
            <Text style={styles.textStyle}>{product.price}</Text>
            <Text style={styles.textStyle}>{product.rating}</Text>
            <Text style={styles.textStyle}>{product.category}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingHorizontal: 15,
        borderWidth: 1,
        margin: 10,
        borderColor: "#88da9e"
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        paddingBottom: 12
    },
    tinyLogo: {
        width: 200,
        height: 250,
        marginBottom: 20
    }
})