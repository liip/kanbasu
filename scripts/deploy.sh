#!/bin/bash
cp CNAME dist/CNAME
git stash save
git checkout -B gh-pages
git add -f dist
git commit -am "Rebuild website"
git filter-branch -f --prune-empty --subdirectory-filter dist
git push -f origin gh-pages
git checkout -
git stash pop --quiet
