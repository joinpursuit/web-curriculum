# Git

## Objectives 
Students will be able to fork repositories and make pull requests.

The following commands configure Git to label and associate commits with your name and email.
```
$ git config --global user.name "YOUR NAME"
$ git config --global user.email "YOUR EMAIL"
```

## Adding a Remote
[Remote Reading and Guide](https://help.github.com/articles/adding-a-remote/) <br>

The command `git remote` shows you the names of remotes you've added to your repo.
```
$ git remote
```
The command `git remote -v` shows you both the names and urls associated with a particular repo.
```
$ git remote -v
```
You can add a repo using the following command. `origin` is a conventional remote name.
```
$ git remote add <name> <url>
```
You rename a remote using `rename`.
```
$ git remote rename <oldName> <newName>
```
You can delete a remote using `rm`.
```
$ git remote rm <remote name>
```

## Forking a Repo
[Fork Reading and Guide](https://help.github.com/articles/fork-a-repo/) <br>
1) Go to a repository you want to make a copy of and click the fork button at the top. This will generate a copy of the repo in your GitHub profile.
2) Use the green clone or download button to get a copy of your fork onto your computer. Any changes you make should be pushed to the fork.

## Pull Request
A pull request is a request to merge the changes and commits in your fork to the main project repository. You

## Steps to Contribute to a Project
1) Fork the Repo
2) Clone your fork
3) Change your fork
4) Push your fork
5) Submit a pull request

## Self-Study
* [Git Guide](http://rogerdudler.github.io/git-guide/) - Basic
* [Markdown Cheatsheet](http://assemble.io/docs/Cheatsheet-Markdown.html) - Basic
* [GitHub Guides](https://guides.github.com/) - Intermediate
* [Git Bootcamp](https://help.github.com/categories/bootcamp/) - Intermediate
* [Git Branching](http://learngitbranching.js.org/) - Advanced

## Videos
* [Webcast](https://www.youtube.com/watch?v=U8GBXvdmHT4)
* [Git Basics #1](https://www.youtube.com/watch?v=8oRjP8yj2Wo)
* [Git Basics #2](https://www.youtube.com/watch?v=uhtzxPU7Bz0)
* [Git Basics #3](https://www.youtube.com/watch?v=wmnSyrRBKTw)
