import './style.scss';
import Logo from '../assets/Logo.png';
import menubar from '../assets/menubar.png';
import close from '../assets/close.png';
import { useState } from 'react';
export const Dashboard = () => {
    const listitems = ['Features','Pricing','About Us'];
    const [toggle,setToggle] = useState(false);
    return(
        <div className="dashboard-container">
            <div className = 'logo-container'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='menu-bar-container'>
                <button onClick={()=>setToggle(!toggle)}><img style={{width:19,height:20}} src={toggle ? close :menubar}/></button>
            </div>
            <div className={toggle ? 'menu-container slide' : 'menu-container'}>
                <div className='menu-list-container'>
                    {
                        listitems.map((item,index)=>(
                            <li key={index} className='menu-item'>{item}</li>
                        ))
                    }
                </div>
                <div className='btn-container'>
                    <button className='customer-login-btn'>Customer Login</button>
                    <button className='signup-btn'>Sign Up</button>
                </div>
            </div>
            
        </div>
    )
}