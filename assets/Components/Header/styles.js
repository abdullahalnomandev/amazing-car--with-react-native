import { StyleSheet } from "react-native";


const styles = StyleSheet({

    container:{

        position:'absolute',
        top:50,
        zIndex:100,
        resizeMode:'contain',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'

    },
    logo:{

        with: 100,
        height:20

    },
    menu:{
        width:25,
        height:25,
        resizeMode:'contain',

    }
});

export default styles;