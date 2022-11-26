import { heartRateBeatCalculator } from '../core/heart-beat-frequency-core';
import { EmitEvent } from '../enums/emit-event-enum';
import { HeartBeatInformationEventProtocol } from '../protocols/hear-beat-information-protocol';
import { io } from '../server/http';

export const heartBeatInformationHandler = ({ time }: HeartBeatInformationEventProtocol): void => {
  const { output, status } = heartRateBeatCalculator(time);

  io.sockets.emit(EmitEvent.HBO, {
    status,
    output,
  });
};
