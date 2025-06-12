import React from 'react'
import {FaFacebook, FaTwitter, } from 'react-icons/fa6'
import { FaInstagram, FaTiktok  } from "react-icons/fa";
function Footer() {
  return (
    <footer className='py-12 bg-neutral-900 text-neutral-200'>
      <div className='container flex max-md:flex-col items-center md:items-start gap-8 justify-between'>
        <p className='text-3xl font-black'>Shortly</p>
        {
          ...LINKS.map((link) => (
            <div key={link.label} className='flex flex-col max-md:items-center gap-2'>
              <h4 className='font-bold capitalize text-lg'>{link.label}</h4>
              <ul className='max-md:text-center'>
                {link.links.map((item) => (
                  <li key={item} className='cursor-pointer hover:text-primary transition-colors duration-200'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
        <div className='flex items-center gap-2'>
          <FaFacebook className='text-2xl cursor-pointer hover:text-primary transition-colors duration-200' />
          <FaTwitter className='text-2xl cursor-pointer hover:text-primary transition-colors duration-200' />
          <FaInstagram className='text-2xl cursor-pointer hover:text-primary transition-colors duration-200' />
          <FaTiktok className='text-2xl cursor-pointer hover:text-primary transition-colors duration-200' />
        </div>
      </div>
    </footer>
  )
}

const LINKS = [
  {
    label: 'features',
    links: ['Link Shortening', 'Branded Links', 'Analytics']
  },
  {
    label: 'resources',
    links: ['Blog', 'Help Center', 'Developers']
  }, {
    label: 'company',
    links: ['About', 'Our Team', 'Careers', 'Contact']
  }
]

export default Footer