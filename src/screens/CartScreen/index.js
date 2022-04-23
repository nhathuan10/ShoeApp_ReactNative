import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CartScreen({navigation, route}) {
    return (
        <View >
            <Text onPress={() => navigation.goBack()}>CartScreen {route.params.shoe.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})