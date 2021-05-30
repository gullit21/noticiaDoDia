import React from 'react';
import { View } from 'react-native';
import Noticia from '../Noticia';
import Titulo from '../Titulo';

export default function TelaInicial() {
    return (
        <View >
            <Titulo/>
            <Noticia/>
        </View>
    );
}