#!/bin/bash 

helm my-ingress ingress-nginx/ingress-nginx \
  -n ingress-nginx \
  --create-namespace
