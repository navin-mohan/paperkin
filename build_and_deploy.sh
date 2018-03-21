yarn build
git commit -am "new build"
git push origin master
git push origin `git subtree split --prefix build master`:gh-pages --force
