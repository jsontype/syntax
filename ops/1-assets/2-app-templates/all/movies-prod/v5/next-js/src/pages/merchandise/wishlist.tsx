import React, { useEffect } from "react";

// Custom Hokk
import { useBreadcrumb } from "@/utilities/usePage";

// Next-Link
import Link from 'next/link'

// Next-Image
import Image from 'next/image'

// react-bootstrap
import {Table} from 'react-bootstrap'

// Components
import CustomButton from "@/components/CustomButton";

// img
import img1 from '../../../public/assets/images/shop/product/01.webp'
import img2 from '../../../public/assets/images/shop/product/02.webp'
import img3  from '../../../public/assets/images/shop/product/03.webp'

const WishlistPage = () => {
    useBreadcrumb('Wishlist')
    return (
        <>
            <div className="wishlist-page section-padding">
    <div className="container">
        <h5 className="mb-5">My Wishlist</h5>
            <Table className="table cart-table" responsive>
                <thead className="border-bottom">
                    <tr>
                        <th className="fw-500 font-size-18"></th>
                        <th className="fw-500 font-size-18">Product Name</th>
                        <th className="fw-500 font-size-18">Unit Price</th>
                        <th className="fw-500 font-size-18">Stock Status</th>
                        <th className="fw-500 font-size-18"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-item="list">
                        <td>
                            <button
                                className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                                <span className="btn-inner">
                                    <i className="far fa-trash-alt"></i>
                                </span>
                            </button>
                        </td>
                        <td>
                            <div className="product-thumbnail">
                                <Link className="mb-2 me-3" href="#">
                                    <Image className="avatar-80" src={img1} alt="" />
                                </Link>
                                <span className="mt-2">Bag Pack</span>
                            </div>
                        </td>
                        <td>
                            <span className="fw-500">$25.00</span>
                        </td>
                        <td>
                            <span>In Stock</span>
                        </td>
                        <td>
                        <CustomButton buttonTitle="view product" link="/merchandise/product-detail" linkButton="false"/>
                        </td>
                    </tr>
                    <tr data-item="list">
                        <td>
                            <button
                                className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                                <span className="btn-inner">
                                    <i className="far fa-trash-alt"></i>
                                </span>
                            </button>
                        </td>
                        <td>
                            <div className="product-thumbnail">
                                <Link className="mb-2 me-3" href="#">
                                    <Image className="avatar-80" src={img2} alt="" />
                                </Link>
                                <span className="mt-2">Believe Mask</span>
                            </div>
                        </td>
                        <td>
                            <span className="fw-500">$13.00</span>
                        </td>
                        <td>
                            <span>In Stock</span>
                        </td>
                        <td>
                        <CustomButton buttonTitle="view product" link="/merchandise/product-detail" linkButton="false"/>
                        </td>
                    </tr>
                    <tr data-item="list">
                        <td>
                            <button
                                className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                                <span className="btn-inner">
                                    <i className="far fa-trash-alt"></i>
                                </span>
                            </button>
                        </td>
                        <td>
                            <div className="product-thumbnail">
                                <Link className="mb-2 me-3" href="">
                                    <Image className="avatar-80" src={img3} alt="" />
                                </Link>
                                <span className="mt-2">Black Bow</span>
                            </div>
                        </td>
                        <td>
                            <span className="fw-500">$18.00 – $45.00</span>
                        </td>
                        <td>
                            <span>Out of Stock</span>
                        </td>
                        <td>
                        <CustomButton buttonTitle="view product" link="/merchandise/product-detail" linkButton="false"/>
                        </td>
                    </tr>
                </tbody>
            </Table>
        <div className="product-social-share mt-5 d-flex flex-wrap align-items-center gap-3">
            <h5 className="mb-0">Share On:</h5>
            <ul className="list-inline m-0 p-0 d-flex flex-wrap align-items-center gap-2">
                <li className="flex-shrink-0">
                    <Link href="https://www.facebook.com/"
                        className="d-inline-block border-radius rounded-circle bg-primary text-white text-center"
                        target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                </li>
                <li className="flex-shrink-0">
                    <Link href="https://twitter.com/"
                        className="d-inline-block border-radius rounded-circle bg-info text-white text-center"
                        target="_blank">
                        <i className="fab fa-twitter"></i>
                    </Link>
                </li>
                <li className="flex-shrink-0">
                    <Link href="https://in.pinterest.com/"
                        className="d-inline-block border-radius rounded-circle bg-danger text-white text-center"
                        target="_blank">
                        <i className="fab fa-pinterest-p"></i>
                    </Link>
                </li>
                <li className="flex-shrink-0">
                    <Link href="https://iqonic.design/"
                        className="d-inline-block border-radius rounded-circle bg-warning text-white text-center"
                        target="_blank">
                        <i className="far fa-envelope"></i>
                    </Link>
                </li>
                <li className="flex-shrink-0">
                    <Link href="https://www.whatsapp.com/"
                        className="d-inline-block border-radius rounded-circle bg-success text-white text-center"
                        target="_blank">
                        <i className="fab fa-whatsapp"></i>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</div>
        </>
    );
};


export default WishlistPage;
