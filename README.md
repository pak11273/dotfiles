j##Reference:
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

Download vundle and git clone repo

vim and :PluginInstall

## Windows

Any references to .vim need to change to vimfiles
Any references to .vimrc need to change to _vimrc
