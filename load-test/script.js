import http from "k6/http";
import { check } from "k6";

export let options = {
  stages: [
    { duration: "1m", target: 500 },
    { duration: "3m" },
    { duration: "1m", target: 0 }
  ],
  thresholds: {
    checks: ["rate>0.99"],
    http_req_duration: ["avg<50", "p(95)<80"]
  }
};

export default function() {
  check(http.get(`${__ENV.TARGET_URL}`), {
    "is status 200": (r) => r.status === 200
  });
};
