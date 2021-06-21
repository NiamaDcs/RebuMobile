import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import RenderFooter from '../components/layouts/RenderFooter';
import RenderHeader from '../components/layouts/RenderHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Field from '../components/forms/Field';
import { ThemeStyles, SIZES, FONTS } from '../ThemeStyles'
import CustomButton  from '../components/forms/CustomButton';
import ButtonFacebook from '../components/forms/ButtonFacebook';


const SignIn = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false); // pour montrer le mot de passe ou caher

  const [areas, setAreas] = useState([]); // stock le resultat de la requete tous les pays e
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // pour rendre visible le modal des numero

    return ( 
        <View style={styles.container}>
            <TouchableOpacity
                onPress={ () => this.props.navigation.navigate("welcome")}
                style={styles.arrowleft}
            >
            <AntDesign  
                name="arrowleft" 
                color='white'
                size={20} 
            />
            </TouchableOpacity>

            <RenderHeader label="S'inscrire" style={styles.header} />

            <RenderFooter style={styles.footer}>
                <Field name="user-o" placeholder="Nom complet">
                    <FontAwesome
                        name="user-o"
                        color='#05375a'
                        size={20}
                    />
                </Field>

                <Field placeholder="E-mail ou numéro de téléphone">
                    <FontAwesome 
                        name="envelope-o"
                        color="#05375a"
                        size={20}
                    />
                </Field>

                <Field 
                    placeholder="Mot de passe"
                    showPassword={!showPassword}
                >
                    <Feather
                        name="lock"
                        color='#05375a'
                        size={20}
                    />
                    <TouchableOpacity onPress={ () => setShowPassword(!showPassword) }> 
                        <Feather
                            name={showPassword ? "eye-off" : "eye"}
                            color='grey'
                            size={20}
                        />
                    </TouchableOpacity>
                </Field>

                <CustomButton label="S'inscrire" buttonColor={ThemeStyles.color.tint} onPress= { () => console.log('ok')} />
                 <View style={{ alignItems: 'center', justifyContent: 'center'}}><Text style={styles.or}>Ou</Text></View>
                <ButtonFacebook onPress= { () => console.log('ok')} />
            </RenderFooter>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeStyles.color.tint
    },
    arrowleft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 2   
    },
    footer: {
        flex: 3,
        backgroundColor: ThemeStyles.color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: ThemeStyles.color.tint
    },
    or: {
        fontFamily: ThemeStyles.fontName.main,
        color: "black",
        marginTop: 20,
    }

});
 
export default SignIn;