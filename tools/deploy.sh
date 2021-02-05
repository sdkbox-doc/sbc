#!/usr/bin/env bash

set -e

# vuepress dist folder
cd $GITHUB_WORKSPACE/docs/.vuepress/dist

git init
git config user.name "HugoHuang" --local
git config user.email "hugohuang1111@gmail.com" --local

# Generate a CNAME file
# echo $CNAME > CNAME

DEPLOY_REPO="https://${ACCESS_TOKEN}@github.com/sdkbox-doc/sbc-doc.git"
# DEPLOY_REPO="https://github.com/sdkbox-doc/sbc-doc.git"

git branch -m gh-pages
git add .
git commit -m "Deploy"
git push --force $DEPLOY_REPO gh-pages
rm -fr .git

cd $GITHUB_WORKSPACE

echo "Successfully deployed!"
