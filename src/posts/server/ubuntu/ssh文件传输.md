---
title: SSH文件传输
date: 2025-09-14
icon: seedling
category:
  - 其他
tag:
  - 工具
order: 226
---

在 Ubuntu 上使用 SSH 上传和下载文件主要通过 `scp`（Secure Copy Protocol）命令实现。以下是详细指南：
<!-- more -->

### 一、下载文件/目录到本地

#### 1. 下载单个文件
```bash
# 基本语法
scp -i ~/.ssh/your-key.pem username@39.98.121.42:/远程路径/文件.txt /本地路径/

# 使用 SSH 配置别名（如 myserver）
scp myserver:/var/log/app.log ~/Downloads/
```

#### 2. 下载整个目录（递归复制）
```bash
scp -r -i ~/.ssh/your-key.pem username@39.98.121.42:/远程目录/ /本地路径/
```

#### 3. 保留文件属性（权限、时间戳）
```bash
scp -p myserver:/path/to/file /local/path/
```

---

### 二、上传文件/目录到服务器

#### 1. 上传单个文件
```bash
# 基本语法
scp -i ~/.ssh/your-key.pem /本地路径/文件.txt username@39.98.121.42:/远程路径/

# 使用别名
scp ~/Documents/report.pdf myserver:/home/user/uploads/
```

#### 2. 上传整个目录
```bash
scp -r /本地目录/ myserver:/远程路径/
```

#### 3. 压缩后传输（大文件推荐）
```bash
tar czvf - /本地目录 | ssh myserver "tar xzvf - -C /远程路径"
```

---

### 三、常用选项说明

| 选项 | 说明 |
|------|------|
| `-P` | 指定端口（默认22） |
| `-r` | 递归复制目录 |
| `-p` | 保留文件属性 |
| `-v` | 显示详细过程 |
| `-C` | 启用压缩 |
| `-i` | 指定密钥文件 |

---

### 四、实用示例

#### 1. 下载 Nginx 日志文件
```bash
scp myserver:/var/log/nginx/access.log ~/logs/
```

#### 2. 上传配置文件到服务器
```bash
scp -P 2222 ~/configs/app.conf myserver:/etc/app/
```

#### 3. 同步整个网站目录
```bash
scp -r -C ~/website/ myserver:/var/www/html/
```

---

### 五、替代工具（更强大）

#### 1. rsync（增量同步，推荐）
```bash
# 下载
rsync -avz -e "ssh -i ~/.ssh/key.pem" user@host:/远程路径/ /本地路径/

# 上传
rsync -avz -e ssh /本地路径/ myserver:/远程路径/
```

#### 2. sftp（交互式文件传输）
```bash
sftp -i ~/.ssh/key.pem user@host
sftp> put localfile.txt /remote/path/
sftp> get /remote/file.txt ~/Downloads/
sftp> exit
```

---

### 六、注意事项
1. **路径问题**：
   - 远程路径：绝对路径以 `/` 开头
   - 本地路径：可用 `.` 表示当前目录
   
2. **权限问题**：
   ```bash
   chmod 600 ~/.ssh/key.pem  # 密钥权限
   chmod 755 ~/              # 本地目录可写
   ```

3. **大文件传输**：
   - 使用 `screen` 或 `tmux` 防止中断
   - 优先使用 `rsync --partial` 支持断点续传

4. **传输进度**：
   ```bash
   pv largefile.iso | ssh myserver "cat > /remote/largefile.iso"
   ```

使用这些命令，您可以轻松地在本地系统和远程服务器之间安全地传输文件。对于日常使用，`scp` 是最简单直接的选择；对于定期同步或大文件传输，`rsync` 是更好的选择。