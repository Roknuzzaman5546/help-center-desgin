import checkboxImg from '../../assets/logo/Checkbox.png'
import LoginLogo from '../../assets/logo/Frame 3.jpg'
import googleLogo from '../../assets/logo/Vector.png'
import facebookLogo from '../../assets/logo/facebook.png'
import appleLogo from '../../assets/logo/Outline.png'

const Login = () => {
    return (
        <div className=' w-11/12 mx-auto mt-12'>
            <div className=' flex md:flex-row flex-col justify-around items-center md:gap-1 gap-12'>
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
                <div className=' bg-white flex flex-col items-center justify-center md:w-[554px] w-[350px] h-[644px] shadow-xl'>
                    <img className=' w-[60px] he-[60px] -mt-32' src={LoginLogo} alt="" />
                    <div className=' text-center mb-5'>
                        <h2 className=' font-bold text-3xl mt-12'>Join our community</h2>
                        <p className=' text-lg font-medium text-[#556987] mt-2'>Start your free trial</p>
                    </div>
                    {/* email section */}
                    <form>
                        {/* email */}
                        <div className=' flex flex-col items-start justify-start'>
                            <span className=' font-medium'>Email</span>
                            <input className=' md:w-[358px] w-[280px] h-[46px] py-[10px] px-[14px] border rounded-lg' placeholder='Enter your email address' type="text" name="" id="" />
                        </div>
                        {/* sign button */}
                        <input className=' text-white bg-[#22C55E] rounded-md mt-4 md:w-[358px] w-[280px] h-[46px] py-[12px] px-[18px]' type="submit" value="Get Started" />
                    </form>
                    {/* or section */}
                    <div className=' flex justify-center items-center gap-2 my-3'>
                        <div className=' bg-[#EEF0F3] w-[161px] h-[1px]'></div>
                        <p className=' text-xs font-medium text-[#8896AB]'>or</p>
                        <div className=' bg-[#EEF0F3] w-[161px] h-[1px]'></div>
                    </div>
                    {/* google section */}
                    <div className=' flex items-center justify-center gap-2 md:w-[358px] w-[280px] h-[46px] py-[12px] px-[18px] rounded-md border'>
                        <img src={googleLogo} alt="" />
                        <p className=' font-medium text-[#556987]'>Sign in with Google</p>
                    </div>
                    {/* facebook */}
                    <div className=' flex items-center justify-center gap-2 md:w-[358px] w-[280px] h-[46px] py-[12px] px-[18px] rounded-md border my-3'>
                        <img src={facebookLogo} alt="" />
                        <p className=' font-medium text-[#556987]'>Sign in with Facebook</p>
                    </div>
                    {/* apple */}
                    <div className=' flex items-center justify-center gap-2 md:w-[358px] w-[280px] h-[46px] py-[12px] px-[18px] rounded-md border'>
                        <img src={appleLogo} alt="" />
                        <p className=' font-medium text-[#556987]'>Sign in with Apple</p>
                    </div>
                    {/* down line text */}
                    <h4 className=' text-sm font-medium text-[#556987] mt-3'>Already have an account? <span className=' text-[#22C55E]'>Sign In</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Login;