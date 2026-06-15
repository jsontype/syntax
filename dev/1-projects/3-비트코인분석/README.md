# BTC_SIGNAL // buy-timing terminal ₿

실시간 비트코인 지표 6종을 합성해 **"지금이 살 타이밍인가?"**를 0~100 점수로 보여주는 해커 감성 대시보드 (React + Vite).

![stack](https://img.shields.io/badge/react-18-149eca) ![stack](https://img.shields.io/badge/vite-5-646cff) ![data](https://img.shields.io/badge/data-live-00ff9c)

> ⚠️ 본 점수는 공개 지표를 합성한 **참고 신호**일 뿐 투자 자문이 아닙니다. DYOR.

## 실행

### A. 무설치 (가장 빠름) ⚡

[`standalone.html`](standalone.html) 더블클릭 → 끝. (React를 CDN으로 로드, Node 불필요 · 인터넷 필요)

### B. Vite 개발 서버 (Node.js 필요)

```bash
npm install
npm run dev        # http://localhost:5180 자동 오픈
npm run build      # 정적 빌드
npm run verify     # 라이브 데이터로 지표 엔진 검증 (node)
```

## 데이터 소스 (전부 키 없이 브라우저 직접 호출 · CORS 허용 확인)

| 데이터 | 1차 | 폴백 |
| --- | --- | --- |
| 현재가 / 24h | CoinGecko `simple/price` | Binance `ticker/24hr` |
| 일봉 히스토리 | Binance `klines` (1000일) | CoinGecko `market_chart` (365일) |
| 공포·탐욕 지수 | Alternative.me `fng` | localStorage 캐시 |

한 소스가 죽어도 나머지로 동작(부분 실패 허용), 마지막 성공값은 localStorage에 캐시됩니다.

## 매수 타이밍 점수 (0~100, 높을수록 매수 우호)

6개 지표의 0~100 부분점수를 가중 합성합니다. (결측 지표는 제외하고 가중치 자동 재정규화)

| 지표 | 가중 | 매수 신호 | 성격 |
| --- | --- | --- | --- |
| **RSI(14, Wilder)** | 22% | <30 과매도 | 역추세 |
| **공포·탐욕 합성** | 22% | 극공포 | 역발상 |
| **Mayer Multiple** (가격/200일선) | 18% | <0.8 | 역발상 밸류 |
| **MACD(12·26·9)** 히스토그램 | 18% | 바닥 상향전환 | 모멘텀 |
| **365일 고점대비 낙폭** | 12% | -50% | 역발상 |
| **50/200 골든·데드 크로스** | 8% | 골든크로스 | 추세 필터 |

**판정 밴드:** `80+` STRONG BUY · `65~80` ACCUMULATE · `45~65` NEUTRAL · `25~45` CAUTION · `0~25` OVERHEATED

> 지표 공식은 멀티에이전트 워크플로로 도출하고, RSI Wilder 정준 테스트벡터(70.46 / 66.25)와
> 라이브 데이터로 검증했습니다. `npm run verify` 로 재현 가능합니다.

## 화면

- **중앙 대형 게이지** = 매수 타이밍 점수(밴드 색: 녹=매수 / 황=중립 / 적=과열)
- BTC 현재가·24h·거래량·시총 + 가격 스파크라인 + 점수 추이
- 지표 6종 카드: 원시값 + 추이(미니차트) + 0~100 부분점수 막대
- 소스 상태 배지(live / fallback / cached / offline), 데이터 오래되면 `STALE`
- 매트릭스 레인 · CRT 스캔라인 · 부팅 시퀀스 · 내장 터미널

## 내장 터미널 명령어

`help` 입력으로 시작.

| 명령 | 설명 |
| --- | --- |
| `score` | 현재 점수 + 판정 + coverage |
| `why` | 무엇이 점수를 끌어올리/내리는지(가중 기여도) |
| `show <ind>` | 지표 상세 (`rsi`\|`macd`\|`fng`\|`mayer`\|`dd`\|`cross`) |
| `bands` | 5단계 판정 밴드 표 |
| `sources` | 데이터 소스 상태/신선도 |
| `refresh` | 전체 재조회 |
| `theme <green\|cyan\|amber\|red>` · `matrix <on\|off>` | 외형 |

## 한계

- 합성 점수/가중치는 일반적 해석에 기반한 **출발점**이며, 실제 운용 전 비트코인 일봉 백테스트로 보정 필요.
- RSI/MACD는 강추세장에서 오래 과매수/과매도에 머물 수 있음(단독 진입 위험).
- 일부 지역에서 `api.binance.com` 차단 시 히스토리가 CoinGecko(365일, 라인차트)로 강등됩니다.
