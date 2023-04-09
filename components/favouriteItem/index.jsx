
import {Text, View, StyleSheet} from 'react-native'



export default function FavouriteItem({title, reason}) {


    return (
        <View style={styles.FavouriteItemContainer}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{reason}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    FavouriteItemContainer: {
        borderWidth:1,
        padding: 10,
        backgroundColor: '#0f0782',
        marginBottom: 10

    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    }
})