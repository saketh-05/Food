import Headerls from "../components/Login-Signup/Headerls";
import Signup from "../components/Login-Signup/Signup";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';

export default function LoginPage() {
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 3, y: 0 },
        out: { opacity: 0, y: 25 },
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
        <title>FoodTube Signup</title>
      </Helmet>
      <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <Headerls
            heading='Welcome to FoodTube! Sign Up Now!'
            paragraph='Already have an account? Log in by'
            linkName='Log In'
            linkUrl='/'
          />
          <Signup />
        </div>
      </div>
      </motion.div>
    </HelmetProvider>
  );
}
