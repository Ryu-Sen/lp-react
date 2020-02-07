#!bin/sh

yarn build
git commit -m 'deployment'
git push origin master