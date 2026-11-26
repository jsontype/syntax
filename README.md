# 이 저장소로 공부하는 법

이 저장소는 순서대로 쌓아 둔 공책이다. 폴더 이름 앞의 숫자가 순서다. 앞 파일을 말로 설명할 수 있을 때 다음 파일을 연다.

파일은 하나씩 본다. 읽고, 직접 다시 치고, 값을 하나 바꾼 뒤 화면이나 콘솔에 무엇이 나올지 맞춘다. 틀리면 그 파일에 남는다. 스크롤만 내린 폴더를 본 것으로 치지 않는다.

다음 절의 `★★` 는 외울 기호, `★` 는 설명할 수 있어야 하는 기호다. 이름 끝이 `(skip)` 인 폴더는 첫 바퀴에서 빼도 된다. `[old]` 는 보관용이라 거기서 시작하지 않는다.

## 두 갈래

맨 위는 두 폴더다. 문법 공부는 `code/` 에서, 도구와 일하는 법은 `agent/` 에서 본다.

- `code/`: 직접 치는 코드. `frontend`, `backend`, `knowledge`(현장 노트), `assets`(이미지·음악·mock DB).
- `agent/`: 환경 구축, Git, AI 도구(Claude·Cursor·Codex)와 AI 시대 생존 커리큘럼. 코드보다 절차와 판단 기준이 적혀 있다.

처음 오면 `agent/1-common/1-환경구축` 으로 자리를 만들고, 그다음 `code/frontend/1-html` 에서 시작한다.

## 프론트엔드, 순서대로

JavaScript가 손에 익을 때까지 `code/frontend/` 안에 있는다. 프레임워크는 그 다음이다.

1. `code/frontend/1-html`
   브라우저에서 번호 순으로 연다. `1-a-to-z.html`, `2-명형동.html`(태그가 명사·수식·동사 중 무엇인지), `3-display.html`, `4-form.html`, `5-snippet.html`. 생김새보다 각 태그가 무슨 역할인지 먼저 본다.

2. `code/frontend/2-css`
   - `1-css-syntax`: `1-초급`, 그다음 `2-중급`, 그다음 `3-고급`.
   - `2-css-추가내용`: 세 단계를 마친 뒤의 보강.
   - `3-css-framework(skip)`: CSS 프레임워크가 필요할 때 연다.

3. `code/frontend/3-js`
   뒤 폴더를 읽게 해 주는 트랙이다. React는 여기를 끝낸 뒤에 연다.
   - `1-syntax(초급-기초문법)`: JavaScript가 무엇인지, 변수, 조건문, 반복문, 함수, 그다음 API 호출과 `9-movieapp`. `6-이벤트(skip)`, `7-DOM조작(skip)` 은 표시대로 첫 바퀴에서 빼도 된다. 클릭과 페이지 트리가 아직 흐리면 movieapp 전에 돌아온다. `부록-*(skip)` 은 본문을 다 본 뒤의 참고다.
   - `2-syntax(초중급-fw전)`: 어떤 프레임워크보다 먼저 끝낸다.
   - `3-syntax(중급-crud전)`: 만들기·읽기·고치기·지우기 화면보다 먼저 끝낸다.
   - `4-syntax(고급-api전)`: 실제 API에 기대기 전에 끝낸다.
   - `5-알고리즘문제풀기`: 중급 폴더와 나란히 문제를 푼다. 문법 폴더 대신 풀지 않는다.

4. `code/frontend/4-ts`
   JavaScript 중급 다음, React 전이나 옆에서 시작한다. 순서: `1-syntax(초급)`, `2-syntax(중급)`, `3-syntax(고급)`. 이미 아는 JavaScript 파일에 타입을 붙인다. TypeScript는 프레임워크 튜토리얼로 시작하지 않는다.

5. `code/frontend/5-react`
   `1-react`, 그다음 `2-next`. `[old]` 는 지나간다.
   `1-react` 안에서는 번호대로 간다. 문법, 스타일, 라우터, 성능, i18n, 배포, 린트, 테스트, 전역 상태, 비동기, TypeScript, BFF, 라이브러리. `14-skipped` 는 그 주제가 필요할 때 연다.

6. `code/frontend/6-vue`
   폴더를 전부 걷지 않는다. 지금 경로는 `3-vue3(composition-api)`, 그다음 `4-nuxt3(composition-api)` 다. Vue 2, Nuxt 2, class-API, 마이그레이션 폴더는 예전 코드를 볼 때의 참고다.

7. `code/frontend/7-svelte`
   React나 Vue로 앱을 하나 만든 뒤에 `1-svelteKit-mpa` 를 본다.

8. `code/frontend/8-libs`
   `1-use-dependancies`: 그 기능을 패키지 없이 스케치할 수 있을 때 남의 패키지를 쓴다.
   `2-make-dependancies`: 패키지를 여러 개 써 본 뒤에 작은 패키지를 배포한다.

## 프론트엔드 다음

