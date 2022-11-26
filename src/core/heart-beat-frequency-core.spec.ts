import { Status } from '../enums/status-enum';
import { heartRateBeatCalculator } from './heart-beat-frequency-core';

describe('Heart Beat Frequency Core', () => {
  it('should return zero when time is smaller or equal zero', () => {
    const invalidTime = 0;
    const sut = heartRateBeatCalculator(invalidTime);
    expect(sut).toEqual({ status: Status.FAIL, output: 0 });
  });

  it('should return correct output when time is greater than zero', () => {
    const validTime = 100;
    const sut = heartRateBeatCalculator(validTime);
    expect(sut).toEqual({ status: Status.SUCCESS, output: 0.11555378430782076 });
  });
});
