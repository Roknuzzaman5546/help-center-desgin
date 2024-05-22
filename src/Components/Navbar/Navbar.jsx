// This is navbar component
import logoImg from '../../assets/logo/logo.png'

const Navbar = () => {
    return (
        <div className=' w-11/12 mx-auto mt-2 h-[80px]'>
            <div className=' hidden md:flex justify-between items-center'>
                {/* logo */}
                <div className=' flex justify-center items-center gap-[6px]'>
                    <img className=' w-[25.69px] h-[32px]' src={logoImg} alt="" />
                    <h2 className=' text-[#2A3342] text-2xl font-bold'>Flex</h2>
                </div>
                {/* menu */}
                <div className=' flex justify-center items-center gap-8 text-[#556987]'>
                    <p className='font-medium text-base'>Product</p>
                    <p className='font-medium text-base'>Features</p>
                    <p className='font-medium text-base'>Pricing</p>
                    <p className='font-medium text-base'>Resources</p>
                </div>
                {/* log, sign, option */}
                <div className=' flex justify-center items-center gap-2'>
                    <h2 className=' font-medium text-base'>Log in</h2>
                    <button className=' bg-[#22C55E] rounded-md py-2 px-4 text-white'>
                        Sign up
                    </button>
                </div>
            </div>
            {/* for small device */}
            <div className=' md:hidden flex flex-col justify-between items-center'>
                <div className=' flex justify-between items-center'>
                    {/* logo */}
                    <div className=' flex justify-center items-center gap-[6px]'>
                        <img className=' w-[25.69px] h-[32px]' src={logoImg} alt="" />
                        <h2 className=' text-[#2A3342] text-2xl font-bold'>Flex</h2>
                    </div>
                    {/* log, sign, option */}
                    <div className=' flex justify-center items-center gap-2'>
                        <h2 className=' font-medium text-base'>Log in</h2>
                        <button className=' bg-[#22C55E] rounded-md py-2 px-4 text-white'>
                            Sign up
                        </button>
                    </div>
                </div>
                {/* menu */}
                <div className=' flex justify-center items-center gap-2 text-[#556987]'>
                    <p className='font-medium text-base'>Product</p>
                    <p className='font-medium text-base'>Features</p>
                    <p className='font-medium text-base'>Pricing</p>
                    <p className='font-medium text-base'>Resources</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;