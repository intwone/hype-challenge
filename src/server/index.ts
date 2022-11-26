import '../websocket';
import { httpServer } from './http';

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
