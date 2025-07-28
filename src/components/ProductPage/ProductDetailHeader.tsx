/** @jsxImportSource react */
import { Link } from 'react-router-dom'
import { FaBagShopping } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdAccountCircle } from "react-icons/md";

const ProductDetailHeader = () => {
  return (
    <header className='lg:w-full lg:h-[65px] bg-white md:w-full md:h-[65px] max-sm:w-[390px] max-sm:h-[65px]'>
        <div className='lg:w-full lg:h-[65px] lg:px-[32px] md:w-full md:h-[65px] md:px-[24px] max-sm:w-[390px] max-sm:h-[65px] max-sm:pr-[16px] max-sm:pl-[16px]'>
            <div className='lg:w-full lg:h-[65px] lg:border-b-[1px] border-gray-200 lg:pb-[1px] md:w-full md:h-[65px] md:border-b-[1px] md:pb-[1px] max-sm:w-[358px] max-sm:h-[65px] max-sm:border-b-[1px] max-sm:pb-[1px] '>
                <div className='lg:w-full lg:h-[64px] lg:flex lg:justify-between lg:gap-[93px] md:w-full md:h-[64px] md:flex md:justify-between md:pt-3 md:pb-3 max-sm:w-[358px] max-sm:h-16 max-sm:flex max-sm:justify-between max-sm:pt-3 max-sm:pb-3'>
                    <div className='lg:w-[589.21px] lg:h-[64px] md:w-[468px] md:h-[40px] max-sm:w-[160.21px] max-sm:h-[40px]'>
                        <div className='lg:hidden flex md:w-[466.7px] md:h-[40px] max-sm:w-[32px] max-sm:h-[40px]'>
                            <button className='w-10 h-10 -left-2 rounded-md p-2 max-sm:w-10 max-sm:h-10 max-sm:-ml-2 max-sm:rounded-md max-sm:p-2'><AiOutlineMenu className='md:w-[24px] md:h-[24px] max-sm:w-[24px] max-sm:h-[24px]' /></button>
                            <Link to={''} className='md:w-[48px] md:h-[40px] md:pt-2 md:pr-2 md:pb-2 md:pl-4 max-sm:w-12 max-sm:h-10 max-sm:pt-2 max-sm:pr-2 max-sm:pb-2 max-sm:pl-4 '><FaSearch className='md:w-[24px] md:h-[24px] md:top-[3px] md:left-[3px] md:active:border-[1.5px] md:active:border-gray-400 max-sm:w-[24px] max-sm:h-[24px]'/></Link>
                        </div>
                        <div className='lg:w-full lg:h-[64px] lg:flex md:hidden max-sm:hidden'>
                            <button className='lg:w-[51px] lg:h-[64px] lg:pt-[21.5px] lg:pb-[22.5px] font-medium lg:text-[14px] lg:leading-[20px] lg:tracking-[0] text-gray-700 md:w-10 md:h-10 md:-left-2 md:rounded-md md:p-2'>Women</button>
                            <div className='lg:w-[62px] lg:h-[64px] lg:pl-[32px]'>
                                <button className='lg:w-[30px] lg:h-[64px] lg:pt-[21.5px] lg:pb-[22.5px] font-medium lg:text-[14px] lg:leading-[20px] lg:tracking-[0] text-gray-700'>Men</button>
                            </div>
                            <div className='lg:w-[96px] lg:h-[64px] lg:pl-[32px]'>
                                <Link to={'/product'}><button className='font-medium lg:text-[14px] lg:pt-[21.5px] lg:pb-[22.5px] lg:leading-[20px] lg:tracking-[0] text-gray-700'>Company</button></Link>
                            </div>
                            <div className='lg:w-[76px] lg:h-[64px] lg:pl-[32px]'>
                                <Link to={'/products'}><button className='font-medium lg:text-[14px] lg:pt-[21.5px] lg:pb-[22.5px] lg:leading-[20px] lg:tracking-[0] text-gray-700'>Stores</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className='lg:w-[37.59px] lg:h-[32px]'> */}
                        {/* empty div with mark svg in figma in link */}
                    {/* </div> */}
                    <div className='lg:w-[589.21px] lg:h-[40px] lg:pt-[21.5px] lg:pb-[22.5px] lg:pl-[335px] lg:flex lg:gap-[5px] md:w-full md:h-[40px] md:flex md:pl-[180px] max-sm:flex max-sm:w-[160.21px] max-sm:h-[40px] max-sm:pl-[100px]'>
                        {/* <Link to={''} className='lg:flex lg:gap-2 md:hidden max-sm:hidden'>
                             <img src="/canada-flag-products-page.png" alt="" className='lg:w-[20px] lg:h-[15px] md:w-[24px] md:h-[24px]' />
                             <p className='font-medium lg:text-[14px] lg:leading-[20px] lg:tracking-[0] lg:mt-[-2px]'>CAD</p>
                        </Link> */}
                        <Link to={''} className='md:hidden max-sm:hidden lg:block'>
                            <FaSearch className='lg:w-[24px] lg:h-[24px] lg:active:border-[1.5px] active:border-gray-400 lg:mt-[-4px] lg:ml-[30px] md:h-[24px] md:w-[24px] mt-[2.25px] md:ml-[4.5px] md:active:border-[1.5px]' />
                        </Link>
                        <Link to={''} className='lg:w-[56px] lg:h-[40px] lg:py-[8px] lg:pr-[8px] lg:pb-[8px] lg:pl-[32px] md:w-[57.05px] md:h-[40px] max-sm:w-[40px] max-sm:h-[40px] max-sm:p-[8px]'><MdAccountCircle className='lg:w-[24px] lg:h-[24px] lg:active:border-[1.5px] lg:active:border-gray-400 lg:mt-[-12.7px] max:sm-[24px] max-sm:h-[24px] md:mt-[9px] md:h-[24px] md:w-[24px] md:ml-5 max-sm:w-[24px]'/></Link>
                        <div className='lg:w-[65.05px] lg:h-[24px] md:w-[57.05px] md:h-[24px]'>
                            <div className='lg:w-[57.05px] lg:h-[40px] lg:mt-[-11px] lg:flex lg:ml-[20px] md:w-[57.05px] md:h-10 md:-mt-2 max-sm:w-[57.05px] max-sm:h-[24px]'>
                                <Link to={''} className='lg:w-full lg:h-[40px] lg:p-[8px] lg:flex lg:mt-[-3.7px] md:w-[57.05px] md:h-10 md:p-2 md:flex md:mt-2 md:gap-2 max-sm:flex max-sm:w-[57.05px] max-sm:h-[40px] max-sm:p-[8px]'>
                                    <FaBagShopping className='lg:w-[26px] lg:h-[26px] md:w-[24px] md:h-[24px] max-sm:w-[24px] max-sm:h-[24px]' />
                                    <p className='lg:w-[18px] lg:h-[20px] lg:pl-[8px] font-medium lg:text-[14px] lg:leading-[20px] lg:tracking-[0] lg:mt-[3px] max-sm:w-[18px] max-sm:h-[20px] max-sm:pl-[8px]'>0</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </header>
  )
}

export default ProductDetailHeader
