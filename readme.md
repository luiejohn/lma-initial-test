Existing folder

cd existing_folder
git init
git remote add origin https://gitlab.com/ideahub-DEVGROUP/lma-sg/frontend.git
git add .
git commit -m "Commit Message"
git pull
git push -u origin master


git branch develop
git branch --set-upstream-to=origin/develop develop
