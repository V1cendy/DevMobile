import {ImageBackground, Text, Touchable, TouchableOpacity, View} from "react-native";
import { styles } from "./stylesHome";
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Iphone = () =>{
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
                source={require("../../assets/Iphone15.png")}
                imageStyle={styles.img}
            >
            </ImageBackground>
            <View style={styles.body}>
                <Text style={styles.nameProduct}>Iphone 15 Pro</Text>
                <View style={styles.rowBody}>
                    <Text style={styles.rate}>(4.3)</Text>
                </View>
                <Text style={styles.titleSubSection}>Descrição</Text>
                <Text style={styles.description}>O Apple iPhone 15 é um produto com poucos concorrentes em termos de multimídia graças à câmera de 48 megapixels que permite ao Apple iPhone 15 tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels.</Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.titlePrice}>Preço</Text>
                    <Text style={styles.price}>R$ 9.299,99</Text>
                </View>
            </View>
        </View>
    );
}

export default Iphone;