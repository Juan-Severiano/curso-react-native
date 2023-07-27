import { SafeAreaView } from 'react-native-safe-area-context'
import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import commomStyles from '../commomStyles'

import moment from 'moment'
import 'moment/locale/pt-br'

import todayImg from '../../assets/imgs/today.jpg'

export default class TaskList extends Component{
  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.background} source={todayImg}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Text>TaskList</Text>
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 3
  },
  taskList: {
    flex: 7
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: 'Lato'
  }
})