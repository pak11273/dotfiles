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

## Windows

Any references to .vim need to change to vimfiles
Any references to .vimrc need to change to _vimrc

mv .vimrc _vimrc

Change the gitbash options > text > Locale > en_US

Change the gitbash options > text > Character set > UTF-8
