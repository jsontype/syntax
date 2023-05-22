import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    backgroundColor: "#e3e3e3",
    width: 200,
    height: 200,
    // iOS의 shadow, android의 elevation에 공통 적용
    shadowColor: "#000000",
    // iOS의 shadow, android의 elevation에 별도 적용 : 구분을 위해 배경색 따로 지정했음
    ...Platform.select({
      ios: {
        backgroundColor: "skyblue",
        // iOS 전용 shadowOffset : 좌단, 하단 그림자 위치
        shadowOffset: {
          width: 10,
          height: 10,
        },
        // iOS 전용 shadowOpacity : 숫자가 클수록 진함
        shadowOpacity: 0.5,
        // iOS 전용 shadowRadius : 숫자가 클수록 원형
        shadowRadius: 10,
      },
      android: {
        backgroundColor: "pink",
        // android 전용 elevation : 사방의 그림자 크기
        elevation: 20,
      },
    }),
  },
})
