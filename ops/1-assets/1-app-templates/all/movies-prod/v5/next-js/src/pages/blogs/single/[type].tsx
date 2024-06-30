import { memo, useRef } from "react";

//react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

//router
import Link from "next/link";
import { useRouter } from 'next/router'

//static Data
import { blogs } from "@/StaticData/blogs";

//components
import FormWidget from "@/components/blog/FormWidget";
import DetailMetaList from "@/components/blog/DetailMetaList";
import SingleBlogBreadcrumb from "@/components/blog/SingleBlogBreadcrumb";

//function
import { generateImgPath } from "@/StaticData/data";

const Single = memo((props) => {
    const slug = "the-most-anticipated-movies";
    const blog = blogs.find((item) => item.slug === slug);

    const router = useRouter()
    const type = router.query.type

    const gallery = [
        {
            img: generateImgPath("/assets/images/blog/blog1.webp"),
            class: "mb-4",
        },
        {
            img: generateImgPath("/assets/images/blog/blog2.webp"),
            class: "mb-4",
        },
        {
            img: generateImgPath("/assets/images/blog/blog3.webp"),
            class: "mb-4",
        },
        {
            img: generateImgPath("/assets/images/blog/blog4.webp"),
            class: "mb-4 mb-md-0",
        },
        {
            img: generateImgPath("/assets/images/blog/blog5.webp"),
            class: "mb-4 mb-md-0",
        },
        {
            img: generateImgPath("/assets/images/blog/Fantacy.webp"),
            class: "",
        },
    ];

    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        techOrder: ["youtube"],
        sources: [
            {
                src: "https://www.youtube.com/watch?v=QCGq1epI9pQ",
                type: "video/youtube",
            },
        ],
        youtube: { iv_load_policy: 1 },
    };

    const handlePlayerReady = (player: null) => {
        playerRef.current = player;
    };

    return (
        <>
            <SingleBlogBreadcrumb type={type}></SingleBlogBreadcrumb>
            <div className="section-padding">
                <Container>
                    <Row>
                        <Col xl="8">
                            <div className="iq-blog blog-detail">
                                {type === "audio" ? (
                                    <div>
                                        <iframe
                                            height="200"
                                            className="w-100"
                                            frameBorder="no"
                                            src="https://w.soundcloud.com/player/?visual=false&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F36701924&amp;show_artwork=true&amp;maxheight=750&amp;maxwidth=720&amp;auto_play=false&amp;buying=true&amp;liking=true&amp;download=true&amp;sharing=true&amp;show_comments=true&amp;show_playcount=true&amp;show_user=true&amp;color"
                                        ></iframe>
                                    </div>
                                ) : type === "video" ? (
                                    <div>
                                        {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
                                    </div>
                                ) : type === "gallery" ? (
                                    <Row className="row-cols-xl-3 row-cols-md-2 row-cols-1">
                                        {gallery.map((item, index) => {
                                            return (
                                                <Col className={item.class} key={index}>
                                                    <Link href="#">
                                                        <img src={item.img} alt={index.toString()} />
                                                    </Link>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                ) : (
                                    ""
                                )}
                                <div className="iq-blog-box pt-4">
                                    <div className="iq-blog-meta d-flex mb-3">
                                        <ul className="iq-blogtag list-inline">
                                            <li className="border-gredient-left">
                                            {blog && (
                                                <Link href="/blogs/filter/author">
                                                    <i
                                                        className="far fa-user me-1"
                                                        aria-hidden="true"
                                                    ></i>{" "}
                                                    {blog.username}
                                                </Link>
                                            )}
                                            </li>
                                        </ul>
                                        <ul className="list-inline mb-0 ms-2">
                                            <li className="border-gredient-left">
                                            {blog && (
                                                <Link href="/blogs/filter/date">
                                                    <i
                                                        className="far fa-calendar-alt me-1"
                                                        aria-hidden="true"
                                                    ></i>{" "}
                                                    {blog.blogDate}
                                                </Link>
                                            )}
                                            </li>
                                        </ul>
                                    </div>
                                    {type === "link" ? (
                                        <div className="mb-4">
                                            <Link href="https://iqonic.design/">
                                                <i className="fas fa-link text-primary quote-icon"></i>
                                            </Link>
                                        </div>
                                    ) : type === "quote" ? (
                                        <div className="blockquote text-center mb-3">
                                            <div className="blockquote-icon">
                                                <i
                                                    aria-hidden="true"
                                                    className="fas fa-quote-right"
                                                ></i>
                                            </div>
                                            <p>
                                                “ Movies can and do have tremendous influence in shaping
                                                young lives in the realm of entertainment towards the
                                                ideals and objectives of normal adulthood.{" "}
                                            </p>
                                            <div className="my-4">
                                                <h6 className="border-gredient-left d-inline-block ps-2 fw-normal py-1">
                                                    {" "}
                                                    Walt Disney{" "}
                                                </h6>
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}                                
                                    {blog && (
                                        <div dangerouslySetInnerHTML={{ __html: blog.longDescription ?? '' }}></div>
                                    )}
                                    <div className="iq-blog-tag">
                                        <FormWidget nextLink={type && type[0]} prevLink={type && type[1]} />
                                    </div>

                                </div>
                            </div>
                            <div></div>
                        </Col>
                        <Col xl="4" className="mt-5 mt-xl-0">
                            <DetailMetaList />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
});

Single.displayName = "Single";
export default Single;
