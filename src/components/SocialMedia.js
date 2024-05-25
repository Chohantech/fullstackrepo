import { Facebook, Instagram, RadioTowerIcon } from 'lucide-react';
import React from 'react';

const SocialMedia = () => {
    return (
        <div className='w-[50%] flex flex-row justify-between cursor-pointer  items-center mt-3 gap-1 '>
            <Facebook fill='#000000'  className=' hover:transform hover:scale-125'/>
            <Instagram className=' hover:transform hover:scale-125'/>
            <Facebook fill='#000000' className=' hover:transform hover:scale-125'/>
            <Instagram className=' hover:transform hover:scale-125'/>
            <Facebook fill='#000000' className=' hover:transform hover:scale-125'/>
            <Instagram className=' hover:transform hover:scale-125'/>
        </div>
    );
};

export default SocialMedia;