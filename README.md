# 마크다운 블로그 (정적 사이트)

마크다운으로 글을 작성하고 GitHub Pages에 호스팅하는 정적 블로그입니다.

## 기능

- ✅ 정적 빌드 → GitHub Pages 배포
- ✅ 마크다운 + GFM(테이블, 체크박스) + 코드 하이라이트 + 제목 앵커 링크
- ✅ Home, About, Blog 메뉴
- ✅ 월별 파일 관리 (`content/blog/YYYY/MM/` 구조)
- ✅ 태그/카테고리 분류 및 필터 페이지
- ✅ 다크 모드 지원 (시스템 설정 자동 적용)

## 시작하기

```bash
npm install
npm run dev    # 개발 서버 (http://localhost:4321)
npm run build  # 정적 빌드 → dist/
npm run preview # 빌드 결과 미리보기
```

## 글 작성

`src/content/blog/YYYY/MM/DD/파일명.md` 경로에 마크다운 파일을 추가하세요.  
(연/월/일 기준 폴더 구조)

```yaml
---
title: "글 제목"
description: "요약 (선택)"
pubDate: 2025-02-22
tags: ["태그1", "태그2"]
category: "카테고리"
draft: false
---

# 본문 내용
```

## GitHub Pages 배포

1. **Settings → Pages**에서 Source를 **Deploy from a branch**로 설정
2. Branch: **gh-pages**, Folder: **/ (root)** 선택
3. `main` 브랜치에 푸시 시 자동 배포
4. 배포 완료 후 **https://cursorkdykd12-debug.github.io/my_blog/** 에서 확인
