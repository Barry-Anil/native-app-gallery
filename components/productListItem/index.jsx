
import { Pressable, StyleSheet } from 'react-native'
import {Text, View, Image} from 'react-native'



export default function ProductListItem({title, image, onPress, bgColor}) {


    return (
        <View style={styles.productItemContainer}>
            <Pressable android_ripple={{color: '#cad346'}} onPress={onPress} style={{...styles.pressableView, backgroundColor: bgColor}}>
                <View style={styles.productItemInnerContainer}>
                    <Image style={styles.logo} source={{ uri: image}} />
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>
                    {
                        title
                    }
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles =  StyleSheet.create({
    productItemContainer: {
        flex:1,
        margin:16,
        height: 160,
        borderRadius: 8
    },
    pressableView: {
        flex: 1
    },
    productItemInnerContainer: {
        flex: 1,
        padding:15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 10,
        color: '#000000'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
      },
})