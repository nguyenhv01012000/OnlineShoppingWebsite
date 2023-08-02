import React, { useRef, useState } from 'react';
import '../../App.css';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Newsletter () {

    const inputEmailRef = useRef();
    const [emailInput, setEmailInput] = useState("");
    const [toast, setToast] = useState(false)

    const handleOnChange = (event) => {
        setEmailInput(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/email', {
            subscriber: emailInput
        })
        .then(res => {
           
        })
        .catch(err => {
            
        })
        setToast(true)
        setTimeout(()=>{
                setToast(false)
        }, 2000)
        inputEmailRef.current.value = ""
    }


    return(
        <div className="Newsletter">
            <div className={toast ? "toast toast-show" : "toast"} style={{top: '20px'}}>
                  <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                  Cảm ơn bạn đã đăng kí nhận tin mới tại SOBER shop!
             </div>
            <div className="newsletter-container flex-center">
                <div className="newsletter-title">Newsletter</div>
                <div className="newsletter-small">Get timely updates from your favorite products</div>
                <form className="newsletter-form" onSubmit={handleOnSubmit}>
                    <input 
                        className="newsletter-input" 
                        placeholder="Enter your email address" 
                        type="email"
                        onChange={handleOnChange}
                        ref={inputEmailRef}
                    ></input>
                    <button className="newsletter-btn btn">Subcribe</button>
                </form>
                <div className="newsletter-line"></div>
            </div>
        </div>
    )
}
