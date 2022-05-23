import React, { useState } from "react"
import { View, Text, TouchableOpacity} from "react-native"
import styles from "./style";
import Title from '../Title/index';

export default function Form (){
   
    const [selectColor, setColor] = useState('#1f1c20');

    function ChangeColor (color){
        if(color == 'light'){
            setColor("#fff");
        }
        else{
            setColor("#1f1c20");
        }
    }
  
    return(
        <View style={[styles.container, {backgroundColor: selectColor}]}>
            <Title/>
            <View style={styles.formContext}>
                <TouchableOpacity style={styles.button} onPress={()=> ChangeColor('light')

                }> 
                <Text style={styles.textButton}>Light</Text>
                
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={()=> ChangeColor('dark')

                }>
                <Text  style={styles.textButton}>Dark</Text>

                </TouchableOpacity>

            </View>
        </View>
    );

   
}


  


