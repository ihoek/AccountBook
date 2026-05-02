### 폴더 구조

```
AccountBook/
frontend/
 ┣ src/
 ┃ ┣ assets/        # 이미지, 폰트
 ┃ ┣ components/    # 공통 UI 컴포넌트
 ┃ ┣ screens/       # 화면 단위
 ┃ ┣ navigation/    # 네비게이션 설정
 ┃ ┣ hooks/         # 커스텀 훅
 ┃ ┣ styles/        # 공통 스타일, 테마
 ┃ ┣ services/      # API 통신
 ┃ ┣ store/         # 상태관리 (zustand 등)
 ┃ ┣ utils/         # 유틸 함수
 ┃ ┗ types/         # 타입 정의
 ┣ App.tsx
 ┗ package.json
│
├── backend/                    # 백엔드 서버
│   ├── src/
│   │   ├── routes/             # API 라우트
│   │   ├── controllers/        # 비즈니스 로직
│   │   ├── models/             # DB 모델
│   │   ├── middleware/         # 인증 등 미들웨어
│   │   └── ai/                 # 나중에 AI 기능 추가
│   ├── prisma/                 # DB 스키마 (Prisma 사용 시)
│   └── package.json
│
├── .gitignore
└── README.md
```
