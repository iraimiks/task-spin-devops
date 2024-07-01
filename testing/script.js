import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
  { duration: '10m', target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
  { duration: '30m', target: 200 }, // stay at higher 200 users for 30 minutes
  { duration: '5m', target: 0 }, // ramp-down to 0 users
  ]
}


export default function() {
  http.get('http://localhost:55647/');
  sleep(1);
}
