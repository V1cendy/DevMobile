import {ImageBackground, Text, Touchable, TouchableOpacity, View} from "react-native";
import { styles } from "./stylesHome";
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Nokia = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
                    <View style={styles.NavBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-left" size={40} color="white" style={styles.Icon} />
        </TouchableOpacity>
        </View>
            <ImageBackground 
                style={styles.header}
                source={require("../../assets/dgj.png")}
                imageStyle={styles.img}
            >
            </ImageBackground>
            <View style={styles.body}>
                <Text style={styles.nameProduct}>Nokia 3310</Text>
                <View style={styles.rowBody}>
                    <Text style={styles.rate}>(5.0)</Text>
                </View>
                <Text style={styles.titleSubSection}>Descrição</Text>
                <Text style={styles.description}>O Nokia 3310 é um telefone celular da Nokia que foi lançado no ano de 2000. Foi um dos principais lançamentos da empresa nos anos de 2000 a 2003, com 126 milhões de unidades vendidas. Ele era conhecido também por nunca se partir, chegando a ser chamado pelo nome de "Tijolão".</Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.titlePrice}>Preço</Text>
                    <Text style={styles.price}>R$ 119,99</Text>
                </View>
            </View>
        </View>
    );
}

export default Nokia;