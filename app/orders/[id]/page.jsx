"use client";
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './invoice.css';

export default function InvoicePage() {
    const invoiceRef = useRef();

    const generatePDF = () => {
        html2pdf().from(invoiceRef.current).save();
    };

    return (
        <div className="container">

            <div className="actions">
                <button onClick={generatePDF}>Download PDF</button>
            </div>

            <div className="invoice" ref={invoiceRef}>
                <header className="header px-2 pt-2">
                    <div>
                        <img src="/assets/images/common/logo_main.png" height={"auto"} alt="logo" />
                    </div>
                    <div className="recipient">
                        <p>Recipient</p>
                        <h6>Ditta Tavella Ivo</h6>
                        <h6>Viale Euinaudi 8</h6>
                        <h6>15011 Acqui Terme (Alessandria)</h6>
                    </div>
                </header>

                <section className="company-info px-2">
                    <div>
                        <h6>4GRAPH S.R.L.</h6>
                        <h6>Registered Office:</h6>
                        <span>Via Monte Ofelio 61 </span><span> 81037 Sessa Aurunca (CE)</span>
                        <h6>Operating Office:</h6>
                        <span>via Acquanuova, snc 81030 Cellole (CE)</span> <br />
                        <span>Tel: 0771.639011 | Fax: 0771.1875257</span><br />
                        <span>VAT: 02565620602</span>
                    </div>
                </section>

                <section className="company-info px-2">
                    <div>
                        <h6>Recipient Company:</h6>
                        <p>Tavella Ivo Viale Einaudi 8 <br /> 15011 Acqui Terme (Alessandria)</p>
                    </div>

                    <div>
                        <p>Email</p>
                        <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>Tavellaeric1013@gmail.com</h6>
                        <div className='d-flex gap-1'>
                            <div>
                                <p>Tax Code</p>
                                <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>TVLVIO67R23F965V</h6>
                            </div>
                            <div>
                                <p>VAT Number</p>
                                <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>02228570061</h6>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=' px-2'>
                    <div>
                        <div className='d-flex gap-1 w-100'>
                            <div style={{ width: "25%" }}>
                                <p>Invoice No</p>
                                <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>43207</h6>
                            </div>
                            <div style={{ width: "25%" }}>
                                <p>Date</p>
                                <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>12/12/2024</h6>
                            </div>
                            <div style={{ width: "25%" }}>
                                <p>Due Date</p>
                                <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}></h6>
                            </div>
                        </div>
                        <div className='d-flex gap-1'>
                            <div style={{ width: "40%" }}>
                                <p>Payment Method</p>
                                <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>Credit Card</h6>
                            </div>
                            <div style={{ width: "100%" }}>
                                <p>IBAN</p>
                                <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>IT55 0030 6975 1441 0000 0002 544</h6>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='px-2'>
                    <table className="table mt-1 table-responsive">
                        <thead>
                            <tr>
                                <th><h6>Description</h6></th>
                                <th><h6>Qty</h6></th>
                                <th><h6>Amount</h6></th>
                                <th><h6>Discount</h6></th>
                                <th><h6>VAT</h6></th>
                                <th><h6>Amount with VAT</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span>Order: IT-254222-2024; Product: Paper Coasters; Die-cut options: Round;<br />
                                        Size: 9.5 cm diameter; Print colors: 4 colors front/back;<br />
                                        Paper: Usomano; Weight: 300 gr; Shipping type: Flash</span>
                                </td>
                                <td><span>1,000 pcs</span></td>
                                <td><span>€92.47</span></td>
                                <td><span>€0.00</span></td>
                                <td><span>22%</span></td>
                                <td><span>€112.81</span></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className=' px-2'>
                    <div className='d-flex flex-wrape gap-1'>
                        <div style={{ width: "15%" }}>
                            <p>Shipping</p>
                            <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>€0.00</h6>
                        </div>
                        <div style={{ width: "15%" }}>
                            <p>Payment Fees</p>
                            <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>€0.00</h6>
                        </div>
                        <div style={{ width: "15%" }}>
                            <p>Packing</p>
                            <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>€0.00</h6>
                        </div>
                        <div style={{ width: "15%" }}>
                            <p>Total Discount</p>
                            <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>€0.00</h6>
                        </div>
                        <div style={{ width: "15%" }}>
                            <p>Payment Fees</p>
                            <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>€0.00</h6>
                        </div>
                        <div style={{ width: "15%" }}>
                            <p>Product Total</p>
                            <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>€0.00</h6>
                        </div>
                    </div>
                    <div className='d-flex gap-1 justify-end me-4'>
                        <div style={{ width: "15%" }}>
                            <p>VAT</p>
                            <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>€0.00</h6>
                        </div>
                        <div style={{ width: "15%" }}>
                            <p>Total Invoice</p>
                            <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>€0.00</h6>
                        </div>
                    </div>
                </section>

                <section className=' px-2 pb-2'>
                    <p className="note">
                        In case of non-compliance with the payment terms stated on the invoice, interest will be charged pursuant to Legislative Decree 231/02.
                        Terms of Service: any claims relating to this invoice and its related service must be received within 8 days of delivery.
                    </p>
                    <div style={{ width: "100%" }}>
                        <p>Order Ref</p>
                        <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>IT-254222-2024</h6>
                    </div>
                    <div style={{ width: "100%" }}>
                        <p>Reason for Transport</p>
                        <h6 className='p-1 w-100' style={{ backgroundColor: "#f2f2f2" }}>Sale</h6>
                    </div>
                </section>
            </div>
        </div>
    );
}
