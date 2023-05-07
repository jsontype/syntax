import React from 'react'
// 쿼리 값을 받기 위해 useSearchParams 임포트
import { useSearchParams } from 'react-router-dom'

const About = () => {
    // search 값에있는 detail 값을 받아와서, 해당 값이 true일 때 추가정보를 보여주기
    const [searchParams] = useSearchParams()
    const detail = searchParams.get('detail') === 'true'

    // 보여줄 내용 렌더링
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
            {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
        </div>
    )
}

export default About
