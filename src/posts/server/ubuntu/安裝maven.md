---
title: 安装Maven
date: 2024-05-07
icon: leaf
category:
  - 软件安装
tag:
  - java软件安装
star: true
order: 105
---

以下是在Ubuntu系统上安装Maven的完整步骤，综合了官方推荐方法和优化配置：

<!-- more -->

---

### 🔧 **一、环境准备**

1. **更新系统软件包**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
2. **安装JDK（Maven依赖Java环境）**
   ```bash
   sudo apt install openjdk-11-jdk  # 推荐JDK 11或更高版本
   ```
3. **验证Java安装**
   ```bash
   java -version  # 检查输出是否包含"OpenJDK 11.x"
   ```
   _若未安装JDK，上述命令会提示安装_。

---

### ⬇️ **二、安装Maven**

#### **方法1：通过APT安装（推荐新手）**

```bash
sudo apt install maven -y
```

**验证安装**：

```bash
mvn -version  # 输出应包含Maven版本（如3.6.3）和JDK信息
```

_优点：简单快捷，适合快速部署；缺点：仓库版本可能较旧_。

#### **方法2：手动安装最新版（推荐开发者）**

1. **下载二进制包**

   ```bash
   wget https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz
   ```

   _注：版本号可替换为https://maven.apache.org/download.cgi_。

2. **解压并配置路径**

   ```bash
   sudo tar -xzvf apache-maven-*.tar.gz -C /opt
   sudo ln -s /opt/apache-maven-3.9.6 /opt/maven  # 创建软链接
   ```

3. **设置环境变量**
   编辑`~/.bashrc`或全局配置`/etc/profile.d/maven.sh`：

   ```bash
   export MAVEN_HOME=/opt/maven
   export PATH=$MAVEN_HOME/bin:$PATH
   ```

   刷新配置：

   ```bash
   source ~/.bashrc  # 或 source /etc/profile.d/maven.sh
   ```

4. **验证手动安装**
   ```bash
   mvn -v  # 检查版本是否与安装一致
   ```

---

### ⚡ **三、配置优化**

1. **加速依赖下载（配置国内镜像）**
   编辑`~/.m2/settings.xml`，添加阿里云镜像：

   ```xml
   <mirrors>
     <mirror>
       <id>aliyunmaven</id>
       <url>https://maven.aliyun.com/repository/public</url>
       <mirrorOf>central</mirrorOf>
     </mirror>
   </mirrors>
   ```

   _若无此文件，需手动创建_。

2. **JVM参数优化**
   创建`~/.mavenrc`文件，添加：

   ```bash
   export MAVEN_OPTS="-Xms512m -Xmx1024m"  # 根据内存调整堆大小
   ```

3. **修改本地仓库位置（可选）**
   在`settings.xml`中添加：
   ```xml
   <localRepository>/path/to/custom/repo</localRepository>
   ```

---

### 🚀 **四、基本使用测试**

1. **创建测试项目**

   ```bash
   mvn archetype:generate \
     -DgroupId=com.example \
     -DartifactId=myapp \
     -DarchetypeArtifactId=maven-archetype-quickstart \
     -DinteractiveMode=false
   ```

2. **编译与打包**

   ```bash
   cd myapp
   mvn package     # 生成target/myapp-1.0-SNAPSHOT.jar
   ```

3. **运行程序**
   ```bash
   java -cp target/myapp-1.0-SNAPSHOT.jar com.example.App
   ```

---

### 💡 **常见问题**

- **`mvn: command not found`**：环境变量未生效 → 重新执行`source ~/.bashrc`。
- **依赖下载失败**：检查镜像配置或网络连接，确认`settings.xml`路径正确。
- **版本冲突**：手动安装时确保卸载旧版（`sudo apt remove maven`）。

> 通过APT安装通常满足基础需求；若需特定版本或性能优化，建议手动安装并配置镜像与JVM参数。安装完成后，建议通过创建测试项目验证功能完整性。
