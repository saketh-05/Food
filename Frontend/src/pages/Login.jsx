import Headerls from "../components/Login-Signup/Headerls";
import Login from "../components/Login-Signup/Login";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';

export default function LoginPage({ onLogin }) {
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: 20 },
      };
      
      const pageTransition = {
        duration: 1,
      };
  return (
    <HelmetProvider>
         <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
      <Helmet>
        <title>FoodTube Login</title>
      </Helmet>
      <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <Headerls
            heading='Welcome Back Foodie!'
            paragraph='New here? Become a Foodie by'
            linkName='Sign Up'
            linkUrl='/signup'
          />
          <Login onLogin={onLogin} />
        </div>
      </div>
      </motion.div>
    </HelmetProvider>
  );
}
