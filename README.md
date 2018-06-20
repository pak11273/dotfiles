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

sudo install jshint -g

## You'll need to install Ack for the Ack plugin

[Ack Instructions](https://beyondgrep.com/install/)
Note: create an .ackrc on your root directory

## MISC notes

1. If you are using version control(eg. github, bitbucket...) then you will need to create an ssh key
2. To fix ycm vim you need to do the following:
   1. sudo apt-get install build-essential cmake
   2. sudo apt-get install python-dev python3-dev
   3. cd ~/.vim/bundle/YouCompleteMe
   4. ./install.py --clang-completer
3. Syntastic config:

   1. find checkers at https://github.com/vim-syntastic/syntastic/wiki/%28v3.7.0%29---Syntax-Checkers
   2. enable checkers with this line in your .vimrc

   `let g:syntastic_<language>_checkers = ['<checker>','<another checker>']`

   `eg. let g:syntastic_php_checkers = ['php', 'phpcs', 'phpmd']`

4. Prettier config

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

sudo apt-get install ctags
sudo apt-get install pkg-config
sudo apt-get install autoconf automake

git clone https://github.com/universal-ctags/ctags.git
cd ctags
sudo ./autogen.sh
sudo ./configure
sudo make
sudo make install

add this to .vimrc:
`let g:autotagTagsFile="tags"`
