#!/bin/bash
npm install -g lerna
lerna init
npm install
lerna bootstrap

echo 'Setup complete!'
