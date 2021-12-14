import React from 'react'
import './Contact.css'
import ContactImg from './images/contact.jpg';

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact Me</h1>
              <p className="hire__text white"><strong>+ 82 10 9574 1392</strong> or email <strong>48xx@naver.com</strong></p>
            </div>
            <div className="input__box">
              <input type="text" className="contact name" placeholder="이름 *" />
              <input type="text" className="contact Email" placeholder="이메일 *" />
              <input type="text" className="contact subject" placeholder="메세지 *" />
              <textarea name="message" id="message" placeholder="작성해주세요."></textarea>
                <div className="submit">
                  <a href="#"><button className="btn contact pointer" type="submit">Submit</button></a>
                </div>
            </div>
          </div>
        </div>
        <div className="col__2 contact__img">
          <img src={ContactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  )
}

export default Contact
