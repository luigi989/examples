import { useState } from 'react';

interface TabHeaderProps {
    checked: boolean;
    to: string;
    text: string; 
    onClick: () => void;
}

export default function Login_form_trans() {

    const [loginChecked, setLoginChecked] = useState(true);
    const [registerChecked, setRegisterChecked] = useState(false);

    function showLogin() {
        setLoginChecked(true);
        setRegisterChecked(false);
    }

    function showRegister() {
        setRegisterChecked(true);
        setLoginChecked(false);
    }

    const TabHeader = ({checked, to, text, onClick} : TabHeaderProps) => {
        return (
            <label className={`hover:border-b-4 hover:border-solid hover:border-[#a51717]
                               mr-4 text-4xl cursor-pointer
                ${checked ? 'border-b-8 border-solid border-[#a51717]' : ''}`}
                onClick={onClick} htmlFor={to}>
                {text}
            </label>
        );
    }

    return (
        <div className={`h-screen w-screen flex-1 flex justify-center items-center bg-astronaut bg-cover bg-center`}>
            <div className="flex h-1/3 flex-col">
                <div className='text-white mb-4'>
                                        {/* <TabHeader text='Login' checked={loginChecked} onClick={showLogin} to='login_btn' />
                    <TabHeader text='Register' checked={registerChecked} onClick={showRegister} to='register_btn' /> */}
                    <label className={`hover:border-b-4 hover:border-solid hover:border-[#a51717]
                                      ${loginChecked ? 'border-b-8 border-solid border-[#a51717]' : ''}
                                      mr-4 text-4xl cursor-pointer`} onClick={showLogin}
                        htmlFor="login_btn">Login</label>
                    <label className={`hover:border-b-4 hover:border-solid hover:border-[#a51717]
                                      ${registerChecked ? 'border-b-8 border-solid border-[#a51717]' : ''}
                                      text-4xl cursor-pointer`} onClick={showRegister}
                        htmlFor="register_btn">Register</label>
                </div>

                <div>
                    <input className="peer hidden" type="radio" id="login_btn" name="group" defaultChecked />
                    <div className="hidden peer-checked:flex flex-col" id="login_content">
                        <input className='py-1 my-2 border-solid border-b-2 border-[#a51717]
                                        focus:border-dotted placeholder:text-white   
                                        outline-none bg-transparent text-white'
                            type="text"
                            name=""
                            placeholder="Username"
                        />
                        <input className='py-1 my-2 border-solid border-b-2 border-[#a51717]
                                        focus:border-dotted placeholder:text-white
                                        outline-none bg-transparent text-white'
                            type="password"
                            name=""
                            placeholder="Password"
                        />
                        <button className='text-white text-xs w-fit'>Forgot your password?</button>
                        <input className='hover:bg-[#a51717] focus:bg-[#a51717]
                                        border-solid border-2 border-[#a51717]
                                        bg-none text-white p-1 cursor-pointer my-2'
                            type="submit"
                            name=""
                            value="Login"
                        />
                    </div>
                </div>

                <div>
                    <input className="peer hidden" type="radio" id="register_btn" name="group" />
                    <div className="hidden peer-checked:flex flex-col" id="register_content">
                        <input className='py-1 my-2 border-solid border-b-2 border-[#a51717]
                                        focus:border-dotted placeholder:text-white
                                        outline-none bg-transparent text-white'
                            type="text"
                            name=""
                            placeholder="Username" />
                        <input className='py-1 my-2 border-solid border-b-2 border-[#a51717]
                                        focus:border-dotted placeholder:text-white
                                        outline-none bg-transparent text-white'
                            type="password"
                            name=""
                            placeholder="Password" />
                        <input className='py-1 my-2 border-solid border-b-2 border-[#a51717]
                                        focus:border-dotted placeholder:text-white
                                        outline-none bg-transparent text-white'
                            type="password"
                            name=""
                            placeholder="Write password again" />
                        <label htmlFor="accept" className='my-1 text-white text-xs 
                                                       cursor-pointer'>
                            <input type="checkbox" id="accept" name="accept"
                                className='mr-2 checked:bg-red-500' />
                            I hereby accept the conditions
                        </label>
                        <input className='hover:bg-[#a51717] focus:bg-[#a51717]
                                        border-solid border-2 border-[#a51717]
                                        bg-none text-white p-1 cursor-pointer my-2'
                            type="submit"
                            name=""
                            value="Create account" />
                    </div>
                </div>
            </div>
        </div>
    );
}