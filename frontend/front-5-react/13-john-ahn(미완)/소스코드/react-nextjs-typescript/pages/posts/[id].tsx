
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import homeStyles from '../../styles/home.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={homeStyles.headingXl}>{postData.title}</h1>
                <div className={homeStyles.lightText}>
                    {postData.date}
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    console.log('paths', paths)
    // [ { params: { id: 'pre-rendering' } }, { params: { id: 'ssg-ssr' } } ]
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log('params', params);
    // { id: 'ssg-ssr' }
    const postData = await getPostData(params.id as string)
    return {
        props: {
            postData
        }
    }
}
