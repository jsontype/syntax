import React, { useState } from "react"
import styled from "styled-components/native"
import IconButton from "./iconButton"
import { icons } from "../icons"
import Input from "./Input"

const Container = styled.View`
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  margin-top: 10px;
`

const Contents = styled.Text`
  color: ${({ theme, completed }) => (completed ? theme.done : theme.text)};
  font-size: 20px;
  flex: 1;
  text-decoration-line: ${({ completed }) =>
    completed ? "line-through" : "none"}; ;
`

export default function Task({ item, deleteTodo, checkTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [updateInput, setUpdateInput] = useState(item.text)

  const _onSumbit = () => {
    if (isEditing) {
      const updatedItem = { ...item }
      updatedItem.text = updateInput
      setIsEditing(false)
      updateTodo(updatedItem)
    }
  }

  return isEditing ? (
    <Input
      value={updateInput}
      onChangeText={(updateInput) => setUpdateInput(updateInput)}
      onSubmitEditing={_onSumbit}
      // Todo 입력중에 다른 수정 버튼을 눌렀을 때의 에러 처리
      onBlur={() => {
        setUpdateInput(item.text)
        setIsEditing(false)
      }}
    />
  ) : (
    <Container>
      <IconButton
        icon={item.completed ? icons.check : icons.uncheck}
        item={item}
        onPress={checkTodo}
      />
      <Contents completed={item.completed}>{item.text}</Contents>
      {!item.completed && (
        <IconButton icon={icons.edit} onPress={() => setIsEditing(true)} />
      )}
      <IconButton icon={icons.delete} item={item} onPress={deleteTodo} />
    </Container>
  )
}
