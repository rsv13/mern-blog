import { Footer } from 'flowbite-react';
import React from 'react';
import { BsDiscord, BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="">
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>USW</span>Survey</Link>
                </div>
                <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6">
                    
                    <div>
                    <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                            <Footer.Link href="https://www.southwales.ac.uk/" target='_blank' rel="noopener noreferrer">
                            University of South Wales
                        </Footer.Link>
                            <Footer.Link href="/about" target='_blank' rel="noopener noreferrer">
                            About Us
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow Us' />
                        <Footer.LinkGroup col>
                            <Footer.Link href="www.instagram.com" target='_blank' rel="noopener noreferrer">
                            USW instagram
                        </Footer.Link>
                            <Footer.Link href="#" target='_blank' rel="noopener noreferrer">
                            USW Research
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Stakeholders' />
                        <Footer.LinkGroup col>
                            <Footer.Link href="http://www.primecentre.wales/" target='_blank' rel="noopener noreferrer">
                            Prime Centre Wales
                        </Footer.Link>
                            <Footer.Link href="https://www.frait.wales/" target='_blank' rel="noopener noreferrer">
                            FRAIT Wales
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="https://www.southwales.ac.uk/" by="University of South Wales" year={new Date().getFullYear()} />
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href="www.facebook.com" icon={BsFacebook} />
                    <Footer.Icon href="www.instagram.com" icon={BsInstagram} />
                    <Footer.Icon href="https://x.com" icon={BsTwitter} />
                    <Footer.Icon href="https://github.com/rsv13" icon={BsGithub} />
                    <Footer.Icon href="https://discord.com/" icon={BsDiscord} />
                    <Footer.Icon href="https://dribble.com/" icon={BsDribbble} />
                </div>
            </div>
        </div>


    </Footer>
            

    
  );
}
