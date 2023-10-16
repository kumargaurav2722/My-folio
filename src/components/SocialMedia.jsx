import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF ,FaLinkedin} from 'react-icons/fa';
import {  AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href ="https://github.com/kumargaurav2722" target ="_blank">
        <AiFillGithub />
      </a>
      </div>
      <div>
    <a href="https://www.linkedin.com/in/kumar-gaurav-624a64152/" target ="_blank">
    <FaLinkedin />
    </a>
    </div>
    <div>
      <a href="https://instagram.com/singhkaushikkumargaurav/" target ="_blank">
      <BsInstagram />
      </a>
    </div>
  
    
  </div>
);

export default SocialMedia;
