import PostListContainer from "../containers/PostListContainer"
// Outlet 임포트 : 중첩 라우팅할 때 필요
import { Outlet } from "react-router-dom"

const PostListPage = () => {
    return (
        <>
            <PostListContainer />
            {/* <Outlet />을 사용해야 (이미 상위 라우터를 통해 이동하는) PostList.js 안에 Post의 하위 라우터(Link/Route) 추가가 가능하다. */}
            <Outlet />
        </>
    )
}

export default PostListPage
