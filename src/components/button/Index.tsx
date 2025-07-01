import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import {styles} from "./styles"

type Props = TouchableOpacityProps & { // minhas propriedades são as mesmas do botão TouchableOpacity e a title, ....
    title: string
}

export function Button({ title, ...rest }: Props){ //define o restante das propriedades como {...rest}
    return (
        <TouchableOpacity  style={styles.button} {...rest}> 
            <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    )
}