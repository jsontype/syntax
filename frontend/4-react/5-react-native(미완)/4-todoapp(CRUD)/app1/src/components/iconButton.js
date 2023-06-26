import styled from "styled-components/native"
import { TouchableOpacity, View } from "react-native"

const Icon = styled.Image`
  tint-color: ${({ theme, completed }) =>
    completed ? theme.done : theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`

export default function IconButton({ icon, item, onPress }) {
  // onPress가 전달될 때 물밑에서 id를 넣어서 onPress하도록 함
  const _onPress = () => {
    onPress(item.id)
  }

  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon} completed={item.completed} />
      </View>
    </TouchableOpacity>
  )
}

IconButton.defaultProps = {
  item: { completed: false },
}
