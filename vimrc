"""" Create an undo directory in ~/.vim 
if has('persistent_undo')
set undofile                 "turn on the feature  
set undolevels=5000          "save lots of history
set undodir=$HOME/.vim/undo  "directory where the undo files will be stored
endif

"""" CORE
set nocompatible              " be iMproved, required
filetype off                  " required
set ignorecase                " required for smartcase to work
set smartcase
imap jj <ESC>
let mapleader = 'f'
syntax on
set number
colorscheme desert 
set clipboard=unnamed "allows you to yank text to other programs (for host Only ie. windows)
filetype indent on  "turns on detection, plugin, and indent  
set rtp+=~/.vim " set vim runtime path to include .vim directory
set rtp+=~/.vim/bundle/Vundle.vim " set the runtime path to include Vundle and initialize
	
"" Tab stops
set tabstop=2 " pressing tab = 2 spaces
set shiftwidth=2 " when indenting with '>', use 2 spaces width
set autoindent " automatically set indent of new line
set smartindent

"" vim navigation with file tabs
nnoremap th  :tabfirst<CR>
nnoremap tj  :tabnext<CR>
nnoremap tk  :tabprev<CR>
nnoremap tl  :tablast<CR>
nnoremap tt  :tabedit<Space>
nnoremap tn  :tabnext<Space>
nnoremap tm  :tabm<Space>
nnoremap td  :tabclose<CR>

" word wrap without line breaks
set wrap
set linebreak
set nolist " list disables linebreak
set textwidth=0
set wrapmargin=0 " wrap lines when coming within n characters from side

set pastetoggle=<f2> " when pasting into vim this will format for comments
set history=1000 " this sets vim command line history limit
"""" EOF CORE

"""" OPTIONAL
set scrolloff=30 " Keep 3 lines below and above the cursor
nmap <leader>s :set invspell spelllang=en<cr> " vim spellcheck shortcut

"" enables mouse for terminal
if has('mouse')
  set mouse=a
  " set ttymouse=xterm2
endif

set laststatus=2 " show the satus line all the time
set ttyfast " for faster redrawing
set diffopt+=vertical " for faster redrawing
au BufNewFile,BufRead *.ejs set filetype=html " syntax highlighting for .ejs files
"""" EOF OPTIONAL

"""" Section AutoGroups {{{
" file type specific languages 
augroup configgroup
    autocmd!
    autocmd Filetype sass setlocal ts=2 sw=2 expandtab
    autocmd Filetype scss setlocal ts=2 sw=2 expandtab
    autocmd FileType yaml setlocal ts=2 sts=2 sw=2 expandtab
    autocmd FileType make setlocal ts=8 sts=8 sw=8 noexpandtab
    autocmd FileType ruby setlocal ts=2 sts=2 sw=2 expandtab
    autocmd FileType html setlocal ts=4 sts=4 sw=4 noexpandtab indentkeys-=*<return>
    autocmd FileType jade setlocal ts=2 sts=2 sw=2 noexpandtab
    autocmd FileType markdown,textile setlocal textwidth=0 wrapmargin=0 wrap spell
    autocmd FileType .xml exe ":silent %!xmllint --format --recover - 2>/dev/null"
    autocmd FileType help nnoremap q :bd<cr> " close help files on 'q'
augroup END

augroup AutoSaveFolds
  autocmd!
  autocmd BufWinLeave *.* mkview
  autocmd BufWinEnter *.* silent loadview 
augroup END

"""" PLUGINS 
" All Plugins must go below this line
call vundle#begin()

Plugin 'VundleVim/Vundle.vim' " plugin manager
Plugin 'vim-airline/vim-airline' " status and tabline
Plugin 'vim-airline/vim-airline-themes' " airline themes
Plugin 'christoomey/vim-tmux-navigator' " tmux and vim integration (need this to move between nerdtree too)
Plugin 'scrooloose/nerdtree' " directory tree for vim
Plugin 'jistr/vim-nerdtree-tabs' " nerdtree tabs
Plugin 'alvan/vim-closetag' " close html tags
Plugin 'tpope/vim-surround' " edit surrounding wtags
Plugin 'tpope/vim-fugitive' " git wrapper
Plugin 'tpope/vim-commentary' " comment/uncomment code with gcc 
Plugin 'scrooloose/syntastic' " validation scripts
Plugin 'terryma/vim-multiple-cursors' " sublime multiple cursors
Plugin 'ctrlpvim/ctrlp.vim' " fuzzy file finder with ctrl-p
Plugin 'gcmt/taboo.vim' " edit tabs
Plugin 'mileszs/ack.vim' " ack for vim
Plugin 'easymotion/vim-easymotion' " vim easymotion
Plugin 'valloric/youcompleteme' " vim autocompletion
Plugin 'jparise/vim-graphql' " graphql syntax highlighting
Plugin 'SirVer/ultisnips' " the ultimate snippets pkg requires pythos support
Plugin 'honza/vim-snippets' " snippets for ultisnips
Plugin 'prettier/vim-prettier' " plugin for code formatting
Plugin 'Galooshi/vim-import-js' " auto importing for js 


""archived plugins (used little to none)
"Plugin 'vimwiki/vimwiki' " personal wiki/diary/tasks
"Plugin 'flazz/vim-colorschemes' " vim colorschemes

"" All of your Plugins must be added before the following line
call vundle#end()  

""""" PLUGIN CONFIGURATION 

