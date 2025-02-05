import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '../../../components'
import { COLORS } from '../../../themes'

export default function CategoryItem({ item, onPressCategoryFocus, categoryFocus, style }) {

    return (
        <TouchableOpacity
            onPress={onPressCategoryFocus}
        >
            <Text
                title
                style={[(categoryFocus === item.category) ? styles.focused : styles.normal, style]}
            >
                {item.category}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    normal: {
        color: COLORS.regularGray
    },
    focused: {
        color: COLORS.lightGray,
        fontSize: 27,
    }
})