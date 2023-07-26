import React from 'react'
import { FlatList, Text, View } from 'react-native'
import users from '../data/users'
import { ListItem } from 'react-native-elements'

export default props => {
  function getUserItem({ item: user }) {
    return (
      <ListItem
        leftAvatar={{ source: { uri: user.avatarUrl }}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}
      />
    )
  }

  return (
    <View style={{ flex: 1, color: '#000'}}>
      <FlatList 
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
}