" Load up all of our plugins
if filereadable(expand("~/.vimrc.bundles"))
  source ~/.vimrc.bundles
endif

"" ARILINE 
let g:airline_theme='base16color'
set t_Co=256

"" NERDTREE 
" nerdtree tabs
map <Leader>n <plug>NERDTreeTabsToggle<CR> " toggles nerd tree
let g:nerdtree_tabs_open_on_console_startup=1 " opens nerdtree when you open vim

" fix for NERDTree arrows
let g:NERDTreeDirArrowExpandable="+"
let g:NERDTreeDirArrowCollapsible="~"

let g:NERDTreeWinSize=15 " shrinks NERDTree width

" fixes NERDTree arrows
set encoding=utf-8 " displays the file in utf8
set fileencoding=utf-8 " writes the file in utf8
map <leader>r :NERDTreeFind<cr>

"" vim closetags
let g:closetag_filenames = '*.html,*.xhtml,*.phtml, *.js, *.jsx' " file extensions where plugin is enabled
let g:closetag_xhtml_filenames = '*.xhtml,*.jsx, *.js' " xhtml file extensions where plugin is enabled 
let g:closetag_filetypes = 'html,xhtml,phtml,js,jsx' "plugin enabled for these filetypes 
let g:closetag_xhtml_filetypes = 'xhtml,js,jsx' " plugin enabled for these xhtml filetypes 
let g:closetag_emptyTags_caseSensitive = 1 " list of non-closing tags case-sensitive (e.g. `<Link>` will be closed while `<link>` won't.)
let g:closetag_shortcut = '>' " Shortcut for closing tags, default is '>'
let g:closetag_close_shortcut = '<leader>>' " Add > at current position without closing the current tag, default is ''

"" MULTIPLE-CURSORS
let g:multi_cursor_quit_key='<Space>'

"" CTRL-P
set wildignore+=*/tmp/*,*.so,*.swp,*.zip     " MacOSX/Linux
let g:ctrlp_custom_ignore = '\v[\/](offline-mirror|node_modules|target|dist)|(\.(swp|ico|git|svn|so|exe|dll))$' " ignore types 

"" TABOO.vim
set guioptions-=e
set sessionoptions+=tabpages,globals

"" EASYMOTION 
nmap s <Plug>(easymotion-overwin-f2)
let g:EasyMotion_do_mapping = 0 " Disable default mappings
let g:EasyMotion_smartcase = 1 " Turn on case insensitive feature

" JK motions: Line motions
map <Leader>j <Plug>(easymotion-j)
map <Leader>k <Plug>(easymotion-k)

"" VIM PRETIER 
let g:prettier#autoformat = 0
autocmd BufWritePre *.js,*.jsx,*.mjs,*.ts,*.tsx,*.less,*.scss,*.md,*.vue PrettierAsync
let g:prettier#config#semi = 'false'
let g:prettier#config#trailing_comma = 'none'
let g:prettier#config#single_quote = 'false' " single quotes over double quotes

"" SYNTASTIC 
" Find available checkers with :help syntastic-checkers
" let g:syntastic_debug=3 "uncomment this when debugging syntastic

set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 0
let g:syntastic_check_on_wq = 1
let g:syntastic_loc_list_height=4
let g:syntastic_error_symbol = '✗'
let g:syntastic_warning_symbol = '!'

"" syntastic checkers
" javascript 
let g:syntastic_javascript_checkers = ['eslint']

" HTML5  
let g:syntastic_html_checkers = ['htmlhint']

" CSS syntastic settings
let g:syntastic_css_checkers = ['csslint']

" vim-import-js
nnoremap <leader>w :ImportJSWord<CR>
nnoremap <leader>e :ImportJSFix<CR>
nnoremap <leader>g :ImportJSGoto<CR>

"""" ULTSNIPS
" Trigger configuration. Do not use <tab> if you use https://github.com/Valloric/YouCompleteMe.
autocmd FileType snippets :UltiSnipsAddFiletypes snippets 
let g:UltiSnipsExpandTrigger="<c-j>"
let g:UltiSnipsJumpForwardTrigger="<c-b>"
let g:UltiSnipsJumpBackwardTrigger="<c-z>"
let g:UltiSnipsEditSplit="vertical"


"""" Language Specific Settings
" Folding 
set foldmethod=syntax
set foldcolumn=1
let javaScript_fold=1
set foldlevelstart=99

"""" FIXES
set backupcopy=yes " fix for webpack
