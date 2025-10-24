import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
          <span className="text-xl font-bold">Vibe playground</span>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Button 
            variant="outline" 
            className="group"
            onClick={() => window.open('https://myportfolio.com', '_blank')}
          >
            Work portfolio
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
