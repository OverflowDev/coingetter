// import bg from '../../assets/svg/bg.svg'
import { Link } from "react-router-dom"

import Logo from '../../assets/svg/logo.svg'


function Login() {

  return (
    <div className="bg-no-repeat bg-cover bg-center relative" style={{ 
        // backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(20%2c 27%2c 41%2c 1)'%3e%3c/rect%3e%3cpath d='M1038.78 99.04 a140.83 140.83 0 1 0 281.66 0 a140.83 140.83 0 1 0 -281.66 0z' fill='rgba(0%2c 189%2c 176%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M876.0911390319425 598.2282536163516L853.9431173366489 458.3911480906363 714.1060118109336 480.53916978592986 736.2540335062272 620.3762753116451z' fill='rgba(0%2c 189%2c 176%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M650.596%2c307.617C680.616%2c307.736%2c712.813%2c299.83%2c727.435%2c273.612C741.793%2c247.866%2c730.307%2c217.261%2c715.058%2c192.032C700.471%2c167.898%2c678.787%2c147.191%2c650.596%2c146.481C621.307%2c145.743%2c595.311%2c163.504%2c580.255%2c188.637C564.732%2c214.549%2c559.429%2c247.007%2c574.801%2c273.009C589.95%2c298.634%2c620.828%2c307.499%2c650.596%2c307.617' fill='rgba(0%2c 189%2c 176%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1266.0681747720105 615.6679552426376L1300.3602946110987 487.6880217039198 1172.3803610723808 453.39590186483167 1138.0882412332926 581.3758354035494z' fill='rgba(0%2c 189%2c 176%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M597.750157127304 394.210220285223L636.808263293558 530.4220238784887 773.0200668868238 491.36391771223464 733.9619607205697 355.15211411896894z' fill='rgba(0%2c 189%2c 176%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M305.46 553.53 a154.76 154.76 0 1 0 309.52 0 a154.76 154.76 0 1 0 -309.52 0z' fill='rgba(0%2c 189%2c 176%2c 1)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(20%2c 27%2c 41%2c 1)'%3e%3c/rect%3e%3cpath d='M968.5129240123226 519.7085613947104L1117.8692515908697 522.315585790034 1120.4762759861933 372.9592582114868 971.1199484076462 370.3522338161632z' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M125.323%2c143.885C155.651%2c143.231%2c180.529%2c122.388%2c195.406%2c95.952C209.963%2c70.084%2c212.942%2c39.157%2c199.01%2c12.946C184.186%2c-14.944%2c156.881%2c-34.597%2c125.323%2c-35.902C91.415%2c-37.305%2c56.832%2c-23.237%2c40.262%2c6.38C24.004%2c35.439%2c32.28%2c70.776%2c49.797%2c99.094C66.301%2c125.773%2c93.959%2c144.562%2c125.323%2c143.885' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M938.243088509974 529.5477322892076L1022.4185154953175 567.0250469811768 1059.8958301872867 482.84961999583334 975.7204032019432 445.3723053038641z' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M217.819%2c700.633C263.796%2c696.66%2c290.746%2c652.275%2c310.339%2c610.493C326.525%2c575.976%2c328.452%2c537.213%2c310.128%2c503.782C291.025%2c468.93%2c257.487%2c444.161%2c217.819%2c441.697C173.356%2c438.936%2c127.972%2c453.869%2c103.257%2c490.934C75.754%2c532.181%2c68.958%2c585.792%2c92.727%2c629.299C117.393%2c674.448%2c166.563%2c705.062%2c217.819%2c700.633' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M663.885%2c295.579C690.426%2c294.338%2c713.999%2c278.914%2c726.517%2c255.478C738.344%2c233.336%2c735.399%2c207.014%2c722.78%2c185.314C710.236%2c163.744%2c688.837%2c147.861%2c663.885%2c147.775C638.796%2c147.688%2c617.889%2c163.827%2c604.278%2c184.903C589.116%2c208.38%2c576.959%2c237.248%2c590.211%2c261.853C603.937%2c287.34%2c634.969%2c296.931%2c663.885%2c295.579' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M263.79008986038895 331.8836414080598L313.815558024988 245.23698887455495 227.1689054914831 195.21152070995595 177.14343732688408 281.8581732434608z' fill='rgba(2%2c 125%2c 117%2c 1)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`
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
                    <h1 className="mb-3 font-bold text-4xl">Hi, Welcome to Coingetter </h1>
                    <p className="pr-3 tracking-wider">Welcome to Coingetter - A cryptocurrency live price platform</p>
                    <p className="pr-3 tracking-wider">Note: This is not working for now</p>
                </div>
            </div>
            <div className="flex justify-center items-center self-center z-10">
                <div className="p-12 bg-white mx-auto rounded-2xl w-100 shadow-inner">
                    <div className="mb-4">
                        <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                        <p className="text-gray-500">Please sign in to your account.</p>
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
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                <label for="remember_me" className="ml-2 block text-sm text-gray-800">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="/" className="text-deepGreen">
                                Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="w-full flex justify-center bg-green  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wider font-semibold  shadow-md cursor-pointer transition ease-in duration-500">
                                Login
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login