export const config = {
    // DEV API
    viteApiBaseUrl: getEnv("VITE_API_BASE_URL", "http://localhost:8000"),
    // 그 외 스테이징 및 프로덕션 API시의 백엔드를 여기에 위치시키고, 필요시 위를 코멘트아웃 후 사용한다.
    // viteApiBaseUrl: getEnv("VITE_API_BASE_URL", "http://stg환경의주소.com/params"),
}

function getEnv(key: string, defaultValue: string) {
    return process.env[key] ? process.env[key] : defaultValue;
}
