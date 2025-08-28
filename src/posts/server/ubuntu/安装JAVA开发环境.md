---
title: 安装JAVA开发环境
date: 2024-05-07
icon: leaf
category:
  - 软件安装
tag:
  - java软件安装
star: true
order: 105
---

- 该篇讲解了安装java开发环境，包括 `git`、`redis`、`mysql 5.7`、`maven`

- 关于 `jdk` 的安装，是单独的一篇

<!-- more -->

## 一、安装git

```
# 安装git
sudo apt install gedit
sudo apt install git

# 配置全局变量
git config --global user.name "hello"
git config --global user.email hello@126.com
git config --list
```

## 二、安装redis

```
sudo apt install redis
```

## 三、安装mysql

```
# 安装
sudo apt install mysql-server

# 查看是否启动
systemctl status mysql

# 修改密码
sudo mysql -uroot
alter user 'root'@'localhost' identified with mysql_native_password by '这里是密码';
flush privileges;
```

## 四、安装maven

可以前往 [maven官网](https://maven.apache.org/download.cgi) 下载
### 1、解压

```
tar -zxvf apache-maven-3.6.1-bin.tar.gz
```

### 2、配置环境变量

```
# 1. 打开文件
sudo touch /etc/profile.d/maven.sh
sudo vim /etc/profile.d/maven.sh

# 2. 添加内容
export MAVEN_HOME=/home/Cafe Babe/java/apache-maven-3.9.6
export PATH=$PATH:$MAVEN_HOME/bin

# 3. 设置权限
sudo chmod 644 /etc/profile.d/maven.sh

# 4. 加载配置到当前用户环境 (不修改全局 bash.bashrc)
echo "source /etc/profile.d/maven.sh" >> ~/.bashrc
source ~/.bashrc

# 5. 验证安装
mvn -version

```

### 3、创建本地maven仓库

```
mkdir repository
```

### 4、修改`setting.xml`中的信息

```xml
<!-- 1 本地仓库地址 -->
<localRepository>/home/Cafe Babe/java/maven/repository</localRepository>

<!-- 2 数据源 -->
<mirror>
      <id>nexus-aliyun</id>
      <mirrorOf>*</mirrorOf>
      <name>Nexus aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>

<!-- 3 jdk版本信息 -->
<profiles>
  <profile>
    <id>jdk-1.8</id>
    <activation>
      <activeByDefault>true</activeByDefault>
      <jdk>1.8</jdk>
    </activation>
    <properties>
      <maven.compiler.source>1.8</maven.compiler.source>
      <maven.compiler.target>1.8</maven.compiler.target>
      <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
    </properties>
  </profile>
</profiles>
```

