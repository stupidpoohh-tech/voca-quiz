# 영영정의 빈칸 학습 웹

## 실행
정적 웹으로 바로 배포할 수 있습니다.

## 데이터 추가
`data.json`의 `words` 배열에 단어를 추가하면 됩니다.

구조 예시:
```json
{
  "word": "booth",
  "definition": "a small temporary structure at an exhibition",
  "meaning": "부스",
  "questions": [
    {
      "word": "booth",
      "question": "a small (    ) structure at an exhibition",
      "choices": ["temporary","temple","temperature","tempo"],
      "answer": "temporary"
    }
  ]
}
```

기능:
- 단어 목록
- 영영정의
- 한국어 뜻
- 단어별 빈칸 4지선다
- 정오답 표시
- 단어별 완료 상태
- 오답 횟수 로컬 저장
- 다시 풀기 / 다음 단어