`code/frontend/3-js/4-syntax(고급-api전)` 이 익숙해지면 `code/backend/` 다. 컴퓨터 과학 노트, Express, Swagger, Go, PostgreSQL. `3-api-swagger(할차례)` 가 지금 할 차례다. `[old](window)` 는 보관용이다.

`code/knowledge/` 는 강좌가 아니다. 일이 그 노트를 필요로 할 때 연다.

- `1-projects`: 애드센스, 크롬 확장, 비트코인 분석, 스트라이프 결제, 새 앱 추가.
- `2-infra`: 취약점 대응, Docker, NAS, AWS, Sentry, Terraform, 관측(로깅·메트릭·SLO), Cloudflare.
- `3-tools`: 셸(basic·vim·batch·CORS·alias), IDE.
- `4-교육`: 학생용(부트캠프·현장 사양·바이브 코딩·최신 기술), 상담(도입·학습·취업·비자·세금·면접), 설계(요건 정의·시스템 디자인·SEO·보안), 최신 AI 현장(착임 첫날·문제 발굴·손이 빌 때·커뮤니케이션·루틴), 최신 AI 면접 동향(풀사이클·FDE·로드맵). 현장용이라 문법 공부 첫 달의 순서는 아니다.

`code/assets/` 는 예제가 쓰는 이미지·음악(`1-statics`)과 CSV·SQL mock 데이터(`2-mock-db`)다. 따로 읽지 않는다.

## agent, 도구와 일하는 법

`agent/` 는 코드가 아니라 절차다. 번호 순이지만 한 번에 다 읽지 않고, 그 상황이 오면 연다.

1. `agent/1-common`
   - `1-환경구축`: `1-온보딩`(mac · windows · tools), `2-오프보딩`(mac · windows). 새 PC를 받으면 온보딩, 떠날 때 오프보딩을 위에서부터 그대로 따른다.
   - `2-git`: `1-syntax`(설치, SourceTree, git, markdown, convention, SSH clone, PR draft, gitignore, GitHub), `2-github-actions(ci-cd)`, `3-github-review-dog`, `4-monorepo`, `5-테스트자동화`. `1-syntax` 는 첫 커밋 전에 끝낸다.

2. `agent/2-ai`
   `1.txt` 가 Cursor · Claude · Codex 를 언제 쓰는지 한 장으로 가른다. 그다음 `1-claude`, `2-cursor`, `3-codex`. `4-활용` 은 시장 트렌드, MCP 서버(외부 API 연계), PR 에이전트, Cursor 리뷰·깃 자동화, Claude 권한 스킵이다. 프레임워크 하나로 앱을 만들어 본 뒤에 연다.

3. `agent/3-survive`
   AI 시대 엔지니어 생존 커리큘럼. `1.txt` 가 목차다. `1-아키텍처`(서버 최소화, 프론트 주도, 데이터 모델링, 상태 관리), `2-오케스트레이션`(명세, 사이드 이펙트, 환각 보안, 프로파일링), `3-디버깅`(복합 장애, 네트워크 홉, 런타임 메모리, 자원 관리), `4-비즈니스`(고객 문제, UX, 명세 번역, 가치 전략). `code/backend` 까지 한 바퀴 돈 뒤에 읽는다.

# Frequently reused symbols

1. ★★ Should Memorize
1. ★ Should Understand

# Open API

1. Post
   API: https://jsonplaceholder.typicode.com/users
   API: https://jsonplaceholder.typicode.com/users/1
   API: https://jsonplaceholder.typicode.com/todos
   API: https://jsonplaceholder.typicode.com/posts
   DOC: https://jsonplaceholder.typicode.com
1. Movie
   API: https://yts.mx/api/v2/list_movies.json?sort_by=rating
   DOC: https://yts.mx/api
1. News
   API: https://api.hnpwa.com/v0/news.json
   API: https://api.hnpwa.com/v0/ask.json
1. SNS
   API: https://dummyapi.io/data/v1/user?limit=10
   DOC: https://dummyapi.io/explorer
1. EC
   API: https://fakestoreapi.com/products
   DOC: https://fakestoreapi.com/docs

# Open API With MCP Server

1. Public APIs (https://github.com/public-apis/public-apis)
1. Random User Generator (https://randomuser.me/)
1. News API (https://newsapi.org/)
1. Unsplash API (https://unsplash.com/developers)
1. Giphy API (https://developers.giphy.com/)
1. COVID-19 API (https://covid19api.com/)
1. Exchange Rates API (https://exchangeratesapi.io/)

# Markdown Grammar

---

## H2 section

### H3 subsection

- Major item
  - Middle item
    - Minor item

> Major quote
>
> > Nested quote
> >
> > > Deeply nested quote

<!-- comment -->

- [x] Checkbox checked
- [ ] Checkbox unchecked
      _italic_  
       **bold**  
       [link](https://jsontype.github.io/home/)  
       (two trailing spaces: one line break)  
       (press Enter twice: a new paragraph)

---

# Thank you !
