import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useLocation } from 'react-router-dom'

const PagesRecrutie = () => {
    const location = useLocation();
    const path = location.pathname;

    const paths = {
        "/about":"About Us",
        "/blog" : "Blog",
        "/caseStudies" : "Case Studies",
        "/services" : "Services",
        "/page" : "Page"
    }

    let pathTitle = "Error";

    if(paths[path]){
        pathTitle = paths[path];
    }else if(path.startsWith("/blog/")){
        pathTitle = 'Blog Details'
    }
    
  return (
    <section className='bg-[#E1E8FF] mt-[103px]'>
        <div className="container flex py-5 items-center gap-1 text-black">
            <p>Recrutie</p>
            <ChevronRight size={15} />
            <p>{pathTitle}</p>
        </div>
    </section>
  )
}

export default PagesRecrutie