import './ClientPage.scss';

import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function ClientPage () {
    return (
        <>
            <Helmet>
                <style>{`body { height: 2000px; background-image: url("https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"); 
                 background-size: cover; background-position:-50px 0px; background-repeat: no-repeat; 
                 }`}

                </style>
            </Helmet>
        <p>HERRO</p>
        </>
    )

}; // end of ClientPage