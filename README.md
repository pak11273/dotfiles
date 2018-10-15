##Reference:
[link](http://blog.smalleycreative.com/tutorials/using-git-and-github-to-manage-your-dotfiles/)

##Adding new . files in the home dir
When adding more configuration files(dot files), you need to add them to the enumerable $file in the /dotfiles/makesymlinks.sh file.

##Cloning files on another machine

cd ~

git clone git://github.com/pak11273/dotfiles.git

cd ~/dotfiles

chmod +x makesymlinks.sh

./makesymlinks.sh

## Vundle

git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim

vim and :PluginInstall

## Syntastic Checkers

sudo npm install jshint -g

## You'll need to install Ack for the Ack plugin

[Ack Instructions](https://beyondgrep.com/install/)

Note: create an .ackrc on your root directory for every project

A typical config:

```
#ack is a tool like grep, designed for programmers with large trees of heterogeneous source code

#to install ack, see http://betterthangrep.com/

#this file is located in the root directory
# ~/.ackrc

# Always sort the files
#--sort−files

# Always color, even if piping to a another program
--color

--ignore-file=is:tags
--ignore-dir=log
--ignore-dir=doc
--ignore-dir=tmp
--ignore-dir=tags
--ignore-dir=node_modules/
--ignore-dir=.cache-loader/
```

## MISC notes

1. Vim undo history

   1. Create an undo directory in $HOME/.vim

2. If you are using version control(eg. github, bitbucket...) then you will need to create an ssh key

3. To fix ycm vim you need to do the following:
   1. sudo apt-get install build-essential cmake
   2. sudo apt-get install python-dev python3-dev
   3. cd ~/.vim/bundle/youcompleteme
   4. ./install.py --clang-completer
4. Syntastic config:

   1. find checkers at https://github.com/vim-syntastic/syntastic/wiki/%28v3.7.0%29---Syntax-Checkers
   2. enable checkers with this line in your .vimrc

   `let g:syntastic_<language>_checkers = ['<checker>','<another checker>']`

   `eg. let g:syntastic_php_checkers = ['php', 'phpcs', 'phpmd']`

5. Prettier config

   1. go to your vim-prettier directory and either do npm install or yarn install
   2. ensure you have the following lines in your .vimrc

   `let g:prettier#autoformat = 0`

   `autocmd BufWritePre *.js,*.jsx,*.mjs,*.ts,*.tsx,*.css,*.less,*.scss,*.json,*.graphql,*.md,*.vue PrettierAsync`

## For Windows Platform

Any references to .vim need to change to vimfiles
Any references to .vimrc need to change to \_vimrc

mv .vimrc \_vimrc

Change the gitbash options > text > Locale > en_US

Change the gitbash options > text > Character set > UTF-8

## Installing ctags

references: https://github.com/craigemery/vim-autotag

references: https://askubuntu.com/questions/796408/installing-and-using-universal-ctags-instead-of-exuberant-ctags

references: https://stackoverflow.com/questions/25819649/how-to-exclude-multiple-directories-with-exuberant-ctags

sudo apt-get install ctags

sudo apt-get install pkg-config

sudo apt-get install autoconf automake

git clone https://github.com/universal-ctags/ctags.git

cd ctags

sudo ./autogen.sh

sudo ./configure

sudo make

sudo make install

add this to .vimrc: `let g:autotagTagsFile="tags"`

usage: in the directory you want tags use this command `$ ctags -R --exclude=@.ctagsignore .` with the following in .ctagsignore:

dir1

dir2

dir3
