### 폴더 구조

```
AccountBook/
├── frontend/                   # React Native (Expo)
│   ├── app/
│   │   ├── (tabs)/
│   │   │   ├── index.tsx       # 홈 (대시보드)
│   │   │   ├── plan.tsx        # 인생계획
│   │   │   ├── transaction.tsx # 수입/지출
│   │   │   ├── asset.tsx       # 자산
│   │   │   └── profile.tsx     # 프로필
│   │   └── _layout.tsx
│   ├── components/             # 재사용 컴포넌트
│   ├── store/                  # Zustand 상태관리
│   ├── services/               # API 호출 함수 모음
│   ├── hooks/                  # 커스텀 훅
│   ├── types/                  # TypeScript 타입 정의
│   ├── assets/
│   ├── app.json
│   └── package.json
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
