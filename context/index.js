import { createContext, useEffect, useState } from "react";


export const Context = createContext(null);

const ProductContext = ({ children }) => {
    //list of products
    const [products, setProducts] = useState([])

    //loading state
    const [loading, setLoading] = useState(false)

    //Favourites
    const [favouriteItems, setFavoutiteItems] = useState([])

    const addToFavourite = (productID, reason) =>  {
        let cpyFav = [...favouriteItems]

        const index = cpyFav.findIndex(item => item.id == productID)
        if(index === -1){
            const currentProduct = products?.find(item => item.id === productID)
            cpyFav.push({
                title: currentProduct.title,
                id: currentProduct.id,
                reason
            })
            setFavoutiteItems(cpyFav)
        }
    }

    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            const apiRes = await fetch("https://dummyjson.com/products")
            const res = await apiRes.json();

            if (res) {
                setLoading(false)
                setProducts(res?.products)
            }
        }
        fetchData()
    }, [])


    return (
        <Context.Provider value={{ products, loading, addToFavourite, favouriteItems }}>
            {children}
        </Context.Provider>
    )
}

export default ProductContext;