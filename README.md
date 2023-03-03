# 实时ChatGPT服务，基于最新的gpt-3.5-turbo-0301模型

## chatGPT-service和chatGPT-stream

- chatGPT-service: [https://github.com/cookeem/chatgpt-service](https://github.com/cookeem/chatgpt-service) 
  - chatGPT-service是一个后端服务，用于实时接收chatGPT的消息，并通过websocket的方式实时反馈给chatGPT-stream
- chatGPT-stream: [https://github.com/cookeem/chatgpt-stream](https://github.com/cookeem/chatgpt-stream) 
  - chatGPT-stream是一个前端服务，以websocket的方式实时接收chatGPT-service返回的消息

## gitee传送门

- [https://gitee.com/cookeem/chatgpt-service](https://gitee.com/cookeem/chatgpt-service) 
- [https://gitee.com/cookeem/chatgpt-stream](https://gitee.com/cookeem/chatgpt-stream) 

## 效果图

![](chatgpt-service.gif)


## 快速开始

```bash
# 拉取代码
git clone https://github.com/cookeem/chatgpt-stream.git
cd chatgpt-stream

# chatGPT的注册页面: https://beta.openai.com/signup
# chatGPT的注册教程: https://www.cnblogs.com/damugua/p/16969508.html
# chatGPT的APIkey管理界面: https://beta.openai.com/account/api-keys

# 修改config.yaml配置文件，修改appKey，改为你的openai.com的appKey
vi config.yaml
# openai的appKey，改为你的apiKey
appKey: "xxxxxx"


# 使用docker-compose启动服务
docker-compose up -d

# 查看服务状态
docker-compose ps   
     Name                    Command               State                  Ports                
-----------------------------------------------------------------------------------------------
chatgpt-service   /chatgpt-service/chatgpt-s ...   Up      0.0.0.0:59142->9000/tcp             
chatgpt-stream    /docker-entrypoint.sh ngin ...   Up      0.0.0.0:3000->80/tcp,:::3000->80/tcp


# 访问页面，请保证你的服务器可以访问chatGPT的api接口
# http://localhost:3000
```

## 如何编译

```bash
# 注意本项目需要先运行chatgpt-service后端服务
# .env.development为运行测试的配置文件
# .env.production为正式构建的配置文件

# 拉取构建依赖
npm install
# 运行测试
npm run serve
# 执行编译
npm run build
```