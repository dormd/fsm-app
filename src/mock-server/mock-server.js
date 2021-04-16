import { createServer } from 'miragejs'
import getFSMConfig from './fsm-config';

export default function initializeMockServer() {
  createServer({
    routes() {
      this.get('/fsm/config', getFSMConfig);
    },
  });
}