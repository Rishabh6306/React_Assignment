import React from 'react'
import './SignUp.css'

function SignUp() {
    return (
        <div className='signup-container'>
            <div className="signup">
                <img src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_1280.png" alt="logo" />
              <div className="input-boxes">
                <input type="text" placeholder='Mobile Number or Email Address' />
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='Phone Number,username or email' />
                <input type="text" placeholder='Paasword' />
                <button>Sign Up</button>

               <div className='info'>Have an account <span><a href="">Log In</a></span></div>
              </div>
            </div>
        </div>
    )
}

export default SignUp;