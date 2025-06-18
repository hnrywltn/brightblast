import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import ScrollButton from '../loader/ScrollButton'
import useSWR from 'swr';
import fetcher from '../fetcher/Fetcher';
import { setSelectedCategory } from '@/store/reducer/filterReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';
import { Col, Row } from 'react-bootstrap';
import { slice } from "lodash";
import { motion } from "framer-motion";
import Link from 'next/link';

const Footer = ({
    onSuccess = () => { },
    hasPaginate = false,
    onError = () => { },
}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [dropdownState, setDropdownState] = useState<string | null>(null);
    const { selectedCategory } = useSelector((state: RootState) => state.filter)
    const { data, error } = useSWR("/api/category", fetcher, { onSuccess, onError });

    if (error) return <div>Failed to load products</div>;
    if (!data) return <div></div>;

    const getData = () => {
        if (hasPaginate) return data.data;
        else return data.length > 6 ? slice(data, 0, 6) : data;
    };

    const categories = getData();
    const handleCategoryChange = (category: any) => {
        const updatedCategory = selectedCategory.includes(category)
            ? selectedCategory.filter((cat) => cat !== category)
            : [...selectedCategory, category];
        dispatch(setSelectedCategory(updatedCategory));
        router.push("/shop-left-sidebar-col-3");
    };

    const toggleDropdown = (dropdown: string) => {
        setDropdownState((current) => (current === dropdown ? null : dropdown));
    };
    return (
        <>
            <ScrollButton />
            <footer className="bb-footer margin-t-50">
                <div className="footer-directory padding-tb-50">
                    <div className="container">
                        <Row>
                            <div className='col-12'>
                                <Fade triggerOnce direction='up' duration={1000} delay={200}>
                                    <div className="directory-title">
                                        <h4>Brands Directory</h4>
                                    </div>
                                    <div className="directory-contact">
                                        <Row>
                                            <Col lg={6} className='col-12'>
                                                <div className="inner-contact">
                                                    <ul>
                                                        <li>
                                                            <span>Jewellery :</span>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Necklace</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Earrings</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Couple Rings</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Pendants</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">crystal</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Bangles</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Bracelets</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Nose pin</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Chain</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Earrings</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Couple Rings</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="inner-contact">
                                                    <ul>
                                                        <li>
                                                            <span>Footwear :</span>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Sport</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Formal</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Boots</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Casual</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Cowboy Shoes</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Safety Shoes</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Party Wear Shoes</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Branded</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">First copy</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Long Shoes</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col lg={6} className='col-12'>
                                                <div className="inner-contact">
                                                    <ul>
                                                        <li>
                                                            <span>Fashion :</span>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">T-Shirt</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Short & Jeans</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Jacket</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Dress & Frock</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Inner wear</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Hosiery</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="inner-contact">
                                                    <ul>
                                                        <li>
                                                            <span>Cosmetics :</span>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Shampoo</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Body wash</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">face wash</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Makeup kit</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Liner</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Lipstick</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Perfume</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Body Shop</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Scrub</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Hair Gel</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Hair colors</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Hair Dye</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Sunscreen</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Skin Lotion</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Liner</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-left-sidebar-col-3">Lipstick</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Fade>
                            </div>
                        </Row>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer-top padding-tb-50">
                        <div className="container">
                            <Row className="m-minus-991">
                                <Col lg={3} className="bb-footer-cat col-12">
                                    <div className="bb-footer-widget bb-footer-company">
                                        <img src="/assets/img/logo/logo.png" className="bb-footer-logo" alt="footer logo" />
                                        <img src="/assets/img/logo/logo-dark.png" className="bb-footer-dark-logo" alt="footer logo" />
                                        <p className="bb-footer-detail">BlueBerry is the biggest market of grocery products. Get
                                            your daily needs from our store.</p>
                                        <div className="bb-app-store">
                                            <a onClick={(e) => e.preventDefault()} href="#" className="app-img">
                                                <img src="/assets/img/app/android.png" className="adroid" alt="apple" />
                                            </a>
                                            <a onClick={(e) => e.preventDefault()} href="#" className="app-img">
                                                <img src="/assets/img/app/apple.png" className="apple" alt="apple" />
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} className="bb-footer-info col-12">
                                    <div className="bb-footer-widget">
                                        <h4 onClick={() => toggleDropdown("category")} className="bb-footer-heading">Category<div className='bb-heading-res'><i className='ri-arrow-down-s-line'></i></div></h4>
                                        <motion.div 
                                            className={`bb-footer-links bb-footer-dropdown`}
                                            initial={{ height: 0, opacity: 0, translateY: -20 }}
                                            animate={{
                                            height: dropdownState === "category" ? "auto" : 0,
                                            opacity: dropdownState === "category" ? 1 : 0,
                                            translateY: dropdownState === "category" ? 0 : -20,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{
                                            overflow: "hidden",
                                            display: "block",
                                            paddingBottom:
                                                dropdownState === "category" ? "20px" : "0px",
                                            }}
                                        >
                                            <ul className="align-items-center">
                                                {categories?.map((data: any, index: any) => (
                                                    <li key={index} className="bb-footer-link">
                                                        <a onClick={() => handleCategoryChange(data.category)}>{data.category}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                </Col>
                                <Col lg={2} className="bb-footer-account col-12">
                                    <div className="bb-footer-widget">
                                        <h4 onClick={() => toggleDropdown("company")} className="bb-footer-heading">Company<div className='bb-heading-res'><i className='ri-arrow-down-s-line'></i></div></h4>
                                        <motion.div
                                            className={`bb-footer-links bb-footer-dropdown`}
                                            initial={{ height: 0, opacity: 0, translateY: -20 }}
                                            animate={{
                                            height: dropdownState === "company" ? "auto" : 0,
                                            opacity: dropdownState === "company" ? 1 : 0,
                                            translateY: dropdownState === "company" ? 0 : -20,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{
                                            overflow: "hidden",
                                            display: "block",
                                            paddingBottom:
                                                dropdownState === "company" ? "20px" : "0px",
                                            }}
                                        >
                                            <ul className="align-items-center">
                                                <li className="bb-footer-link">
                                                    <Link href="/about-us">About us</Link>
                                                </li>
                                                <li className="bb-footer-link">
                                                    <Link href="/track-order">Delivery</Link>
                                                </li>
                                                <li className="bb-footer-link">
                                                    <Link href="/faq">Legal Notice</Link>
                                                </li>
                                                <li className="bb-footer-link">
                                                    <Link href="/terms">Terms & conditions</Link>
                                                </li>
                                                <li className="bb-footer-link">
                                                    <Link href="/checkout">Secure payment</Link>
                                                </li>
                                                <li className="bb-footer-link">
                                                    <Link href="/contact-us">Contact us</Link>
                                                </li>
                                            </ul>
                                        </motion.div>
                                    </div>
                                </Col>
                                <Col lg={2} className="bb-footer-service col-12">
                                    <div className="bb-footer-widget">
                                        <h4 onClick={() => toggleDropdown("account")} className="bb-footer-heading">Account<div className='bb-heading-res'><i className='ri-arrow-down-s-line'></i></div></h4>
                                        <motion.div
                                            className={`bb-footer-links bb-footer-dropdown`}
                                            initial={{ height: 0, opacity: 0, translateY: -20 }}
                                            animate={{
                                            height: dropdownState === "account" ? "auto" : 0,
                                            opacity: dropdownState === "account" ? 1 : 0,
                                            translateY: dropdownState === "account" ? 0 : -20,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{
                                            overflow: "hidden",
                                            display: "block",
                                            paddingBottom:
                                                dropdownState === "account" ? "20px" : "0px",
                                            }}
                                        >
                                            <ul className="align-items-center">
                                                <li className="bb-footer-link">
                                                    <Link href="/login">Sign In</Link>
                                                </li>
                                                <li className="bb-footer-link">
                                                    <Link href="/cart">View Cart</Link>
                                                </li>
                                                <li className="bb-footer-link">
                                                    <Link href="/faq">Return Policy</Link>
                                                </li>
                                                <li className="bb-footer-link">
                                                    <Link href="/shop-left-sidebar-col-3">Become a Vendor</Link>
                                                </li>
                                                <li className="bb-footer-link">
                                                    <Link href="/product-left-sidebar">Affiliate Program</Link>
                                                </li>
                                                <li className="bb-footer-link">
                                                    <Link href="/checkout">Payments</Link>
                                                </li>
                                            </ul>
                                        </motion.div>
                                    </div>
                                </Col>
                                <Col lg={3} className="bb-footer-cont-social col-12">
                                    <div className="bb-footer-contact">
                                        <div className="bb-footer-widget">
                                            <h4 onClick={() => toggleDropdown("contact")} className="bb-footer-heading">Contact<div className='bb-heading-res'><i className='ri-arrow-down-s-line'></i></div></h4>
                                            <motion.div 
                                                className={`bb-footer-links bb-footer-dropdown`}
                                                initial={{ height: 0, opacity: 0, translateY: -20 }}
                                                animate={{
                                                    height: dropdownState === "contact" ? "auto" : 0,
                                                    opacity: dropdownState === "contact" ? 1 : 0,
                                                    translateY: dropdownState === "contact" ? 0 : -20,
                                                }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                style={{
                                                    overflow: "hidden",
                                                    display: "block",
                                                    paddingBottom:
                                                    dropdownState === "contact" ? "20px" : "0px",
                                                }}
                                            >
                                                <ul className="align-items-center">
                                                    <li className="bb-footer-link bb-foo-location">
                                                        <span className="mt-15px">
                                                            <i className="ri-map-pin-line"></i>
                                                        </span>
                                                        <p>971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.</p>
                                                    </li>
                                                    <li className="bb-footer-link bb-foo-call">
                                                        <span>
                                                            <i className="ri-whatsapp-line"></i>
                                                        </span>
                                                        <Link href="tel:+009876543210">+00 9876543210</Link>
                                                    </li>
                                                    <li className="bb-footer-link bb-foo-mail">
                                                        <span>
                                                            <i className="ri-mail-line"></i>
                                                        </span>
                                                        <Link href="mailto:example@email.com">example@email.com</Link>
                                                    </li>
                                                </ul>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="bb-footer-social">
                                        <div className="bb-footer-widget">
                                            <div className="bb-footer-links bb-footer-dropdown">
                                                <ul className="align-items-center">
                                                    <li className="bb-footer-link">
                                                        <a onClick={(e) => e.preventDefault()} href="#"><i className="ri-facebook-fill"></i></a>
                                                    </li>
                                                    <li className="bb-footer-link">
                                                        <a onClick={(e) => e.preventDefault()} href="#"><i className="ri-twitter-fill"></i></a>
                                                    </li>
                                                    <li className="bb-footer-link">
                                                        <a onClick={(e) => e.preventDefault()} href="#"><i className="ri-linkedin-fill"></i></a>
                                                    </li>
                                                    <li className="bb-footer-link">
                                                        <a onClick={(e) => e.preventDefault()} href="#"><i className="ri-instagram-line"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <Row>
                                <div className="bb-bottom-info">
                                    <div className="footer-copy">
                                        <div className="footer-bottom-copy ">
                                            <div className="bb-copy">Copyright © <span id="copyright_year">2024 </span>
                                                <Link className="site-name" href="/">BlueBerry</Link> all rights reserved.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-bottom-right">
                                        <div className="footer-bottom-payment d-flex justify-content-center">
                                            <div className="payment-link">
                                                <img src="/assets/img/payment/payment.png" alt="payment" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
