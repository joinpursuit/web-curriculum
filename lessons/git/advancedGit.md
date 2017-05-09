# Git

## Objectives 
* Students will be able to fork, push, and make pull requests to collaborate on a project.
* Students will be able to resolve merge conflicts.

## MUST READ!!!
[Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/syncing) - great reading on fundamental and advanced Git.

## MUST WATCH!!
[Egghead Git Videos](https://egghead.io/courses/practical-git-for-everyday-professional-use) - 20 minutes worth of videos
* Create local repos with git init
* Copy remote repos to local machines with git clone
* Capture code history snapshots with git add/commit/push
* Document repos with README files
* Sync local and remote repos with git pull
* Isolate feature development with git branch
* Sync branches with git merge
* Resolve merge conflicts with git status

## `git remote`
```
$ git remote
$ git remote -v
$ git remote add <NAME> <URL>
$ git remote rm <NAME>
$ git remote rename <OLDNAME> <NEWNAME>
```

## `git branch`
```
$ git branch
$ git branch -d <BRANCHNAME>
$ git branch -D <BRANCHNAME>
$ git branch -m <NEWBRANCHNAME>
$ git checkout <OTHERBRANCH>
4 git checkout -b <NEWBRANCHNAME>
```

## `git push`
Pushes local repo to the specified remote.
```
$ git push <REMOTENAME> <BRANCHNAME>
```

## `git merge`
Combines commit histories.
```
$ git merge <OTHERBRANCH>
```

## `git pull`
The git pull function is actually a combination of two git commands: `git fetch` and `git merge`.
```
$ git pull <REMOTENAME> <BRANCH>
```
