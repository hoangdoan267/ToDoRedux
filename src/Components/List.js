import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';


export default class List extends Component {

  renderItem = (text, i) => {
    const {onPressItem} = this.props
    return (
      <View key={i}
        style={styles.item}
      >
        <Text>{text}</Text>
        <TouchableOpacity onPress={() => onPressItem(i)}>
            <Icon name="minus" size={30} color="red"/>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const {list} = this.props
    return (
      <View style={{paddingHorizontal: 10}}>
        {list.map(this.renderItem)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 5,
    padding: 15,
    borderBottomWidth: 2,
    borderColor: "whitesmoke",
    flexDirection: "row",
    justifyContent: "space-between"
  },
})
