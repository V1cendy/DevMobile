import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { style } from '../../styles/home.style'
const Home = () => {
    
    const [products, setProducts] = useState({
        p1: {
            id: 1,
            title: 'Iphone 15 Pro',
            price:  9299.99,
            aval: 4.3,
            inCart: false,
            qtde: 0
        },
        p2: {
            id: 2,
            title: 'Samsung Galaxy S23 Ultra',
            price: 6690.99,
            aval: 4.7,
            inCart: false,
            qtde: 0
        },
        p3: {
            id: 3,
            title: 'Nokia 3310',
            price: 119.99,
            aval: 5.0,
            inCart: false,
            qtde: 0
        }
    }
    );


    const navigation = useNavigation();

    const [indexImg1, setIndexImg1] = useState(true)
    const [indexImg2, setIndexImg2] = useState(false)
    const [indexImg3, setIndexImg3] = useState(false)
    const [starCliked, setStarClicked] = useState(false)
    const [addCliked, setAddClicked] = useState(false)


    const aditionCart = () => {
        alert("Produto adicionado ao carrinho com sucesso!")
    }


    return (
        <View style={style.container}>

            <View style={style.NavBar}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Cart", products)}>
                    <Icon name="shopping-cart" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={style.Shop}><View>{/* Produto 1 */}
                    <Text style={style.NameProduct}>{products['p1'].title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Iphone")}>
                        <Image style={style.ImageProduct} source={require('../../../../assets/Iphone15.png')} />
                    </TouchableOpacity>
                    <View style={style.optProduct}>
                        <View>
                            {products['p1'].inCart ?
                                <TouchableOpacity onPress={() => setProducts({ ...products, p1: { ...products.p1, ['inCart']: false } })} >
                                    <Icon name="minus-square" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => setProducts({ ...products, p1: { ...products.p1, ['inCart']: true } })}>
                                    <Icon name="plus-square-o" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <Text style={style.Price}>R${products['p1'].price}</Text>
                    <Text style={style.Price}> {products['p1'].aval} <Image style={style.Avaliation} source={require('../../../../assets/star.png')} /></Text>
                    <Text style={style.Description}>O Apple iPhone 15 é um produto com poucos concorrentes em termos de multimídia graças à câmera de 48 megapixels que permite ao Apple iPhone 15 tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels.</Text>
                </View>
                </View>

                <View>{/* Produto 2 */}
                    <Text style={style.NameProduct}>{products['p2'].title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Samsung")}>
                    <Image style={style.ImageProduct} source={require('../../../../assets/SamsungS23ultra.jpg')} />
                    </TouchableOpacity>


                    <View style={style.optProduct}>
                        <View>
                            {products['p2'].inCart ?
                                <TouchableOpacity onPress={() => setProducts({ ...products, p2: { ...products.p2, ['inCart']: false } })} >
                                    <Icon name="minus-square" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => setProducts({ ...products, p2: { ...products.p2, ['inCart']: true } })}>
                                    <Icon name="plus-square-o" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <Text style={style.Price}>R${products['p2'].price}</Text>
                    <Text style={style.Price}> {products['p2'].aval} <Image style={style.Avaliation} source={require('../../../../assets/star.png')} /></Text>
                    <Text style={style.Description}>O Samsung Galaxy S23 Ultra é um smartphone Android com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos.</Text>
                </View>

                <View>{/* Produto 3 */}
                    <Text style={style.NameProduct}>{products['p3'].title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Nokia')}>
                    <Image style={style.ImageProduct} source={require('../../../../assets/dgj.png')} />
                    </TouchableOpacity>
                    <View style={style.optProduct}>
                        <View>
                            {products['p3'].inCart ?
                                <TouchableOpacity onPress={() => setProducts({ ...products, p3: { ...products.p3, ['inCart']: false } })} >
                                    <Icon name="minus-square" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => setProducts({ ...products, p3: { ...products.p3, ['inCart']: true } })}>
                                    <Icon name="plus-square-o" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <Text style={style.Price}>R${products['p3'].price}</Text>
                    <Text style={style.Price}> {products['p3'].aval} <Image style={style.Avaliation} source={require('../../../../assets/star.png')} /></Text>
                    <Text style={style.Description}>O Nokia 3310 é um telefone celular da Nokia que foi lançado no ano de 2000. Foi um dos principais lançamentos da empresa nos anos de 2000 a 2003, com 126 milhões de unidades vendidas. Ele era conhecido também por nunca se partir, chegando a ser chamado pelo nome de "Tijolão".[1]</Text>
                </View>
            </ScrollView>
        </View >
    )
}

export default Home;
