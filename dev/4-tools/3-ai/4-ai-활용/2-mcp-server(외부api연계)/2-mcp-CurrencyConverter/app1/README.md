# MCP 금융 정보 앱

이 프로젝트는 MCP(Model Context Protocol) 서버를 활용한 실시간 환율 및 금융 뉴스 통합 애플리케이션입니다. 환율 정보와 금융 뉴스를 실시간으로 제공하고, 여러 외부 API를 MCP를 통해 안전하게 연동하는 방법을 보여줍니다.

## MCP란 무엇인가?

MCP(Model Context Protocol)는 AI 모델이 다양한 외부 서비스와 안전하게 통신할 수 있도록 해주는 프로토콜입니다. 주요 특징:

- **다중 서비스 통합**: 여러 API 서비스를 하나의 인터페이스로 통합
- **양방향 데이터 통신**: AI와 서비스 간 실시간 양방향 통신 지원
- **보안 강화**: 직접적인 API 키 노출 없이 안전한 서비스 연동
- **표준화된 인터페이스**: 서로 다른 서비스도 일관된 방식으로 사용

## MCP가 필요한 이유

이 앱에서는 두 가지 외부 API(Exchange Rates API와 News API)를 사용하여 MCP의 장점을 보여줍니다:

1. **실시간 데이터 연동**: 환율 데이터와 뉴스 데이터를 실시간으로 가져와서 통합 대시보드로 제공
2. **서비스 연결 단순화**: 여러 API를 연결하는 복잡한 과정을 MCP가 처리
3. **보안 강화**: API 키를 안전하게 관리하면서 서비스 활용 가능
4. **양방향 데이터 통신**: 사용자 입력(통화 선택, 키워드 검색 등)에 따라 실시간으로 데이터 업데이트

## 주요 기능

- **통화 대시보드**: 주요 통화의 실시간 환율 정보와 관련 뉴스를 한 화면에서 확인
- **환율 변환기**: 다양한 통화 간 금액 변환 기능
- **환율 차트**: 통화 쌍의 최근 7일간 환율 추이를 차트로 시각화
- **금융 뉴스**: 최신 금융 뉴스를 검색하고 확인하는 기능

## 사용된 API

1. **Exchange Rates API** (https://exchangerate.host/)

   - 실시간 환율 정보 제공
   - 통화 변환 기능
   - 기간별 환율 데이터 조회

2. **News API** (https://newsapi.org/)
   - 다양한 주제의 뉴스 기사 검색
   - 특정 키워드에 대한 뉴스 조회
   - 카테고리별 헤드라인 제공

## 시작하기

### 사전 요구사항

- Node.js (v14 이상)
- npm (v6 이상)
- MCP 서버 설정 (/Users/dev/.cursor/mcp.json)

### 설치

1. 프로젝트 디렉토리로 이동:

   ```bash
   cd syntax/start/9-DevOps/6-신기술/1-mcp/app2
   ```

2. 필요한 의존성 설치:

   ```bash
   npm install
   ```

3. API 키 설정:
   - Exchange Rates API 키 발급: https://apilayer.com/marketplace/exchangerates_data-api
   - News API 키 발급: https://newsapi.org/
   - 프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:
     ```
     REACT_APP_EXCHANGE_RATES_API_KEY=your_exchange_rates_api_key_here
     REACT_APP_NEWS_API_KEY=your_news_api_key_here
     ```
   - 각각의 API 키를 발급받은 실제 키로 교체하세요.

### 개발 서버 실행

```bash
npm start
```

앱이 개발 모드로 실행됩니다. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 확인할 수 있습니다.

## MCP 서버 설정

이 앱은 MCP 서버를 통해 외부 API와 통신합니다. MCP 서버 설정은 `/Users/dev/.cursor/mcp.json` 파일에서 확인할 수 있습니다:

```json
{
  "mcpServers": {
    "exchangeRatesApi": {
      "baseURL": "https://api.exchangerate.host",
      "headers": {
        "Content-Type": "application/json"
      }
    },
    "newsApi": {
      "baseURL": "https://newsapi.org/v2",
      "headers": {
        "Content-Type": "application/json"
      }
    }
  }
}
```

## 앱 구조

- **src/types/**: 데이터 타입 정의
- **src/services/**: API 서비스 로직
- **src/components/**: React 컴포넌트
  - CurrencyConverter: 환율 변환 기능
  - ExchangeRateChart: 환율 차트 표시
  - FinancialNews: 금융 뉴스 표시
  - CurrencyDashboard: 통합 대시보드

## MCP의 교육적 장점

이 프로젝트는 다음과 같은 MCP의 교육적 장점을 보여줍니다:

1. **다중 API 통합**: 여러 API를 일관된 방식으로 통합하는 방법
2. **실시간 데이터 처리**: 환율 및 뉴스 데이터를 실시간으로 처리하고 표시
3. **사용자 상호작용**: 사용자 입력에 따라 서비스를 동적으로 호출하는 방법
4. **반응형 UI**: 실시간 데이터를 기반으로 한 반응형 사용자 인터페이스

## 향후 개선 사항

- 환율 히스토리 데이터의 기간 선택 옵션 추가
- 통화별 상세 정보 및 동향 분석 기능
- 개인 관심 통화 설정 기능
- 뉴스 필터링 및 분류 기능 강화

## 라이선스

이 프로젝트는 MIT 라이선스로 제공됩니다.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
