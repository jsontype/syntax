import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./"

/*
  storiesOf : 스토리를 생성하는 함수이다.
    첫번째 인자는 "스토리그룹명/스토리명", 
    두번째 인자는 해당 스토리를 렌더링하는 함수 "module"을 입력한다.
  add : storiesOf로 설정된 스토리에, 다양한 하위 스토리를 추가하는 함수이다.
    아래 코드에서는 "Button" 분류에 "default, small, blue, red" 스토리를 생성해서,
    atoms/Button 컴포넌트를 렌더링하는 다양한 예시를 제공하고 있다.
*/

// storiesOf 함수를 사용하여 "atoms/Button"이라는 카테고리로 스토리를 그룹화
storiesOf("atoms/Button", module)
  // add 메소드를 사용하여 여러 버튼 예시를 생성
  .add("default", () => <Button>Default Button</Button>)
  .add("small", () => <Button small>Small Button</Button>)
  .add("blue", () => <Button color="#2196f3">Blue Button</Button>)
  .add("red", () => <Button color="#f44336">Red Button</Button>)
