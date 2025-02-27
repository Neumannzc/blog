---
title: 手机部署linux
date: 2025-02-25
icon: user-secret
category:
  - 服务器
tag:
  - linux安装
order: 110
---

手机上安装liunx系统, 没有那么难! ! !

<!-- more -->

## 1. 使用 `ZeroTermux` 安装linux

## 2. `ssh` 的使用

### 2.1 确保 Linux 环境中已安装 SSH 服务
- 进入 Termux 中的 Linux 环境。
- 更新包管理器并安装 OpenSSH 服务器：

Debian/Ubuntu：
```bash
apt update
apt install openssh-server
```

CentOS/Fedora：
```bash
yum install openssh-server
```

Arch Linux：
```bash
pacman -S openssh
```

### 2.2 配置 SSH 服务
- 编辑 SSH 配置文件：

```bash
nano /etc/ssh/sshd_config
```

- 确保以下配置项正确：
  - 允许 root 登录（可选）：

```bash
PermitRootLogin yes
```

  - 允许密码登录：
```bash
PasswordAuthentication yes
```

  - 修改 SSH 端口（可选，避免与 Termux 的 SSH 端口冲突）：
```bash
Port 2222
```
- 保存并退出编辑器（Ctrl + O 保存，Ctrl + X 退出）。

### 2.3 启动 SSH 服务
启动 SSH 服务：
```bash
service ssh start
```

或

```bash
/etc/init.d/ssh start
```

- 检查 SSH 服务状态：

```bash
service ssh status
```

### 2.4 设置用户密码
- 如果尝试通过 SSH 登录时需要密码，请确保为目标用户设置了密码：

  - 设置 root 用户密码：

```bash
passwd root
```

  - 设置普通用户密码（如 ubuntu）：

```bash
passwd ubuntu
```
### 2.5 获取 Linux 环境的 IP 地址

- 在 Termux 中运行以下命令获取 IP 地址：
```bash
ifconfig
```

或

```bash
ip addr show
```

- 找到 inet 或 inet6 开头的 IP 地址（通常是 127.0.0.1 或 localhost）。

### 2.6 通过 SSH 连接 Linux 环境

- 在 Termux 中运行以下命令连接：

```bash
ssh user@localhost -p 2222
```
  - `user`：Linux 环境中的用户名（如 root 或 ubuntu）。
  - `-p 2222`：如果修改了 SSH 端口，需指定端口号。

- 输入用户密码。

### 2.7 常见问题排查
#### 2.7.1 SSH 连接被拒绝
- 检查 SSH 服务是否已启动：

```bash
service ssh status
```

- 检查防火墙是否阻止了端口：

```bash
ufw status
```

#### 2.7.2. 无法输入密码
- 确保目标用户已设置密码：

```bash
passwd user
```

#### 2.7.3. 端口冲突
- 修改 Linux 环境的 SSH 端口（如 2222），避免与 Termux 的 SSH 端口（8022）冲突。
