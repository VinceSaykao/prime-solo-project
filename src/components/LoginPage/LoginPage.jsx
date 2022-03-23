import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

import'./LoginPage.scss'

function LoginPage() {

  return (
    <div 
    style={{backgroundImage: `url("https://media.istockphoto.com/photos/nurse-caring-about-senior-woman-picture-id1351817683?k=20&m=1351817683&s=612x612&w=0&h=V_FrdseJJ7I0IF8gIPcHDMeCppMNbPdpjxoLu2FhmVo=")`,
    backgroundSize:'cover',
    height: '844px',
    marginTop: '-29px'

    }}
    
    // style={{background: '#fff', 
    // backgroundSize: 'cover', 
    // backgroundPosition: '0px 0px',
    // marginTop: '-30px',
    // height: '844px'}}
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
