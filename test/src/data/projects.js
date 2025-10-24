export const projects = [
  {
    id: 'interactive-cube',
    title: 'Interactive 3D Cube',
    description: 'A mesmerizing 3D cube that responds to mouse movement with smooth animations and color transitions.',
    image: '/api/placeholder/400/300',
    path: '/project/interactive-cube',
    category: '3D Graphics',
    tags: ['Three.js', 'WebGL', 'Animation']
  },
  {
    id: 'particle-system',
    title: 'Particle System',
    description: 'Dynamic particle effects that create beautiful visual patterns and respond to user interaction.',
    image: '/api/placeholder/400/300',
    path: '/project/particle-system',
    category: 'Visual Effects',
    tags: ['Canvas', 'Particles', 'Physics']
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Interactive charts and graphs that bring data to life with smooth animations and hover effects.',
    image: '/api/placeholder/400/300',
    path: '/project/data-visualization',
    category: 'Data Science',
    tags: ['D3.js', 'Charts', 'Analytics']
  },
  {
    id: 'music-visualizer',
    title: 'Music Visualizer',
    description: 'Real-time audio visualization that creates stunning visual patterns synchronized with music.',
    image: '/api/placeholder/400/300',
    path: '/project/music-visualizer',
    category: 'Audio',
    tags: ['Web Audio API', 'Canvas', 'Real-time']
  }
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};
