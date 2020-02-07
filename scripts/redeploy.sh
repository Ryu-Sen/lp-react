#!bin/sh

git pull origin master
yarn build
git commit -m 'origin/master'
git push origin master