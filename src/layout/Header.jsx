import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link,NavLink } from 'react-router-dom'
import { navItems } from '../constant/data'
import Button from '../common/Button'
const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const headerRef = useRef(null);
    useEffect(()=>{
        const handleSlideIn = function(){
            if(this.scrollY > 50){
                headerRef.current.classList.add('active')
            }else{
                headerRef.current.classList.remove('active')
            }
        }
        window.addEventListener('scroll',handleSlideIn);
        return ()=>{
            window.removeEventListener('scroll',handleSlideIn)
        }
    },[])
  return (
    <header ref={headerRef} className="header">
        <div className="container flex items-center justify-between">
            <Link to='/'>
                <img src="/images/logo.svg" alt="logo" />
            </Link>
            {/* Mobile Menu */}
            <nav className={`navbar ${menuOpen ? "active" : ""}`}>
                <div className="flex items-center justify-between">
                    <Link to=''>
                        <img src="/images/logo.svg" alt="logo" />
                    </Link>
                    <button onClick={()=>setMenuOpen(!menuOpen)}>
                        <X size={30} />
                    </button>
                </div>

                <ul className="mt-8 grid gap-6">
                    {navItems.map((item)=>(
                        <li key={item.id}>
                            <NavLink 
                                to={item.path} 
                                className={({ isActive }) => 
                                    `font-semibold transition-colors text-headerClr hover:text-secondaryClr duration-300 ${
                                    isActive ? 'text-secondaryClr' : ''
                                    }`} onClick={()=>setMenuOpen(!menuOpen)}>
                            {item.label}
                            </NavLink>

                        </li>
                    ))}
                </ul>
                <Button label='Get A Quote' path='' className='btn-primary mt-12 lg:hidden' />
            </nav>
            <button className='lg:hidden' onClick={()=>setMenuOpen(!menuOpen)}>
                <Menu size={30} />
            </button>
            <div className={`overlay ${menuOpen ? "active" :""}`} onClick={()=>setMenuOpen(!menuOpen)}></div>

            <ul className="lg:flex hidden gap-10">
                    {navItems.map((item)=>(
                        <li key={item.id}>
                            {item.dropDown ? <NavLink to={item.path} className={({ isActive }) => 
                                    `font-semibold transition-colors text-headerClr hover:text-secondaryClr duration-300 ${
                                    isActive ? 'text-secondaryClr' : ''
                                    }`}>
                                <ChevronDown />
                                {item.label}
                            </NavLink> : 
                            <NavLink 
                                to={item.path} 
                                className={({ isActive }) => 
                                    `font-semibold transition-colors text-headerClr hover:text-secondaryClr duration-300 ${
                                    isActive ? 'text-secondaryClr' : ''
                                    }`}>
                            {item.label}
                            </NavLink>
                            }
                        </li>
                    ))}
                </ul>
                <Button label='Get A Quote' path='' className='bg-black text-white p-2 pr-7 lg:flex items-center rounded-full gap-[10px] max-w-max font-medium hidden' />
        </div>
    </header>
  )
}

export default Header