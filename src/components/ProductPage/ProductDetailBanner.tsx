import React from 'react'
import { Link } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import { LuChrome } from "react-icons/lu";
import product from '../../respiratory-protection.png'
import { CiDollar } from "react-icons/ci";


const productSizes = ['SM', 'XXL', 'LG', 'MD'];
const productColors = ['#ffff', '#00000', '#ffff'];

const ProductDetailBanner = () => {
    return (
        <div className='lg:w-full lg:h-[1782px] lg:px-[100px] lg:py-[40px] lg:flex lg:flex-row md:w-[624px] md:h-[1,894.98px] md:flex md:flex-col md:gap-[32px] lg:ml-[0] md:ml-[67px] max-sm:w-full max-sm:h-[1747.98px] max-sm:flex max-sm:flex-col max-sm:gap-[32px] max-sm:px-5'>
            <div className='lg:w-[800px] lg:h-[1782px] md:hidden max-sm:hidden lg:block'>
                <div className='lg:w-[950px] lg:h-[1782px]'>
                    <img src={product} alt="" className='lg:w-[550px] lg:h-[550px]' />
                    <div className='lg:w-[632px] lg:h-[600.97px] lg:flex lg:gap-[155px] lg:mt-[20px]'>
                        <img src={product} alt="" className='lg:w-[222px] lg:h-[290.97px] lg:top-[1079px] lg:rounded-[8px]' />
                        <img src={product} alt="" className='lg:w-[222px] lg:h-[290.97px] lg:top-[1079px] lg:rounded-[8px]' />
                    </div>
                </div>
            </div>
            <div className={`lg:w-[488px] lg:h-[886.98px]`}>
                <div className='lg:w-[488px] lg:h-[64px] lg:left-[728px] lg:flex lg:flex-col lg:gap-[16px] md:flex md:flex-col md:w-[624px] md:h-[64px] md:gap-[32px] max-sm:w-full max-sm:h-[64px] max-sm:flex max-sm:flex-col max-sm:gap-[16px]'>
                    <div className='lg:w-full lg:h-[28px] lg:flex lg:justify-between lg:pr-[0px] md:w-[624px] md:h-[28px] md:flex md:justify-between max-sm:w-full max-sm:h-[28px] max-sm:flex max-sm:justify-between'>
                        {/* heading of the product */}
                        <p className='lg:w-[300px] lg:h-[28px] text-gray-900 font-medium lg:text-[20px] lg:leading-[28px] lg:tracking-[0] lg:flex lg:items-center md:w-[422px] md:h-[28px] md:text-[20px] md:leading-[28px] md:tracking-[0] max-sm:w-[302px] max-sm:h-[28px] max-sm:text-[20px] max-sm:leading-[28px] max-sm:tracking-[0]'>This is Product Title</p>
                        {/* price of the product */}
                        <p className='lg:w-[39px] lg:h-[28px] text-gray-900 font-medium lg:text-[20px] lg:leading-[28px] lg:tracking-[0] lg:flex lg:items-center md:w-[39px] md:h-[28px] md:text-[20px] md:leading-[28px] md:tracking-[0%] max-sm:w-[39px] max-sm:h-[28px] max-sm:text-[20px] max-sm:leading-[28px] max-sm:tracking-[0]'>$400</p>
                    </div>
                    <div className='lg:w-[488px] lg:h-[20px] lg:flex md:w-[624px] md:h-[20px] md:flex max-sm:w-full max-sm:h-[20px] max-sm:flex'>
                        {/* rating of the product */}
                        <p className='lg:w-[22px] lg:h-[20px] text-gray-700 md:w-[22px] md:h-[20px] font-normal text-[14px] leading-[20px] tracking-[0%] max-sm:w-[22px] max-sm:h-[20px] max-sm:text-[14px] max-sm:leading-[20px] max-sm:tracking-[0]'>5</p>
                        <div className='lg:w-[104px] lg:h-[20px] lg:pl-[4px] md:w-[104px] md:h-[20px] md:pl-[4px] max-sm:w-[104px] max-sm:h-[20px] max-sm:pl-[4px] max-sm:ml-1 max-sm:mt-[1px]'>
                            <div className='lg:w-[100px] lg:h-[20px] lg:flex lg:gap-[1px] lg:mt-[2px] md:w-[100px] md:h-[20px] md:flex md:gap-[1px] max-sm:w-[100px] max-sm:h-[20px] max-sm:flex max-sm:gap-[1px] '>
                                {Array.from(Array(5), (e, i) =>
                                    <p className='text-yellow-400 lg:w-[16.63px] lg:h-[15.91px] lg:mt-[2.3px] lg:ml-[1.68px] md:w-[16.63px] md:h-[15.91px] md:mt-[2.3px] md:ml-[1.68px] max-sm:w-[16.63px] max-sm:h-[15.91px] max-sm:top-[2.3px] max-sm:left-[1.68px]'>*</p>
                                )}
                            </div>
                        </div>
                        <div className='lg:w-[20px] lg:h-[20px] lg:pl-[16px] text-gray-300 font-normal lg:text-[14px] lg:leading-[20px] lg:tracking-[0] lg:flex lg:items-center md:w-[20px] md:h-[20px] md:pl-[16px] md:text-[14px] md:leading-[20px] md:tracking-[0] md:flex md:items-center max-sm:w-[20px] max-sm:h-[20px] max-sm:pl-4 max-sm:text-[14px] max-sm:leading-[20px] max-sm:align-middle'>.</div>
                        <div className='lg:w-[144px] lg:h-[20px] lg:pl-[16px] md:w-[144px] md:h-[20px] md:pl-[16px] max-sm:w-[144px] max-sm:h-[20px] max-sm:pl-[16px]'>
                            <div className='lg:w-[128px] lg:h-[20px] md:w-[128px] md:h-[20px] max-sm:w-[128px] max-sm:h-[20px]'>
                                <Link to={''} className='lg:w-[128px] lg:h-[20px] md:w-[128px] md:h-[20px] max-sm:w-[128px] max-sm:h-[20px]'><p className='font-medium lg:text-[14px] lg:leading-[20px] lg:tracking-[0] lg:flex lg:items-center text-indigo-600 md:text-[14px] md:leading-[20px] md:tracking-[0] md:flex md:items-center max-sm:text-[14px] max-sm:leading-[20px] max-sm:tracking-normal max-sm:align-middle'>See all 512 reviews</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* for medium devices image */}
                <div className='lg:hidden md:block max-sm:block md:w-full md:h-[936px] max-sm:w-full max-sm:h-[537px] max-sm:mt-9'>
                    <img src={product} alt="" className='md:w-full md:h-[936px] max-sm:w-full max-sm:h-[537px] max-sm:rounded-lg' />
                </div>
                <form action="" className='lg:w-[488px] lg:h-[248px] lg:flex lg:flex-col lg:gap-[32px] lg:mt-[20px] md:w-[624px] md:h-[248px] md:flex md:flex-col md:gap-[32px] md:mt-[20px] max-sm:w-full max-sm:h-[306px] max-sm:flex max-sm:flex-col max-sm:gap-[32px] max-sm:mt-8'>
                    <div className='lg:w-[488px] lg:h-[60px] lg:flex lg:flex-col lg:gap-[8px] md:w-[624px] md:h-[60px] md:flex md:flex-col md:gap-[8px] max-sm:flex max-sm:flex-col max-sm:gap-[8px]'>
                        <h2 className='lg:w-[488px] lg:h-[20px] text-gray-900 font-medium text-[14px] leading-[20px] tracking-[0] flex items-center md:w-[624px] md:h-[20px] md:text-[14px] md:leading-[20px] md:tracking-[0] md:flex md:items-center max-sm:w-[358px] max-sm:h-[20px] max-sm:text-sm max-sm:leading-[20px] max-sm:align-middle'>Color</h2>
                        <div className='lg:w-[488px] lg:h-[32px] lg:flex lg:gap-[7px] md:w-[624px] md:h-[32px] md:flex md:gap-[15px] max-sm:w-[358px] max-sm:h-[32px] max-sm:flex max-sm:gap-[12px]'>
                            {productColors?.map((color: string) =>
                                <div className='lg:w-[36px] lg:h-[36px] lg:-top-[-2px] lg:-left-[-2px] lg:rounded-[9999px] lg:p-[2px] bg-[#FFFFFF01] shadow-[0px_0px_0px_2px_#111827] md:w-[36px] md:h-[36px] md:-top-[2px] md:-left-[2px] md:rounded-full md:p-[2px] max-sm:w-[36px] max-sm:h-[36px] max-sm:rounded-full max-sm:p-[2px]' >
                                    <input type="radio" style={{ backgroundColor: `${color}` }} className={`lg:w-[32px] lg:h-[32px] lg:rounded-[9999px] lg:border border-[#0000001A] appearance-none md:w-[32px] md:h-[32px] md:rounded-full md:border max-sm:w-[32px] max-sm:h-[32px] max-sm:rounded-full max-sm:border-[1px]`} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='lg:w-[488px] lg:h-[74px] lg:flex lg:flex-col lg:gap-[8px] md:w-[624px] md:h-[74px] md:flex md:flex-col md:gap-[8px] max-sm:w-[358px] max-sm:h-[132px] max-sm:flex max-sm:flex-col max-sm:gap-2'>
                        <div className='lg:w-[488px] lg:h-[20px] lg:flex lg:justify-between md:w-[624px] md:h-[20px] md:justify-between md:flex max-sm:w-[358px] max-sm:h-[20px] max-sm:flex max-sm:justify-between'>
                            <h2 className='lg:w-[29px] lg:h-[20px] text-gray-900 font-medium lg:text-[14px] lg:leading-[20px] lg:tracking-[0] lg:align-middle md:w-[29px] md:h-[20px] md:text-[14px] md:leading-[20px] md:tracking-[0] md:flex md:items-center max-sm:w-[29px] max-sm:h-[29px] max-sm:text-sm max-sm:leading-5 max-sm:align-middle'>Size</h2>
                            <Link to={''} className='lg:w-[108px] lg:h-[20px] md:w-[108px] md:h-[20px] max-sm:w-[108px] max-sm:h-[20px]'><p className='lg:w-[108px] lg:h-[20px] text-indigo-600 font-medium lg:text-[14px] lg:leading-[20px] lg:tracking-[0] lg:align-middle md:text-[14px] md:leading-[20px] md:tracking-[0] md:flex md:items-center max-sm:text-sm max-sm:leading-5 max-sm:align-middle'>See sizing chart</p></Link>
                        </div>
                        <div className='lg:w-[488px] lg:h-[46px] lg:flex lg:gap-[12px] md:w-[624px] md:h-[46px] md:flex md:gap-[12px] max-sm:w-[358px] max-sm:h-[104px] max-sm:grid max-sm:grid-rows-2 max-sm:grid-cols-3 max-sm:place-content-between max-sm:gap-3'>
                            {productSizes?.map((size: string) => (
                                <div className='border-gray-200 border-[1px] lg:px-[16px] py-[9px] md:py-[13px] md:px-[33.17px] max-sm:text-center max-sm:pt-2'>{size}</div>
                            ))}
                        </div>
                    </div>
                    <button className='lg:w-[488px] lg:h-[50px] lg:rounded-[6px] lg:pt-[13px] lg:pr-[200.62px] lg:pb-[13px] lg:pl-[200px] bg-indigo-600 text-white md:w-[624px] md:h-[50px] md:rounded-[6px] md:py-[13px] md:px-[268.62px] max-sm:w-full max-sm:h-[50px] max-sm:rounded-[6px] max-sm:pt-[13px] max-sm:pr-[135.62px] max-sm:pb-[13px] max-sm:pl-[135.61px]'><p className='lg:w-[86px] lg:h-[24px] lg:max-w-[422px] font-medium lg:text-[16px] lg:leading-[24px] lg:tracking-[0%] lg:flex lg:justify-center lg:items-center md:text-[16px] md:leading-[24px] md:tracking-[0] md:text-center md:flex md:items-center max-sm:text-[16px] max-sm:leading-[24px] max-sm:tracking-[0em] max-sm:text-center text-white'>Add to cart</p></button>
                </form>
                <div className='lg:w-full lg:h-[854.98px]'>
                    <section className='lg:w-full lg:h-[122px] lg:top-[732.98px] lg:flex lg:gap-[24px] lg:mt-[30px] md:flex md:w-[624px] md:h-[122px] md:gap-[24px] md:mt-[30px] max-sm:w-full max-sm:h-[268px] max-sm:flex max-sm:flex-col max-sm:gap-[24px] max-sm:mt-3'>
                        <div className='lg:w-[232px] lg:h-[122px] lg:rounded-lg lg:border-[1px] lg:p-[25px] lg:flex lg:flex-col lg:gap-1 border-gray-200 bg-gray-200 md:w-[300px] md:h-[122px] md:rounded-[8px] md:border md:p-[25px] md:gap-[4px] max-sm:w-full max-sm:h-[122px] max-sm:rounded-[8px] max-sm:border max-sm:p-[25px] max-sm:flex max-sm:flex-col max-sm:gap-[4px]'>
                            {/* term */}
                            <div className='lg:w-[182px] lg:h-12 lg:pr-[19.6px] lg:pb-[1.5px] lg:pl-[19.59px] lg:flex lg:flex-col lg:gap-[2.5px] md:w-[250px] md:h-[48px] md:pr-[53.6px] md:pb-[1.5px] md:pl-[53.59px] md:gap-[2.5px] max-sm:w-full max-sm:h-[48px] max-sm:pr-[82.6px] max-sm:pb-[1.5px] max-sm:pl-[82.59px] max-sm:gap-[2.5px] max-sm:flex max-sm:flex-col'>
                                <LuChrome className='lg:border-[1px] lg:border-gray-400 w-[18px] h-[18px] mt-[3px] ml-[57px] border-[1.5px] md:w-[18px] md:h-[18px] md:border-[1.5px] max-sm:w-[18px] max-sm:h-[18px] max-sm:mt-[3px] max-sm:ml-[60px] max-sm:border-[1.5px]' />
                                <p className='lg:w-[142px] lg:h-[20px] font-medium lg:text-[14px] lg:leading-[20px] tracking-[0] lg:text-center lg:flex lg:items-center lg:justify-center md:w-[142px] md:h-[20px] md:text-[14px] md:leading-[20px] md:tracking-[0] md:text-center md:flex md:items-center max-sm:w-[142px] max-sm:h-[20px] max-sm:text-[14px] max-sm:leading-[20px] max-sm:tracking-[0px] max-sm:text-center max-sm:align-middle '>International delivery</p>
                            </div>
                            {/* details */}
                            <div className='lg:w-[182px] lg:h-[20px] lg:pr-[8.61px] lg:pl-[8.59px] md:w-[250px] md:h-[20px] md:pr-[42.61px] md:pl-[42.59px] max-sm:w-full max-sm:h-fit max-sm:pr-[71.61px] max-sm:pl-[71.59px]'>
                                {/* <CiDollar className='border-[1.5px] border-gray-400 w-[18px] h-[18px] lg:mt-[3px] lg:ml-[42px] md:ml-11 max-sm:h-[24px] max-sm:w-[24px] max-sm:ml-10' /> */}
                                <p className='lg:w-[164px] lg:h-[20px] lg:max-w-[182px] font-normal lg:text-[14px] lg:leading-[20px] lg:tracking-[0] lg:text-center lg:flex lg:items-center lg:justify-center text-gray-500 md:text-[14px] md:leading-[20px] md:tracking-[0] md:text-center max-sm:text-[14px] max-sm:leading-[20px] max-sm:tracking-[0] max-sm:text-center max-sm:align-middle max-sm:ml-[-40px]'>Get your order in 2 years</p>
                            </div>
                        </div>
                        <div className='lg:w-[232px] lg:h-[122px] lg:rounded-lg  lg:border-[1px] lg:p-[25px] lg:flex lg:flex-col lg:gap-1 border-gray-200 bg-gray-200 md:w-[300px] md:h-[122px] md:rounded-[8px] md:border md:p-[25px] md:gap-[4px] max-sm:w-full max-sm:h-[122px] max-sm:rounded-[8px] max-sm:border-1px max-sm:p-[25px] max-sm:flex max-sm:flex-col max-sm:gap-[4px]'>
                            {/* term */}
                            <div className='w-[182px] h-12 pr-[37.22px] pb-[1.5px] pl-[37.22px] lg:flex lg:flex-col lg:relative lg:gap-[2.5px] md:w-[250px] md:h-[48px] md:pr-[71.22px] md:pb-[1.5px] md:pl-[71.22px] md:gap-[2.5px] max-sm:w-full max-sm:max-w-[308px] max-sm:h-[48px] max-sm:pr-[100.22px] max-sm:pb-[1.5px] max-sm:pl-[100.22px] max-sm:flex max-sm:flex-col max-sm:gap-[2.5px]'>
                                <CiDollar className='border-[1.5px] border-gray-400 w-[18px] h-[18px] lg:mt-[3px] lg:ml-[10px] md:ml-11 max-sm:h-[24px] max-sm:w-[24px] max-sm:ml-10' />
                                <p className='w-[107px] h-[20px] lg:font-medium lg:text-[14px] lg:leading-[20px] lg:absolute lg:top-[22px] lg:left-[36px]  lg:tracking-[0] lg:text-center lg:flex lg:mr-[30px] lg:items-center lg:justify-center text-gray-900 md:text-[14px] md:leading-[20px] md:tracking-[0] md:text-center max-sm:w-[107px] max-sm:h-[20px] max-sm:text-[14px] max-sm:leading-[20px] max-sm:tracking-[0%] max-sm:text-center max-sm:align-middle '>Loyalty rewards</p>
                            </div>
                            {/* details */}
                            <div className='lg:w-[182px] lg:h-[20px] lg:pr-[13.08px] lg:pl-[13.06px] md:w-[250px] md:h-[20px] md:pr-[47.08px] md:pl-[47.06px] max-sm:w-full max-sm:max-w-[308px] max-sm:h-auto max-sm:pr-[76.08px] max-sm:pl-[76.06px]'>
                                <p className='lg:w-[156px] lg:h-[20px] text-gray-500 lg:font-normal lg:text-[14px] lg:leading-[20px] lg:tracking-[0] lg:text-center lg:flex lg:items-center lg:justify-center md:text-[14px] md:leading-[20px] md:tracking-[0] md:text-center max-sm:text-[14px] max-sm:leading-[20px] max-sm:tracking-[0%] max-sm:text-center max-sm:align-middle'>Don't look at other tees</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailBanner
