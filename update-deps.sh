#!/bin/sh
npx ncu -u
rm -rf ./package-lock.json ./node_modules && npm i
