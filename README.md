HOW TO MERGE:

git add .

git commit -m "Completed feature on branch"

git push origin <your-branch-name>

git checkout main

git pull origin main

git merge <your-branch-name>

git push origin main

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
