import logo from '../images/logo.svg'
import greenshoes from '../images/green-shoes.png'
import greenshoes2 from '../images/green-shoes-992.png'
import greenshoes3 from '../images/green-shoes-sm.png'
import greyshoes from '../images/grey-shoes.svg'
import greyshoes2 from '../images/grey-shoes-992.png'
import greyshoes3 from '../images/grey-shoes-sm.png'
import ylwshoes from '../images/ylw-shoes.svg'
import ylwshoes2 from '../images/ylw-shoes-992.png'
import ylwshoes3 from '../images/ylw-shoes-sm.png'
import { useState } from 'react'

function Shoes() {
    const [tabs, settabs] = useState('tab1')
    const [show, setfirst] = useState(false);


    const handleClick = (tab) => {
        settabs(tab)
    }
    function Navbar() {
        if (show === true) {
            document.body.classList.add('overflow_hidden')
        }
        else {
            document.body.classList.remove('overflow_hidden')
        }
    }
    return (
        <>
            <div className=" min-vh-100 ">
                <nav className=' d-flex align-items-center justify-content-between max-w-700 position-absolute w-100 '>
                    <img src={logo} alt="logo" />
                    <ul className={`${show ? "end-0 " : "right_100"} d-flex gap-3 mobile-view`}>
                        <li><a href="" className='nav_link'>Mens</a></li>
                        <li><a href="" className='nav_link'>Women</a></li>
                        <li><a href="" className='nav_link'>Kids</a></li>
                        <li><a href="" className='nav_link'>Collection</a></li>
                    </ul>
                    <div className="d-flex gap-3 d-lg-none">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16671 2.52075C12.8371 2.52075 15.8125 5.4962 15.8125 9.16658C15.8125 10.7542 15.2558 12.2117 14.3271 13.3547L18.8195 17.8471C19.088 18.1156 19.088 18.5509 18.8195 18.8194C18.5755 19.0635 18.1935 19.0857 17.9244 18.8859L17.8473 18.8194L13.3548 14.327C12.2118 15.2557 10.7543 15.8124 9.16671 15.8124C5.49632 15.8124 2.52087 12.837 2.52087 9.16658C2.52087 5.4962 5.49632 2.52075 9.16671 2.52075ZM9.16671 3.89575C6.2557 3.89575 3.89587 6.25558 3.89587 9.16658C3.89587 12.0776 6.2557 14.4374 9.16671 14.4374C12.0777 14.4374 14.4375 12.0776 14.4375 9.16658C14.4375 6.25558 12.0777 3.89575 9.16671 3.89575Z" fill="#212121" />
                        </svg>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7514 5.11468L10.9991 5.86864L10.2444 5.11399C8.32029 3.18986 5.20063 3.18986 3.27648 5.11399C1.35234 7.03814 1.35234 10.1578 3.27648 12.0819L10.5139 19.3194C10.7824 19.5879 11.2177 19.5879 11.4862 19.3194L18.7292 12.0806C20.6491 10.15 20.6524 7.03918 18.7278 5.11468C16.8002 3.18703 13.6791 3.18703 11.7514 5.11468ZM17.7542 11.111L11 17.861L4.24876 11.1097C2.86158 9.72251 2.86158 7.47345 4.24876 6.08627C5.63593 4.69909 7.88499 4.69909 9.27213 6.08627L10.5165 7.3306C10.7895 7.60363 11.2338 7.59832 11.5003 7.31882L12.7237 6.08695C14.1143 4.69628 16.3649 4.69627 17.7556 6.08695C19.1431 7.47446 19.1407 9.71683 17.7542 11.111Z" fill="#212121" />
                        </svg>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.41663 6.41658V4.58325C6.41663 3.06447 7.64785 1.83325 9.16663 1.83325C9.87099 1.83325 10.5134 2.09804 11 2.53349C11.4865 2.09803 12.129 1.83325 12.8333 1.83325C14.3521 1.83325 15.5833 3.06447 15.5833 4.58325V6.41658H16.9583C17.7177 6.41658 18.3333 7.03219 18.3333 7.79158V16.9628C18.3333 18.7322 16.8989 20.1666 15.1295 20.1666H7.33329C5.30825 20.1666 3.66663 18.5249 3.66663 16.4999V7.79158C3.66663 7.03219 4.28223 6.41658 5.04163 6.41658H6.41663ZM12.4987 18.7916C12.1375 18.273 11.9258 17.6426 11.9258 16.9628V7.79158H5.04163V16.4999C5.04163 17.7656 6.06764 18.7916 7.33329 18.7916H12.4987ZM10.5416 6.41658V4.58325C10.5416 3.82386 9.92599 3.20825 9.16663 3.20825C8.40723 3.20825 7.79163 3.82386 7.79163 4.58325V6.41658H10.5416ZM11.9166 6.41658H14.2083V4.58325C14.2083 3.82386 13.5927 3.20825 12.8333 3.20825C12.407 3.20825 12.0262 3.40218 11.774 3.70663C11.8665 3.98195 11.9166 4.27675 11.9166 4.58325V6.41658ZM13.3008 16.9628C13.3008 17.9728 14.1196 18.7916 15.1295 18.7916C16.1395 18.7916 16.9583 17.9728 16.9583 16.9628V7.79158H13.3008V16.9628Z" fill="#212121" />
                        </svg>

                        <div className="z-5" onClick={() => {
                            setfirst(!show);
                        }}>
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.52087 12.4996H12.9792C13.3589 12.4996 13.6667 12.8075 13.6667 13.1871C13.6667 13.5352 13.408 13.8229 13.0725 13.8683L12.9792 13.8746H1.52087C1.14118 13.8746 0.833374 13.5668 0.833374 13.1871C0.833374 12.8391 1.09201 12.5514 1.42758 12.5059L1.52087 12.4996H12.9792H1.52087ZM1.52087 6.54131H18.4792C18.8589 6.54131 19.1667 6.84913 19.1667 7.22881C19.1667 7.57687 18.908 7.86452 18.5725 7.90998L18.4792 7.91631H1.52087C1.14118 7.91631 0.833374 7.60849 0.833374 7.22881C0.833374 6.88075 1.09201 6.5931 1.42758 6.54754L1.52087 6.54131H18.4792H1.52087ZM1.52087 0.585938H15.7292C16.1089 0.585938 16.4167 0.893745 16.4167 1.27344C16.4167 1.6215 16.158 1.90914 15.8225 1.95466L15.7292 1.96094H1.52087C1.14118 1.96094 0.833374 1.65313 0.833374 1.27344C0.833374 0.925379 1.09201 0.637738 1.42758 0.592216L1.52087 0.585938H15.7292H1.52087Z" fill="#212121" />
                            </svg>
                        </div>
                    </div>
                </nav>
                <div className="d-flex">
                    <div className={`${tabs === "tab1" ? "active" : ""} green-box d-flex justify-content-center align-items-center overflow-hidden`}  onMouseEnter={() => handleClick('tab1')}>
                        <img src={greenshoes} alt="greenshoes" className='shoes-transform3 d-none d-lg-block' />
                        <img src={greenshoes2} alt="greenshoes" className='shoes-transform3 d-none d-md-block d-lg-none' />
                        <img src={greenshoes3} alt="greenshoes" className='shoes-transform3 d-md-none' />
                    </div>
                    <div className={` ${tabs === "tab2" ? "active" : ""} grey-box d-flex justify-content-center overflow-hidden align-items-center `}  onMouseEnter={() => handleClick('tab2')}>
                        <img src={greyshoes} alt="greyshoes" className=' shoes-transform d-none d-lg-block' />
                        <img src={greyshoes2} alt="greyshoes" className=' shoes-size shoes-transform d-none d-md-block d-lg-none' />
                        <img src={greyshoes3} alt="greyshoes3" className='shoes-transform d-md-none' />

                    </div>
                    <div className={`${tabs === "tab3" ? "active" : ""} ylw-box d-flex justify-content-center align-items-center  overflow-hidden`}  onMouseEnter={() => handleClick('tab3')}>
                        <img src={ylwshoes} alt="ylwshoes" className='shoes-transform2 d-none d-lg-block' />
                        <img src={ylwshoes2} alt="ylwshoes" className='shoes-transform2 d-none d-md-block d-lg-none shoes-size' />
                        <img src={ylwshoes3} alt="ylwshoes" className='shoes-transform2 d-md-none' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shoes