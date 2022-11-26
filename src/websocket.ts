import { OnEvent } from './enums/on-event-enum';
import { heartBeatInformationHandler } from './handlers/heart-beat-information-handler';
import { io } from './server/http';

io.on(OnEvent.CONN, socket => {
  socket.on(OnEvent.HBI, heartBeatInformationHandler);
});
