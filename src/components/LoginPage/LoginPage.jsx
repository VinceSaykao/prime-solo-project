import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet';

function LoginPage() {
  const history = useHistory();

  return (
    <div 
    style={{backgroundImage: `url("https://media.istockphoto.com/photos/portrait-of-senior-man-sitting-in-chair-picture-id1313927273?b=1&k=20&m=1313927273&s=170667a&w=0&h=YUBdN5oytR68Uv_5ckLNU6hMoPHwfhUfjjdmiYVpPII=")`}}
    
    >
      <LoginForm />
      {/* <Helmet>
                <style>{`body,html {background-image: url("https://media.istockphoto.com/photos/portrait-of-senior-man-sitting-in-chair-picture-id1313927273?b=1&k=20&m=1313927273&s=170667a&w=0&h=YUBdN5oytR68Uv_5ckLNU6hMoPHwfhUfjjdmiYVpPII="); 
                background-size: cover; background-position: -270px 0px;
                }`}

                </style>
            </Helmet> */}

      {/* <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center> */}
    </div>
  );
}

export default LoginPage;
