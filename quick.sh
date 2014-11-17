#!/bin/bash          
git checkout master
git add -A
git commit -m "Automatic message"
git checkout gh-pages
git merge master
git checkout master
git push