import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { style } from '../../styles/cart.style'


const Cart = (props) => {

    useEffect(() => {
        if (products['p1'].inCart == true) { setProducts({ ...products, p1: { ...products.p1, ['qtde']: 1 } }) }
        if (products['p2'].inCart == true) { setProducts({ ...products, p2: { ...products.p2, ['qtde']: 1 } }) }
        if (products['p3'].inCart == true) { setProducts({ ...products, p3: { ...products.p3, ['qtde']: 1 } }) }
    }, []);

    const [products, setProducts] = useState(props.route.params)


    const navigation = useNavigation();

    function AddQtde(key: any) {
        if (key == 1) setProducts({ ...products, p1: { ...products.p1, ['qtde']: ((products.p1.qtde) + 1) } })
        if (key == 2) setProducts({ ...products, p2: { ...products.p2, ['qtde']: ((products.p2.qtde) + 1) } })
        if (key == 3) setProducts({ ...products, p3: { ...products.p3, ['qtde']: ((products.p3.qtde) + 1) } })
    }

    function RemQtde(key: any) {
        if (key == 1) {
            if (products.p1.qtde > 1) setProducts({ ...products, p1: { ...products.p1, ['qtde']: ((products.p1.qtde) - 1) } })
        }
        if (key == 2) {
            if (products.p2.qtde > 1) setProducts({ ...products, p2: { ...products.p2, ['qtde']: ((products.p2.qtde) - 1) } })
        }
        if (key == 3) {
            if (products.p3.qtde > 1) setProducts({ ...products, p3: { ...products.p3, ['qtde']: ((products.p3.qtde) - 1) } })
        }
        
    }

    console.log(products.p1.qtde, products.p2.qtde, products.p3.qtde)

    return (<View>
        <View style={style.NavBar}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
            </TouchableOpacity>
        </View>

        <View style={style.ProductsCart}>
            {products['p1'].inCart ?
                <View style={style.Product}>
                    <Image style={style.ImageProduct} source={require('../../../../assets/Iphone15.png')} />
                    <Text style={style.TitleProduct}>{products['p1'].title} {'\n'}
                    <Text style={style.PriceCart}>R$ {products['p1'].price}</Text></Text>
                    <TouchableOpacity style={style.add} onPress={() => RemQtde(1)}>
                        <Icon name="minus-circle" size={20} color="#f96d09" />
                    </TouchableOpacity>

                    <Text style={style.QTDEProduct}>{products['p1'].qtde}</Text>

                    <TouchableOpacity style={style.add} onPress={() => AddQtde(1)}>
                        <Icon name="plus-circle" size={20} color="#f96d09" />
                    </TouchableOpacity>
                </View> : null}

            {products['p2'].inCart ?
                <View style={style.Product}>
                    <Image style={style.ImageProduct} source={require('../../../../assets/SamsungS23ultra.jpg')} />
                    <Text style={style.TitleProduct}>{products['p2'].title}{'\n'}
                    <Text style={style.PriceCart}>R$ {products['p2'].price}</Text></Text>
                    <TouchableOpacity style={style.add} onPress={() => RemQtde(2)}>
                        <Icon name="minus-circle" size={20} color="#f96d09" />
                    </TouchableOpacity>

                    <Text style={style.QTDEProduct}>{products['p2'].qtde}</Text>

                    <TouchableOpacity style={style.add} onPress={() => AddQtde(2)}>
                        <Icon name="plus-circle" size={20} color="#f96d09" />
                    </TouchableOpacity>
                </View> : null}

            {products['p3'].inCart ?
                <View style={style.Product}>
                    <Image style={style.ImageProduct} source={require('../../../../assets/dgj.png')} />
                    <Text style={style.TitleProduct}>{products['p3'].title}{'\n'}
                    <Text style={style.PriceCart}>R$ {products['p3'].price}</Text></Text>
                    <TouchableOpacity style={style.add} onPress={() => RemQtde(3)}>
                        <Icon name="minus-circle" size={20} color="#f96d09" />
                    </TouchableOpacity>

                    <Text style={style.QTDEProduct}>{products['p3'].qtde}</Text>

                    <TouchableOpacity style={style.add} onPress={() => AddQtde(3)}>
                        <Icon name="plus-circle" size={20} color="#f96d09" />
                    </TouchableOpacity>
                </View> : null}


                <View style={style.Total}><Text style={style.TotalProce}>Total a Pagar   {(
                    (products.p1.qtde * products.p1.price)+
                    (products.p2.qtde * products.p2.price)+
                    (products.p3.qtde * products.p3.price)
                    ).toFixed(2) }</Text></View>

        </View>

    </View>)
}

export default Cart;
