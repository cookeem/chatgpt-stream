# 制作dory-frontend镜像

```bash
rm -rf dist
npm install && npm run build
rm -rf docker-files/dist && mv dist docker-files && cd docker-files
docker build -t doryengine/chatgpt-stream:v1.0.3 . 
docker push doryengine/chatgpt-stream:v1.0.3
cd ..
```
