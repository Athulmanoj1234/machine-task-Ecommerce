import { IoSearch } from "react-icons/io5";
import 'primeicons/primeicons.css';
import logo from "../../logo.svg"
import { useEffect, useState } from "react";
import { getProducts } from "../../query/action";
import ProductBanner from "./ProductsBanner/ProductBanner";
import { useNavigate } from "react-router-dom";

export interface PaginateData {
    startIndex: number;
    endIndex: number;
}

const Banner = () => {

    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState<string>('');
    const [filterCategory, setFilterCategory] = useState<string>('');
    const [filterPriceRange, setFilterPriceRange] = useState<string>('');
    const [paginateValue, setPaginateValue] = useState<PaginateData>({
        startIndex: 1,
        endIndex: 7
    });

    const [fullResponse, setFullResponse] = useState([]);
    const [filteredResponse, setFilteredResponse] = useState([]);
    const [searchDataResponse, setSearchDataResponse] = useState([]);

    
    const handleCategoryChange = async (ev: any) => {
        setSearchValue("");
        const selected = ev.target.value;
        setFilterCategory(selected);
        try {
            const productData = await getProducts({
                searchValue,
                filterCategory: selected,
                filterPriceRange
            });
        } catch (err) {
            navigate('/some-wrong');
        }
    };



    const handlePriceChange = async (ev: any) => {
        setSearchValue("");
        const selected = ev.target.value;
        setFilterPriceRange(selected);
        const productData = await getProducts({
            searchValue,
            filterCategory,
            filterPriceRange: selected,
        });
    };


    const handleSearch = async () => {
        const productData = await getProducts({
            searchValue,
            filterCategory,
            filterPriceRange
        });
    }


    const handleDecreament = async () => {
        setPaginateValue((prevValue: PaginateData) => ({
            startIndex: prevValue.startIndex - 7,
            endIndex: prevValue.endIndex - 7,
        }));
        const products = await getProducts({
            searchValue,
            filterCategory,
            filterPriceRange,
            startIndex: paginateValue.startIndex - 7,
            endIndex: paginateValue.endIndex - 7,
        });
    }


    const handleIncreament = async () => {
        setPaginateValue((prevValue: PaginateData) => ({
            startIndex: prevValue.startIndex + 7,
            endIndex: prevValue.endIndex + 7,
        }))
        const products = await getProducts({
            searchValue,
            filterCategory,
            filterPriceRange,
            startIndex: paginateValue.startIndex + 7,
            endIndex: paginateValue.endIndex + 7,
        });
    }


    useEffect(() => {
        console.log(paginateValue.startIndex, paginateValue.endIndex);
        async function fetchData() {
            const productData = await getProducts({
                searchValue,
                filterCategory,
                filterPriceRange,
                startIndex: paginateValue.startIndex,
                endIndex: paginateValue.endIndex,
            });
            console.log("productData:", productData?.data?.data);
            setFullResponse(productData?.data?.data);
        }
        fetchData();
    }, [paginateValue]);


    return (
        <section className='bg-white h-[100%] shadow-2xl rounded-[44px]'>
            <div className='flex gap-6 border-b-2 h-[8%] w-full relative'>
                <button className='active:border-b-black active:border-b-1 absolute top-[13px] left-[4%]'><h3 className='font-bold '>All products</h3></button>
                <button className='active:border-b-black active:border-b-1 absolute top-[13px] left-[15%]'><h3 className='font-bold'>Active products</h3></button>
            </div>
            <div className='flex h-[10%] p-3 w-full gap-[250px]'>
                <div className='w-[50%] relative'>
                    <input type="text" className='border-2 border-gray-400 w-[80%] rounded-xl outline-none font-normal pl-9' value={searchValue} onChange={ev => setSearchValue(ev.target.value)} />
                    <button onClick={handleSearch}><span className="pi pi-search absolute right-[96%] bottom-[30%]"></span></button>
                </div>
                <div className='w-[50%] flex '>
                    <label className='font-bold' htmlFor="category">category:</label>
                    <select name="category" id="" className="mt-[-7px] border-none"
                        onChange={handleCategoryChange}  >
                        <option value="">Select Category</option>
                        <option value="electronic appliances" >electronic appliances</option>
                        <option value="mobile phones" >mobile phones</option>
                        <option value="clothing" >clothing</option>
                        <option value="home decorations" >home decorations</option>
                    </select>
                    <label htmlFor="price-range" className='font-bold ml-6'>price-range:</label>
                    <select name="price-range" id="" className="mt-[-7px] active:outline-none"
                        onChange={handlePriceChange} >
                        <option value="">Select Price</option>
                        <option value="below 1000" >below 1000</option>
                        <option value="below 700" >below 700</option>
                        <option value="below 800" >below 400</option>
                        <option value="below 200" >below 200</option>
                    </select>
                </div>
            </div>
            <table className="w-full mt-4">
                <thead className="">
                    <tr style={{ padding: '4rem', textAlign: 'center' }} className="bg-gray-100 h-[50px]">
                        <th className="text-center">image</th>
                        <th className="text-center">product</th>
                        <th className="text-center">price</th>
                        <th className="text-center">category</th>
                        <th className="text-center">Available</th>
                    </tr>
                </thead>
                <tbody>
                    {fullResponse?.length > 0 ?
                        <ProductBanner /> : <div className="font-bold text-red-500 relative"><h3 className="absolute top-[130px] left-[550px] text-2xl">No Items Currently Available....</h3></div>
                    }
                </tbody>
            </table>

            <div className="relative top-[55%] w-full flex">
                {paginateValue.startIndex > 7 && (<button className="absolute right-[180px] font-bold" onClick={handleDecreament}>previous</button>)}
                <p className="font-semibold absolute right-[130px]">{paginateValue.startIndex}-{paginateValue.endIndex}</p>
                <button className="absolute right-[75px] font-bold" onClick={handleIncreament}>Next</button>
            </div>
        </section>
    )
}

export default Banner
