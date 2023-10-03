import {ImageBackground, Text, Touchable, TouchableOpacity, View} from "react-native";
import { styles } from "./stylesHome";
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Samsung = () =>{
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
                source={require("../../assets/SamsungS23ultra.jpg")}
                imageStyle={styles.img}
            >
            </ImageBackground>
            <View style={styles.body}>
                <Text style={styles.nameProduct}>Samsung S23 Ultra</Text>
                <View style={styles.rowBody}>
                    <Text style={styles.rate}>(4.5)</Text>
                </View>
                <Text style={styles.titleSubSection}>Descrição</Text>
                <Text style={styles.description}>O Samsung Galaxy S23 Ultra é um smartphone Android com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos. </Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.titlePrice}>Preço</Text>
                    <Text style={styles.price}>R$ 6.690,99</Text>
                </View>
            </View>
        </View>
    );
}

export default Samsung;