import { Status } from '../enums/status-enum';
import { HeartBeatFrequencyResponseProtocol } from '../protocols/hear-beat-information-protocol';

export const heartRateBeatCalculator = (time: number): HeartBeatFrequencyResponseProtocol => {
  if (time <= 0 || !time) return { status: Status.FAIL, output: 0 };
  const output =
    -0.06366 +
    0.12613 * Math.cos(Math.PI * (time / 500)) +
    0.12258 * Math.cos(Math.PI * (time / 250)) +
    0.01593 * Math.sin(Math.PI * (time / 500)) +
    0.03147 * Math.sin(Math.PI * (time / 250));
  return { status: Status.SUCCESS, output };
};
