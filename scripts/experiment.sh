#!/bin/bash

if [ $CUSTOM_GH_ACCESS_KEY == "vcinc" ]; then
  echo "$END_RESULT"
  echo "✔ done";
  exit 0;
else
  echo "✗ could not accept the variable";
  exit 1;

