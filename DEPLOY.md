# GitHub Pages 배포 가이드

## 404 오류 해결 - gh-pages 브랜치 방식

이 저장소는 **gh-pages 브랜치** 방식으로 배포합니다. 아래 설정을 **정확히** 따라해주세요.

---

## 필수 설정 (Settings → Pages)

1. https://github.com/cursorkdykd12-debug/my_blog 저장소로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Build and deployment** 섹션에서:

   | 항목 | 설정값 |
   |------|--------|
   | **Source** | **Deploy from a branch** ← (GitHub Actions가 아님!) |
   | **Branch** | `gh-pages` |
   | **Folder** | `/ (root)` |

5. **Save** 클릭

---

## 배포 트리거

- `main` 브랜치에 푸시 시 자동 배포
- 또는 **Actions** 탭 → **Deploy to GitHub Pages** → **Run workflow** 수동 실행

---

## 접속 주소

배포 완료 후 (2~3분 소요):

**https://cursorkdykd12-debug.github.io/my_blog/**

※ `https://cursorkdykd12-debug.github.io/` (루트)가 아닌 **/my_blog** 경로까지 입력해야 합니다.

---

## 문제 해결

- **첫 배포**: gh-pages 브랜치가 아직 없다면, Actions에서 워크플로우를 한 번 실행하면 생성됩니다
- **404 계속 발생**: Pages 설정에서 Source가 **"Deploy from a branch"** 인지, Branch가 **gh-pages** 인지 다시 확인
- **Actions 실패**: Actions 탭에서 실패한 실행을 클릭해 에러 로그 확인
