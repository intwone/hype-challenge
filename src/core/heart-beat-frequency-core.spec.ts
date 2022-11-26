import { Status } from '../enums/status-enum';
import { heartRateBeatCalculator } from './heart-beat-frequency-core';

describe('Heart Beat Frequency Core', () => {
  it('should return zero when time is smaller or equal zero', () => {
    const invalidTime = 0;
    const sut = heartRateBeatCalculator(invalidTime);
    expect(sut).toEqual({ status: Status.FAIL, output: 0 });
  });
});
