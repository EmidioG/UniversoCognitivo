import { isIphoneX } from 'react-native-iphone-x-helper'
import { Platform, StatusBar, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'

export function RFPercentage(percent) {
  const { height, width } = Dimensions.get('window')
  const standardLength = width > height ? width : height
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength

  const heightPercent = (percent * deviceHeight) / 100
  return Math.round(heightPercent)
}

// guideline height for standard 5" device screen is 680
export function RFValue(fontSize, standardScreenHeight = 680) {
  const { height, width } = Dimensions.get('window')
  const standardLength = width > height ? height : width
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight
  return Math.round(heightPercent)
}

export function WRFPercentage(percent) {
  const { height, width } = Dimensions.get('window')
  const standardLength = height > width ? height : width

  const WidthPercent = (percent * standardLength) / 100
  return WidthPercent
}

// guideline height for standard 5" device screen is 680
export function WRFValue(fontSize) {
  const { width } = Dimensions.get('window')

  console.log(width)
  const heightPercent = fontSize * width * 0.003
  return heightPercent
}
