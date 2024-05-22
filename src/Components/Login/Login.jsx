import checkboxImg from '../../assets/logo/Checkbox.png'

const Login = () => {
    return (
        <div>
            <div>
                {/* left side */}
                <div className=' text-left flex flex-col items-start justify-start'>
                    <button className=" text-xs font-medium text-white bg-[#22C55E] py-[2px] px-2 rounded-3xl">
                        HEADER
                    </button>
                    <h2 className=" text-6xl font-bold text-left text-[#2A3342] mt-4">A small business <br />is only as good <br />as its tools. </h2>
                    <h4 className=" text-[#556987] font-medium text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipisng.</h4>
                    <div className=' flex justify-center items-center gap-1 mt-4'>
                        <img className=' w-[20px] h-[20px]' src={checkboxImg} alt="" />
                        <p className=" text-[#556987] font-medium text-xl">Mauris pellentesque congue libero nec</p>
                    </div>
                    <div className=' flex justify-center items-center gap-1 my-2'>
                        <img className=' w-[20px] h-[20px]' src={checkboxImg} alt="" />
                        <p className=" text-[#556987] font-medium text-xl">Suspendisse mollis tincidunt</p>
                    </div>
                    <div className=' flex justify-center items-center gap-1'>
                        <img className=' w-[20px] h-[20px]' src={checkboxImg} alt="" />
                        <p className=" text-[#556987] font-medium text-xl">Praesent varius justo vel justo pulvinar </p>
                    </div>
                </div>
                {/* right side */}
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;