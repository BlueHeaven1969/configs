set nocompatible
call plug#begin()

Plug 'altercation/vim-colors-solarized'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'airblade/vim-gitgutter'
Plug 'octol/vim-cpp-enhanced-highlight'
Plug 'tpope/vim-vinegar'
Plug 'tpope/vim-markdown'
Plug 'Shougo/deoplete.nvim'
Plug 'roxma/nvim-yarp'
Plug 'roxma/vim-hug-neovim-rpc'
Plug 'Shougo/neco-syntax'
Plug 'ujihisa/neco-look'
Plug 'Shougo/deoplete-clangx'
Plug 'deoplete-plugins/deoplete-jedi'

call plug#end()

set encoding=utf-8
set fileencoding=utf-8
set termencoding=utf8
set t_Co=256
let &t_AB="\e[48;5;%dm"
let &t_AF="\e[38;5;%dm"

syntax enable
set number
set tabstop=4
set softtabstop=4
set expandtab
set showcmd
set wildmenu
set lazyredraw
set showmatch
set incsearch
set hlsearch
set colorcolumn=80
set backspace=2
"set termguicolors
let g:airline_theme = 'jellybeans'
let g:airline_solarized_bg = 'dark'
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
let g:deoplete#enable_at_startup = 1
inoremap <Char-0x07F> <BS>
nnoremap <Char-0x07F> <BS>
