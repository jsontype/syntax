import React from 'react'
/*
  render 함수:
    @testing-library/react 에서 컴포넌트를 렌더링할 때에는 render()라는 함수를 사용한다.
    이 함수가 호출되면 그 결과물에는 DOM을 선택 할 수 있는 다양한 쿼리들과 container가 포함되어 있는데,
    여기서 container는 해당 컴포넌트의 최상위 DOM을 가르킨다.
    이를 가지고 스냅샷 테스팅을 할 수도 있다.
    
  스냅샷 테스팅(snapshot testing):
    어떤 기능의 예상 결과를 미리 정확히 포착해두고 실제 결과에 비교하는 테스트 기법이다.
    여기서는 렌더링된 결과가 이전에 렌더링한 결과와 일치하는지 확인하는 작업이다.
    한번이라도 npm run test를 진행한다면, 
    그 렌더링 결과가 src/__snapshots__/Profile.spec.js.snap 안에 코드로 자동저장이 되며,
    이를 스냅샷이라고 부른다.
    그리고 다음에 테스트를 할 때 이 스냅샷과 일치하지 않는 렌더링이 일어나면 테스트가 실패하게 된다.
    * 만일, 스냅샷을 업데이트하고 싶다면 테스트 콘솔창에서 u 키를 누르면 된다.
*/
import { render } from '@testing-library/react'
import Profile from './Profile'

describe('<Profile />의 테스트', () => {
  it('이전 테스트시 찍힌 스냅샷과 현재 스냅샷이 일치하는가?', () => {
    const utils = render(<Profile username="Jsontype" name="D.Yang" />)
    expect(utils.container).toMatchSnapshot()
  })
  it('username와 name 프롭스를 제대로 표시하는가?', () => {
    const utils = render(<Profile username="Jsontype" name="D.Yang" />)
    utils.getByText('Jsontype') // 해당 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText('(D.Yang)') // 해당 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/D.Y/); // 정규식 /D.Y/ 을 통과하는 엘리먼트가 있는지 확인
  })
})
