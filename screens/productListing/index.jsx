
import { useContext } from 'react'
import { Context } from '../../context'
import { ActivityIndicator, Text, View, StyleSheet, FlatList } from 'react-native'
import ProductListItem from '../../components/productListItem'
import { useNavigation } from '@react-navigation/native'


export default function ProductListing() {

    const { loading, products } = useContext(Context)

    if (loading) {
        return (
            <ActivityIndicator style={styles.loader} color={'red'} size="large" />
        )
    }

    const navigation = useNavigation()

    function createRandomColor() {
        let letters = '0123456789ABCDEF'
        let color = '#'

        for(let i=0; i<6; i++){
            color += letters[Math.floor(Math.random()* 16)];
        }
        return color
    }

    const handlePress = (Id) => {
        navigation.navigate('ProductDetails', {
            productID : Id,
        })
    }

    return (
        <View>
            <FlatList
                data={products}
                renderItem={(itemData) => <ProductListItem title={itemData.item.title} image={itemData.item.images[0]} bgColor={createRandomColor()} onPress={() => handlePress(itemData.item.id)}/>}
                keyExtractor={(itemData) => itemData.id}
                numColumns={2}
            />
            <Text>Product Listing</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})