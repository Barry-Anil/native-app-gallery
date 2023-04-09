
import { Text, View, ActivityIndicator, StyleSheet, Pressable, Alert, Modal } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'
import ProductDetailsItem from '../../components/productDetailsItem'
import { Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Context } from '../../context'


export default function ProductDetails() {

    const route = useRoute()
    const navigation = useNavigation()
    const { productID } = route.params
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [reason, setReason] = useState('')

    //Context
    const {addToFavourite} = useContext(Context)


    //API call

    useEffect(() => {
        setLoading(true)
        async function fetchProduct() {
            const response = await fetch(`https://dummyjson.com/products/${productID}`)
            const res = await response.json()

            if (res) {
                setLoading(false)
                setProduct(res)
            }
        }
        fetchProduct()
    }, [])

    //Add to Favourites Button

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Button title='Add Favourites' onPress={() => setModalVisible(true)} />
                )
            }
        })
    }, [])


    const handleChange = (text) => {
        setReason(text)
    }


    if (loading) {
        return (
            <ActivityIndicator style={styles.loader} color={'red'} size="large" />
        )
    }

    return (
        <View>
            <ProductDetailsItem product={product} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput 
                            placeholder='Why do you like this product ?' 
                            onChangeText={handleChange} 
                            value={reason} 
                            style={styles.reasonTextInput}
                            />
                        <View style={styles.buttonWrapper}>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => {
                                    addToFavourite(productID, reason)
                                    setModalVisible(!modalVisible)
                                    }}>
                                <Text style={styles.textStyle}>Add</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 1,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 1,
        padding: 10,
        elevation: 2,
        marginTop: 10
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
        marginRight: 5
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        marginLeft: 5
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonWrapper: {
        flexDirection: 'row'
    },
    reasonTextInput: {
        borderRadius: 1,
        borderWidth: 1,
        padding: 10
    }
})