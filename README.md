# 🚌 ShuttleCock

> 사내 셔틀버스 위치 정보 확인 서비스

<br />

## ✨ Features

- 실시간 셔틀버스 위치 정보 확인
- 셔틀버스 운영 시간표 확인
- 실시간 마을버스 위치 정보 확인
- 사용자 데이터 연동
- 게시판

<br />

## 🚀 Getting Started

로컬 환경에서 앱을 실행하는 방법입니다.

### ✅ Prerequisites

해당 앱을 실행하기 위한 필수 조건입니다.

|        | 버전     | 설명                                                                                                                      |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| nodejs | v20.15.1 | - 2024년 7월 기준 LTS 버전.<br />- .nvmrc에 버전 명시되어있음.<br />- 최초 프로젝트 클론 시 nvm use 입력하여 버전 맞추기. |
| pnpm   | v9.6.0   | - 패키지 매니저는 pnpm 으로 통일.<br />- package.json에 버전 명시되어있음.                                                |

1. pnpm 설치

```shell
# pnpm 설치
npm install -g pnpm
```

2. node setup

```shell
# .nvmrc 기준 node version 설치
# nvm을 사용하지 않는다면 수동으로 노드버전을 맞춰주세요.
nvm use
```

### 📦 Installation

1. 프로젝트 클론

```shell
git clone https://github.com/shuttle-cock/shuttle-cock_client
```

2. 프로젝트 디렉토리로 이동

```shell
cd shuttle-cock_client
```

3. 종속성 설치

```shell
pnpm install
```

4. 개발 서버 시작

```
pnpm dev
```

<br />

## 🔧 Tech Stack

| 라이브러리      | Link                                                                   | Description                                |
| --------------- | ---------------------------------------------------------------------- | ------------------------------------------ |
| dayjs           | [https://day.js.org/](https://day.js.org/)                             | 자바스크립트 날짜 라이브러리               |
| framer-motion   | [https://www.framer.com/motion/](https://www.framer.com/motion/)       | 애니메이션 라이브러리                      |
| pnpm            | [https://pnpm.io/ko/](https://pnpm.io/ko/)                             | 패키지 매니저                              |
| react           | [https://ko.legacy.reactjs.org/](https://ko.legacy.reactjs.org/)       | UI 자바스크립트 라이브러리                 |
| react-hook-form | [https://www.react-hook-form.com/](https://www.react-hook-form.com/)   | React 폼 라이브러리                        |
| react-leaflet   | [https://react-leaflet.js.org/](https://react-leaflet.js.org/)         | Leaflet 지도를 위한 React 컴포넌트         |
| react-query     | [https://tanstack.com/query/latest](https://tanstack.com/query/latest) | 데이터 페칭 라이브러리                     |
| storybook       | [https://storybook.js.org/](https://storybook.js.org/)                 | UI 개발, 테스트 및 문서화                  |
| typescript      | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)     | 자바스크립트의 타입이 있는 상위 언어       |
| vanilla-extract | [https://vanilla-extract.style/](https://vanilla-extract.style/)       | 런타임이 없는 CSS-in-TypeScript 프레임워크 |
| vite            | [https://ko.vitejs.dev/guide/](https://ko.vitejs.dev/guide/)           | 프론트엔드 번들링                          |
| zustand         | [https://zustand-demo.pmnd.rs/](https://zustand-demo.pmnd.rs/)         | 상태 관리 라이브러리                       |

<br />

## ⚙️ Environment Variables

환경 변수를 설정하는 방법입니다.

```shell
# .env.example 기준으로 .env 파일 생성
```
