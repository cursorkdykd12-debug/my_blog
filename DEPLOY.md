# GitHub Pages 배포 가이드

## 404 오류 해결

"404 - There isn't a GitHub Pages site here" 오류가 발생하면 아래를 확인하세요.

### 1단계: GitHub Pages 소스 설정 (가장 중요)

1. https://github.com/cursorkdykd12-debug/my_blog 저장소로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Build and deployment** 섹션에서:
   - **Source**를 **GitHub Actions**로 선택
5. 저장 (자동 저장됨)

![Pages 설정 위치: Settings > Pages > Source: GitHub Actions]

### 2단계: 워크플로우 실행

- `main` 브랜치에 푸시하면 자동으로 배포가 시작됩니다
- 또는 **Actions** 탭 → **Deploy to GitHub Pages** 워크플로우 → **Run workflow** 수동 실행

### 3단계: 배포 확인

- **Actions** 탭에서 워크플로우가 초록색 체크(성공)로 완료되었는지 확인
- 배포 완료 후 접속: **https://cursorkdykd12-debug.github.io/my_blog/**

### 문제 발생 시

- **Actions** 탭에서 실패한 워크플로우 클릭 → 에러 로그 확인
- Pages 설정이 **GitHub Actions**인지 다시 확인
- 저장소가 Public인지 확인 (Private은 Pro 플랜 필요)
