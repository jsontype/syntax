# Layer 0: 제일 처음에는 항상 "FROM baseImage"를 가지고 온다. 즉, 어떤 베이스를 사용할 것인지를 선택한다.
FROM node:18

# WORKDIR는 유닉스 명령어에서의 "cd"와 같다. 여기서는 루트디렉토리에서부터 어플리케이션을 복사해올 폴더를 정한다.
WORKDIR /app
# 패키지 인스톨에 필요한 파일을 카피해온다. 빈번히 변경되는 파일일 수록 마지막에 작성하는 게 좋다.
COPY package.json package-lock.json ./
# 패키지 인스톨을 진행한다. npm install 대신 npm ci를 사용해야, package-lock.json에 명시된 버전으로부터 버전이 바뀌지 않는다.
RUN npm ci
# 소스파일을 카피해온다.
COPY index.js .

# Layer 4: 엔트리포인트라는 명령어를 이용해서, 앱을 실행한다. 아래는 "node index.js"를 실행한다는 뜻이다.
ENTRYPOINT [ "node", "index.js" ]
 