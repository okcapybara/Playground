import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={project.path} className="block">
        <div className="relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 group-hover:shadow-lg">
          {/* Image placeholder */}
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl opacity-20">🎨</div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200">
              View Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;