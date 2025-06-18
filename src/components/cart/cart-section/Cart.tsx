"use client"
import DiscountCoupon from '@/components/discount-coupon/DiscountCoupon';
import QuantitySelector from '@/components/quantity-selector/QuantitySelector';
import { RootState } from '@/store';
import { removeItem } from '@/store/reducer/cartSlice';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const cartSlice = useSelector((state: RootState) => state.cart?.items);
    const [subTotal, setSubTotal] = useState(0);
    const [vat, setVat] = useState(0);
    const [discount, setDiscount] = useState(0);
    const dispatch = useDispatch()

    const handleRemoveItem = (data: any) => {
        dispatch(removeItem(data.id));
    }
    useEffect(() => {
        if (cartSlice.length === 0) {
            setSubTotal(0);
            setVat(0);
            return;
        }
        const subtotal = cartSlice.reduce(
            (acc, item) => acc + item.newPrice * item.quantity,
            0
        );
        setSubTotal(subtotal);
        const vatAmount = subtotal * 0.2;
        setVat(vatAmount);
    }, [cartSlice]);

    const handleDiscountApplied = (discount: any) => {
        setDiscount(discount);
    };

    const discountAmount = subTotal * (discount / 100);
    const total = subTotal + vat - discountAmount;

    return (
        <>
            <section className="section-cart padding-tb-50">
                <div className="container">
                    <Row className="mb-minus-24">
                        <Col lg={4} className="mb-24">
                            <Fade triggerOnce direction='up' duration={1000} delay={200} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <div className="bb-cart-sidebar-block" >
                                    <div className="bb-sb-title">
                                        <h3>Summary</h3>
                                    </div>
                                    <div className="bb-sb-blok-contact">
                                        <form action="#" method="post">
                                            <div className="input-box">
                                                <label>Country *</label>
                                                <div >
                                                    <select className="custom-select width-100">
                                                        <option value='' disabled>Country</option>
                                                        <option value="india">India</option>
                                                        <option value="chile">Chile</option>
                                                        <option value="egypt">Egypt</option>
                                                        <option value="italy">Italy</option>
                                                        <option value="yemen">Yemen</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="input-box">
                                                <label>State/Province *</label>
                                                <div>
                                                    <select className="custom-select width-100">
                                                        <option value='' disabled>Please Select a region, state</option>
                                                        <option value="gujarat">Gujarat</option>
                                                        <option value="goa">Goa</option>
                                                        <option value="hariyana">Hariyana</option>
                                                        <option value="mumbai">Mumbai</option>
                                                        <option value="delhi">Delhi</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="input-box">
                                                <label htmlFor="Zip-code">Zip/Postal Code *</label>
                                                <input type="text" placeholder="Zip/Postal Code" id="Zip-code" />
                                            </div>
                                        </form>
                                        <div className="bb-cart-summary">
                                            <div className="inner-summary">
                                                <ul>
                                                    <li><span className="text-left">Sub-Total</span><span className="text-right">${subTotal.toFixed(2)}</span></li>
                                                    <li><span className="text-left">Delivery Charges</span><span className="text-right">${vat.toFixed(2)}</span></li>
                                                    <li>
                                                        <span className="text-left">Coupon Discount</span>
                                                        <span className="text-right"><a className="bb-coupon drop-coupon">Apply Coupon</a></span>
                                                    </li>
                                                    <DiscountCoupon onDiscountApplied={handleDiscountApplied} />
                                                </ul>
                                            </div>
                                            <div className="summary-total">
                                                <ul>
                                                    <li><span className="text-left">Total Amount</span><span className="text-right">${total.toFixed(2)}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={8} className="mb-24">
                            <Fade triggerOnce direction='up' duration={1000} delay={400} className="bb-cart-table" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>quality</th>
                                            <th>Total</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartSlice.length === 0 ? (<tr style={{ textAlign: "center" }}>
                                            <td colSpan={6}>
                                                Your cart items is empty
                                            </td>
                                        </tr>) : (
                                            <>
                                                {cartSlice.map((data, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <a onClick={(e) => e.preventDefault()} href="#">
                                                                <div className="Product-cart">
                                                                    <img src={data.image} alt="new-product-5" />
                                                                    <span>{data.title}</span>
                                                                </div>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <span className="price">${data.newPrice}</span>
                                                        </td>
                                                        <td>
                                                            <div className="qty-plus-minus">
                                                                <QuantitySelector id={data.id} quantity={data.quantity} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="price">${data.newPrice * data.quantity}</span>
                                                        </td>
                                                        <td>
                                                            <div className="pro-remove">
                                                                <a onClick={() => handleRemoveItem(data)}>
                                                                    <i className="ri-delete-bin-line"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </>)}


                                    </tbody>
                                </table>
                            </Fade>
                            <Fade triggerOnce direction='up' duration={1000} delay={400}>
                                <Link href="/checkout" className="bb-btn-2 check-btn">Check Out</Link>
                            </Fade>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Cart
