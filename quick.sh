#!/bin/bash   
commitmessage = "$1"       
git checkout master
git add -A
git commit -m "$S1"
git checkout gh-pages
git merge master
git checkout master
git push