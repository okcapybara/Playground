import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Tag } from 'lucide-react';
import { getProjectById } from '../data/projects';
import { Button } from '../components/ui/button';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.div 
        className="py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </motion.div>

      {/* Project Content */}
      <motion.div 
        className="pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container max-w-4xl">
          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full flex items-center gap-1"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Demo Area */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-semibold mb-2">Interactive Demo</h3>
                <p className="text-muted-foreground mb-4">
                  This is where your interactive project would be embedded or displayed.
                </p>
                <Button variant="outline" className="group">
                  Launch Demo
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed">
                This is a placeholder for detailed project information. You can describe the technical implementation, 
                challenges faced, solutions implemented, and key learnings from this project.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Technical Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Framework:</span>
                  <span className="font-medium">React + Vite</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Styling:</span>
                  <span className="font-medium">Tailwind CSS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Animation:</span>
                  <span className="font-medium">Framer Motion</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium text-green-600">Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
