# Pinned git

https://github.com/jsontype/syntax.git
https://github.com/jsontype/syntax-sub.git
https://github.com/jsontype/home.git
https://github.com/jsontype/generalapp.git
https://github.com/jsontype/old.git

# 핵심 커밋

1. [Nuxt2를 Nuxt3으로 변경(decorator를 이용한 Class API 방식, Vuetify3)](https://github.com/jsontype/syntax/commit/e70dd8a09fee3f3a302285c62392eda6c559fcf7)
1. [이행 절차서1: 패키지 업데이트](<https://github.com/jsontype/syntax/blob/439450269871212ef6372791ae68ef314674fdab/frontend/6-vue/7-nuxt3-migration(class-api)/2-after-migration(nuxt3-pinia-vuetify3)/2-package-update(%EB%8F%99%EC%9E%91%EC%95%88%ED%95%A8)/1.txt>)
1. [이행 절차서2: 코드 변경](<https://github.com/jsontype/syntax/blob/439450269871212ef6372791ae68ef314674fdab/frontend/6-vue/7-nuxt3-migration(class-api)/2-after-migration(nuxt3-pinia-vuetify3)/3-change-code/1.txt>)

# Frequently reused symbols

1. ★★ 암기사항
1. ★ 이해사항

# Frequently reused phrases in syntax

1. 사전준비: 프로젝트를 새로 깔지 않고, 이전 챕터에서의 코드를 그대로 카피해서 가지고 온다.
1. 사전준비: server 앱을 켜둔다.
1. 사전준비: init 앱을 가지고 온다.
   이번 챕터에서는 vue2 init 앱으로 진행한다.
1. 사전준비: 이번에는 코드가 길기 때문에, 교육시 손코딩 하지말고 다음 폴더에 app1을 카피 페이스트한 뒤 VSCode상에서 파일 차분 보면서 설명한다.
1. 참조: 이 글을 작성하는 시점의 뷰 버전은 "^3.3.11"이다.
1. 테스트
   $ cd app1
   $ npm start

# Frequently reused Open API

1. 유저, 글, 앨범, 사진, 할일 등 종합
   API: https://jsonplaceholder.typicode.com/users
   API: https://jsonplaceholder.typicode.com/users/1
   API: https://jsonplaceholder.typicode.com/todos
   API: https://jsonplaceholder.typicode.com/posts
   DOC: https://jsonplaceholder.typicode.com
1. 영화
   API: https://yts.mx/api/v2/list_movies.json?sort_by=rating
   DOC: https://yts.mx/api
1. 뉴스
   API: https://api.hnpwa.com/v0/news.json
   API: https://api.hnpwa.com/v0/ask.json
1. SNS
   API: https://dummyapi.io/data/v1/user?limit=10
   DOC: https://dummyapi.io/explorer
1. 쇼핑몰
   API: https://fakestoreapi.com/products
   DOC: https://fakestoreapi.com/docs

# Open API With MCP Server

1. Public APIs (https://github.com/public-apis/public-apis): 다양한 카테고리의 무료 API 모음
1. Random User Generator (https://randomuser.me/): 무작위 사용자 프로필 데이터
1. News API (https://newsapi.org/): 뉴스 기사 및 헤드라인 (무료 플랜 제공)
1. Unsplash API (https://unsplash.com/developers): 고품질 무료 이미지
1. Giphy API (https://developers.giphy.com/): GIF 이미지 검색
1. COVID-19 API (https://covid19api.com/): 코로나19 관련 통계 데이터
1. Exchange Rates API (https://exchangeratesapi.io/): 환율 정보 (무료 플랜 제공)

# CI 체크 \* Temporary

1. readme.md 파일 다수 존재시 루트 폴더내의 파일 외에는 삭제
1. .github 폴더 존재시 github로 폴더 이름 변경

# Markdown Grammar

---

## H2 중주제

### H3 소주제

- 대항목
  - 중항목
    - 소항목

> 대인용구
>
> > 중인용구
> >
> > > 소인용구

<!-- 주석 -->

- [x] 체크박스 Checked
- [ ] 체크박스 Unchecked
      _이탤릭체_  
       **볼드체**  
       [링크](https://jsontype.github.io/home/)  
       (스페이스 2번 넣기 : 한줄바꿈)  
       (엔터키 2번 넣기 : 두줄바꿈)

---
