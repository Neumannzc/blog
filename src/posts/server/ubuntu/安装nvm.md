---
title: 安装node包管理工具nvm
date: 2024-05-07
icon: leaf
category:
  - 软件安装
tag:
  - web软件安装
order: 105
---

[nvm](https://nvm.uihtm.com/) 是一个nodejs版本管理工具

<!-- more -->

## 一、创建目录

```
mkdir -p 安装路径
```

## 二、下载

```
git clone https://github.com/nvm-sh/nvm.git 安装路径
```

## 三、切换目录

```
cd 安装路径
```

## 四、安装

```
./install.sh 
```

## 五、添加源镜像

```
vim ~/.bashrc

# 添加源镜像地址
export NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist

export NVM_DIR="$HOME/.nvm/nvm-0.38.0"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## 六、重新加载配置

```
source ~/.bashrc
```

