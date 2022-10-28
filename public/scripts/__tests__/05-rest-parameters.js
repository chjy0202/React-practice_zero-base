// -----------------------------------------------------------------------------
// TODO
// -----------------------------------------------------------------------------
// - [ ] 나머지 매개변수(Rest Parameters)을 arguments 객체를 대신하도록 구성합니다.
// - [ ] 함수 문 또는 식 → 화살표 함수 식으로 변경합니다.
// -----------------------------------------------------------------------------

const firstPlusAndRestMultiplyCount = (first, ...rest) => {
  // for문 → Array.prototype.reduce 메서드 구문으로 변경해보세요.
  return rest.reduce(
    (total, currentCount, index) =>
      index === 0 ? (total += currentCount) : (total *= currentCount),
    first
  );

  // for (var i = 0, l = rest.length; i < l; ++i) {
  //   if (i === 0) first += rest[i];
  //   else first *= rest[i];
  // }

  // return first;
};

// ------------------------------------------------------------------------------
// TEST
// ------------------------------------------------------------------------------
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// ------------------------------------------------------------------------------

test('firstPlusAndRestMultiplyCount(101, 3, 6, 9) 결과 값은 5000보다 크거나 같고, 10000보다 작다.', () => {
  let value = firstPlusAndRestMultiplyCount(101, 3, 6, 9);
  expect(value).toBeGreaterThanOrEqual(5000);
  expect(value).toBeLessThan(10000);
});
