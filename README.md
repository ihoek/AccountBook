# 💰 가계부 (AccountBook)

React + Electron으로 개발된 데스크톱 가계부 애플리케이션입니다.

## ✨ 주요 기능

### 🏠 메인화면

- 가계부 시스템 소개
- 주요 기능 안내

### 🧮 정산 기능

- **인원 관리**: 동적으로 인원 추가/삭제
- **항목 관리**: 지출 항목 추가/삭제
- **실시간 계산**: 총액 자동 계산
- **인라인 편집**: 테이블에서 직접 데이터 편집
- **한글 입력 지원**: 인원 이름 한글 입력 완벽 지원

### 💳 카드 관리

- 카드 내역 확인 (개발 예정)

### ⚙️ 설정

- 앱 설정 관리 (개발 예정)

## 🛠️ 기술 스택

- **Frontend**: React 18, Vite
- **Desktop**: Electron
- **Styling**: Styled Components
- **State Management**: React Context API
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. 빌드

```bash
npm run build
```

## 📁 프로젝트 구조

```
src/
├── component/           # 컴포넌트
│   ├── Home/           # 메인화면
│   ├── Calculate/      # 정산 기능
│   ├── Card/           # 카드 관리
│   ├── Settings/       # 설정
│   ├── Sidebar/        # 사이드바
│   └── Main/           # 메인 레이아웃
├── context/            # Context API
│   └── MenuContext.jsx # 메뉴 상태 관리
├── Utils/              # 유틸리티
│   └── svgfiles.jsx    # SVG 아이콘
├── electron/           # Electron 설정
│   ├── main.js         # 메인 프로세스
│   └── preload.js      # 프리로드 스크립트
└── App.jsx             # 메인 앱 컴포넌트
```

## 🎯 주요 특징

### 📊 정산 시스템

- 스프레드시트 형태의 직관적인 인터페이스
- 실시간 총액 계산
- 개인별 분담금 관리
- 동적 인원 추가/삭제

## 📝 스크립트 설명

- `npm run dev`: Vite 개발 서버와 Electron을 동시에 실행
- `npm run dev:vite`: Vite 개발 서버만 실행
- `npm run dev:electron`: Electron 앱만 실행
- `npm run build`: 프로덕션 빌드
- `npm run lint`: ESLint로 코드 검사
- `npm run preview`: 빌드된 앱 미리보기
