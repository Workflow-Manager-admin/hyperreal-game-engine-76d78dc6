#!/bin/bash
cd /home/kavia/workspace/code-generation/hyperreal-game-engine-76d78dc6/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

