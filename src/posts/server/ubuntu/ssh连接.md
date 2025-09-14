---
title: SSH远程链接
date: 2025-09-14
icon: seedling
category:
  - 其他
tag:
  - 工具
order: 224
---

在 Ubuntu 上使用命令行通过 SSH 密钥连接远程服务器的完整步骤如下：

<!-- more -->

### 1. 准备密钥文件
- 将密钥文件（如 `your-key.pem`）复制到 `~/.ssh/` 目录
- 设置正确的文件权限：
  ```bash
  chmod 600 ~/.ssh/your-key.pem
  ```

### 2. 基本连接命令
```bash
ssh -i ~/.ssh/your-key.pem username@IP
```
（将 `username` 替换为实际的远程用户名）

### 3. 推荐方法：配置 SSH config 文件（永久生效）
```bash
nano ~/.ssh/config
```
添加以下内容：
```config
# 原始服务器
Host myserver
    HostName IP
    User your_username
    IdentityFile ~/.ssh/your-key.pem
    Port 22  # 如果使用非默认端口请修改

# 新服务器1 - 数据库服务器
Host nowServer
    HostName IP
    User admin
    IdentityFile ~/.ssh/db-key.pem
    Port 2222  # 非标准端口
```
保存后使用简化命令连接：
```bash
ssh myserver
```

### 配置说明

| 参数 | 说明 | 示例 |
|------|------|------|
| `Host` | 自定义别名（连接时使用） | `myserver`, `db` |
| `HostName` | 实际 IP 地址或域名 | `39.98.121.42`, `backup.example.com` |
| `User` | 登录用户名 | `ubuntu`, `admin` |
| `IdentityFile` | SSH 密钥文件路径 | `~/.ssh/myserver-key.pem` |
| `Port` | SSH 端口（默认 22 可省略） | `2222` |
| `ServerAliveInterval` | 保持连接选项（可选） | `60`（每60秒发送保活包） |

### 4. 高级选项
- **保持连接**（防止超时断开）：
  ```bash
  ssh -o ServerAliveInterval=60 myserver
  ```
- **调试模式**（连接失败时使用）：
  ```bash
  ssh -v myserver
  ```

### 5. 常见问题解决
1. **权限错误**：
   ```bash
   # 修复密钥权限
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/your-key.pem
   ```

2. **首次连接确认**：
   首次连接时会提示确认主机指纹，输入 `yes` 确认

3. **Windows 生成的密钥**：
   如果密钥来自 Windows，需转换格式：
   ```bash
   sudo apt install dos2unix
   dos2unix ~/.ssh/your-key.pem
   ```

### 6. 连接示例
```bash
# 使用配置别名连接
ssh myserver

# 直接连接（用户名为 ubuntu 的示例）
ssh -i ~/.ssh/server-key.pem ubuntu@IP
```

> **注意**：如果服务器使用非标准 SSH 端口（如 2222），在命令中添加 `-p 2222` 或在 config 文件中添加 `Port 2222` 配置

