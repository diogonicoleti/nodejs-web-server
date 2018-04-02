#!/bin/bash

TARGET_URL="${1:-"http://localhost:3000"}"

echo "Running load test:"
echo "(default) Ramp up to 500 VUs for 1 minute, stay flat at 500 VUs for 3 minutes then ramp down to 0 VUs for another 1 minute:"
k6 run -e TARGET_URL=$TARGET_URL script.js
