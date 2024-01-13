import request from "./utils.ts";

// 백엔드로부터 data를 가져오는 api 함수들을 여기에 놓고 임포트해서 사용한다.
export function getSomething() {
  return new Promise((resolve, reject) => {
    request.get('/api')
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
