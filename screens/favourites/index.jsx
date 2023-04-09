
import { useContext } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { Context } from '../../context'
import { FlatList } from 'react-native'
import FavouriteItem from '../../components/favouriteItem'



export default function Favourites() {

    const {favouriteItems} = useContext(Context)

    console.log(favouriteItems, "props")

    if(!favouriteItems){
        return (
            <View style={styles.noFav}>
                <Text style={styles.noFavText}>No Favourites Added</Text>
            </View>
        )
    }

    return (
        <View style={styles.favMainContainer}>
            {/* <FlatList 
                data={favouriteItems}
                renderItem={(itemData) => (
                    <FavouriteItem 
                        title={itemData.item.title} 
                        reason={itemData.item.reason} 
                    />
                    )}
                keyExtractor={(itemData) =>  itemData.id}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    favMainContainer: {
        paddingHorizontal: 16,
        paddingVertical: 30
    },  
    noFav: {
        padding: 20,
        alignItems: 'center'
    },
    noFavText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    }
})