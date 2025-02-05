HOW TO MERGE:

git add .

git commit -m 'finished branch'

git push -u origin branchName

git checkout main

git pull origin main

git merge branchName

git push origin main

git branch -d branchName

git push origin --delete branchName

/

HOW TO START BRANCH:

git checkout -b <new-feature-branch>

git add .

git commit -m "Started new feature"

git push -u origin <new-feature-branch>

/

SYNC BRANCH WITH MAIN:

git checkout main

git pull origin main

git checkout <your-branch-name>

git rebase main

git push --force
