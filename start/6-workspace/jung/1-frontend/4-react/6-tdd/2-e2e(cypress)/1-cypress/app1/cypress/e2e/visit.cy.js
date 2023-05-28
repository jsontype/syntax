// 대주제
describe("메인메뉴 테스트", () => {
  it("npm start", () => {
    // 테스트 설명하는 제목
    cy.exec("npm start") // CLI로 실행되는 함수 (cli > yarn start를 실행)
  })
  it("초기화면 이동", () => {
    cy.visit("/") // BaseURL경로를 접속하게 된다.
  })
})
