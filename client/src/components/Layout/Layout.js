import React from 'react'
import Header from '../Header';
import Footer from '../Footer'
import {Helmet} from "react-helmet";
import toast, { Toaster } from 'react-hot-toast';
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Layout = ({children,title,dsecription,keywords,author}) => {
  return (
    <div>    
      
       <Helmet>
    <meta charSet="utf-8" />

  <meta name="description" content={dsecription} />
  <meta name="keywords" content={keywords}/>
  <meta name="author" content={author} />
<title>{title}</title>


</Helmet>
      <Header/>
      <main style={{minHeight:'70vh'}}>
      <Toaster />
      {children}
      </main>
      <Footer/>
    </div>
  )
}
// Layout.defaultProps = {
//   title: "Ecommerce app - shop now",
//   description: "mern stack project",
//   keywords: "mern,react,node,mongodb",
//   author: "Techinfoyt",
// };
export default Layout