# 实时ChatGPT服务，支持GPT3/GPT4

- [English README](README.md)
- [中文 README](README_CN.md)

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

# 修改config.yaml配置文件，修改apiKey，改为你的openai.com的apiKey
vi config.yaml
# openai的apiKey，改为你的apiKey
apiKey: "xxxxxx"


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

- 直接输入问题，则调用ChatGPT接口返回答案
- `/image `后边输入想要的图片描述，则调用DALL-E2接口，通过图片描述自动生成图片

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

# 假如出现 ERR_OSSL_EVP_UNSUPPORTED 错误，请使用以下命令进行编译
export NODE_OPTIONS=--openssl-legacy-provider && npm run build
```