import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';


const Butomn = ({onpress}) => {
    return (
        <View>
                <TouchableOpacity style={styles.button} onPress={onpress}>
                    <Text style={styles.title}>CONFIRMAR</Text>
                </TouchableOpacity>
        </View>
    );
};

export default Butomn;

const styles = StyleSheet.create({
    button:{
        width: 380,
        height:50,
        backgroundColor: '#4d9df8',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        borderRadius: 3

    }, 
    title:{
        color: '#FFF',
        fontSize:16,
        fontWeight:'bold'
    }
})