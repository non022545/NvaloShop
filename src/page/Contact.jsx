import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-72 px-4 h-auto  bg-cover bg-center" style={{backgroundImage:"url('https://media.discordapp.net/attachments/1364538382939852800/1364538502120865875/pagehome.jpeg?ex=680a0902&is=6808b782&hm=b04f21d19162450c2f08dc045bbf42c47d27b7ccbc95dfb9ab819f7e63154fe0&=&format=webp&width=1535&height=863')"}} >
        <div className="max-w-3xl mx-auto bg-black/80 backdrop-blur-md h-96 w-auto  text-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-pink-800 mb-8 ">ติดต่อเรา</h1>

          <div className="space-y-6 text-lg ">
            <div className="flex items-center gap-4">
              <Phone className="text-green-600" />
              <span className='font-bold'>โทร:</span>
              <span>062-5232145</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-pink-600" />
              <span className="font-bold">อีเมล:</span>
              <span>
                <a href="mailto:nontthont7@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 "> nontthont7@gmail.com </a>
              </span>

            </div>
            <div className="flex items-center gap-4">
              <Facebook className="text-blue-600" />
              <span className='font-bold'>Facebook:</span>
              <span><a href="https://www.facebook.com/chanon.aomkham" target="_blank" rel="noopener noreferrer" className="text-sky-500 ">Chanon Aomkham</a></span>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
