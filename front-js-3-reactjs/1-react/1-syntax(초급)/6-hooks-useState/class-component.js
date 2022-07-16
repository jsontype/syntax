import React from "react";
// import PropTypes from "prop-types"; // TS 도입 이전에 쓰던 라이브러리이다.

/*
  [주의!] 
    해당 파일은 2019년 이전 자료로, 함수형 컴포넌트에서도 state 관리와 life cycle method 를 구현하게 해주는 "리액트 훅스"가 나오기 "전"의 코딩방식에 대한 참고용이다.
    리액트 유지보수 현장에 가게 되면 이런 방식으로 되어 있으므로 지식적으로는 정리해두는 게 좋을 것 같다.
  
  [클래스 컴포넌트의 Life Cycle]
    1. Mounting : component가 screen에 표시될 때 호출하는 것들
        constructor() : BeforeMount
        render() : Mount
        componentDidMount() : afterMount
    2. Updating : state를 변경할 때, 호출하는 것들
        render() : Update
        componentDidUpdate : afterUpdate
    3. Unmounting : component가 screen에 표시되지 못할 때 호출하는 것들
        componentWillUnmount()

  [PropType]
    1. PropType : React에서 TS를 쓰지 않을 때에, 변수내에 들어갈 데이터가 잘못 들어가지 않게 Type을 제한하는 라이브러리
      설치방법 : 
        npm i prop-types -> npm i
      사용방법 : 
        ShowList.propTypes = {
            name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        }
    2. 설명 : 만일, rating을 number가 아닌 string을 입력하면 표면상으로는 에러가 안뜨지만 콘솔창에는 에러가 뜰 것이다.
      이에 대한 예외 처리 등을 하면서 유용하게 사용할 수 있다.
      propTypes를 검색해보면 그 외에도 많은 것들을 검사할 수 있다.
      참조URL: https://ko.reactjs.org/docs/typechecking-with-proptypes.html
*/

// 앱
class App extends React.Component {
  // 생명주기상 BeforeMount 단계에서 실행하는 함수
  constructor(props) {
    super(props) // props에 대해서는 일단 신경쓰지 말 것
    console.log("hello")
  }
  // 생명주기상 AfterMount 단계에서 실행하는 함수
  componentDidMount() {
    console.log("component rendered")
  }
  // 생명주기상 AfterUpdate 단계에서 실행하는 함수
  componentDidUpdate() {
    console.log("component updated")
  }


  // 변할 데이터를 담는 곳
  state = {
    count: 0
  }
  // currnet : 외부의 영향을 받지 않고 currentState로부터 데이터를 세팅할 수 있는 방식이다.
  add = () => {
    // this.setState({count: this.state.count + 1}) // 기존의 좋지 않은 방식
    this.setState(current => ({count: current.count + 1}))
    // console.log('add ===> ', this.state.count)
  }
  minus = () => {
    // this.setState({count: this.state.count - 1}) // 기존의 좋지 않은 방식
    this.setState(current => ({count: current.count - 1}))
    // console.log('minus ===> ', this.state.count)
  }
  // 렌더를 통해서 데이터를 표시
  // 생명주기상 Mount, Update 등등의 rendering(mounting, updating, ...ing) 단계에서 실행하는 함수
  render() {
    console.log("I am rendering")
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
