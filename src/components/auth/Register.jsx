import {Link} from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'


function Register() {
  return (
    <div className="bg-no-repeat bg-cover bg-center relative" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1018%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(20%2c 27%2c 41%2c 1)'%3e%3c/rect%3e%3cpath d='M1280.2261153053437 253.9804551646989L1130.6240430935543 288.51881496487056 1165.162402893726 438.12088717666 1314.7644751055154 403.5825273764883z' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1430.1173560824327 217.55339682310208L1341.9098338042784 151.08426116086645 1363.648220420197 305.7609191012564z' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1102.8974035625918 357.246741297324L1166.4385311000108 433.1188374015215 1197.4412579420498 352.3539727296363z' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M412.11 189.58 a105.4 105.4 0 1 0 210.8 0 a105.4 105.4 0 1 0 -210.8 0z' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1158.19%2c341.661C1190.349%2c342.311%2c1218.625%2c321.775%2c1234.419%2c293.753C1249.917%2c266.255%2c1250.115%2c233.107%2c1234.988%2c205.403C1219.179%2c176.451%2c1191.158%2c153.041%2c1158.19%2c154.147C1126.607%2c155.206%2c1104.408%2c182.237%2c1089.825%2c210.272C1076.544%2c235.802%2c1073.834%2c265.247%2c1087.117%2c290.776C1101.532%2c318.479%2c1126.967%2c341.03%2c1158.19%2c341.661' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1140.9049129956431 34.19235868258295L1039.3288964750357-54.10632535898313 951.0302124334696 47.469691161624354 1052.606228954077 135.76837520319043z' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1018'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`
    }}
    >

        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            <Link to='/'>
                <div className='flex items-center mt-2'>
                    <img src={Logo} alt="Logo" className='lg:cursor-pointer h-12' />
                    <h2 className='tracking-wider text-md text-white'>CoinGetter</h2>
                </div>
            </Link>
            <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl">
                <div className="self-start hidden lg:flex flex-col  text-white">
                    <h1 className="mb-3 font-bold text-4xl">Hi, Welcome to Coingetter Registration Page </h1>
                    <p className="pr-3 tracking-wider">Welcome to Coingetter - A cryptocurrency live price platform</p>
                    <p className="pr-3 tracking-wider">Note: This is not working for now</p>
                </div>
            </div>
            <div className="flex justify-center items-center self-center z-10">
                <div className="p-12 bg-white mx-auto rounded-2xl w-100 shadow-inner">
                    <div className="mb-4">
                        <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
                        <p className="text-gray-500">Create a new account</p>
                    </div>
                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                            <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="mail@gmail.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                Password
                            </label>
                            <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password" />
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center bg-green  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wider font-semibold  shadow-md cursor-pointer transition ease-in duration-500">
                                Sign Up
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Register