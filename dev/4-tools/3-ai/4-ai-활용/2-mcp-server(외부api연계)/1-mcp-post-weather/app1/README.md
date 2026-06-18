# MCP API 튜토리얼

이 프로젝트는 MCP(Multi-Client Protocol) 서버와 다양한 무료 API를 활용한 React 교육용 앱입니다.

## 프로젝트 소개

이 애플리케이션은 다음 두 가지 무료 API를 사용하여 데이터를 가져오고 표시합니다:

1. **JSONPlaceholder** (https://jsonplaceholder.typicode.com/)

   - 게시물 목록
   - 사용자 목록

2. **OpenWeather API** (https://openweathermap.org/api)
   - 도시 날씨 정보

## 시작하기

### 사전 요구사항

- Node.js (v14 이상)
- npm (v6 이상)

### 설치

1. 프로젝트 디렉토리로 이동:

   ```bash
   cd @1-mcp/mcp-tutorial
   ```

2. 필요한 의존성 설치:

   ```bash
   npm install
   ```

3. OpenWeather API 키 설정:
   - OpenWeather API에서 무료 API 키를 발급 받으세요: https://openweathermap.org/api
   - 프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:
     ```
     REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
     ```
   - `your_api_key_here` 부분을 발급받은 실제 API 키로 교체하세요.

### 개발 서버 실행

```bash
npm start
```

앱이 개발 모드로 실행됩니다. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 확인할 수 있습니다.

## 주요 기능

- **게시물 목록**: JSONPlaceholder API에서 게시물 데이터를 가져와 표시
- **사용자 목록**: JSONPlaceholder API에서 사용자 정보를 가져와 표시
- **날씨 검색**: OpenWeather API를 사용하여 도시 이름으로 날씨 정보 검색

## 무료 API 활용 방법

### JSONPlaceholder

JSONPlaceholder는 개발 및 테스트 목적으로 사용할 수 있는 무료 REST API 서비스입니다.

- 기본 URL: `https://jsonplaceholder.typicode.com`
- 주요 엔드포인트:
  - `/posts`: 게시물 목록
  - `/users`: 사용자 목록
  - `/comments`: 댓글 목록
  - `/albums`: 앨범 목록
  - `/photos`: 사진 목록
  - `/todos`: 할 일 목록

인증 키가 필요하지 않으며, 요청 제한이 없어 교육용으로 적합합니다.

### OpenWeather API

OpenWeather API는 전 세계 도시의 날씨 정보를 제공하는 서비스입니다.

- 기본 URL: `https://api.openweathermap.org/data/2.5`
- 무료 플랜:
  - 현재 날씨 데이터
  - 분당 60회 API 호출 제한
  - 5일 예보 데이터 (3시간 간격)
  - 1,000개 이상의 날씨 지도 레이어

#### API 키 발급 방법:

1. [OpenWeather](https://openweathermap.org/) 사이트에 가입
2. 로그인 후 [API keys](https://home.openweathermap.org/api_keys) 페이지에서 새로운 API 키 생성
3. 생성된 API 키가 활성화되기까지 최대 2시간 소요될 수 있음
