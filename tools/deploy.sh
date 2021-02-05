#!/usr/bin/env bash

set -e

ACCESS_TOKEN=$1

echo $ACCESS_TOKEN
echo $GITHUB_WORKSPACE

# vuepress dist folder
cd $GITHUB_WORKSPACE/docs/.vuepress/dist

git init
git config user.name "HugoHuang" --local
git config user.email "hugohuang1111@gmail.com" --local

# Generate a CNAME file
# echo $CNAME > CNAME

DEPLOY_REPO="https://${ACCESS_TOKEN}@github.com/sdkbox-doc/sbc-doc.git"

git add .
git commit -m "Deploy"
git push --force $DEPLOY_REPO master:gh-pages
rm -fr .git

cd $GITHUB_WORKSPACE

echo "Successfully deployed!"
