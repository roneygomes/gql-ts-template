import "mocha";
import { expect } from "chai";

describe('example integration test', () => {
  it('tests something very obvious', () => {
    // given
    const a = 1;
    const b = 1;

    // when
    const result = a + b;

    // then
    expect(result).to.equal(2);
  });
});