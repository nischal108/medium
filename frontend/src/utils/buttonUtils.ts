// buttonUtils.ts

export const getButtonText = (pathname: string): string => {
    if (pathname === '/new-story') return 'Publish';
    if (pathname === '/home'|| pathname.startsWith('/blog/')) return 'Write';
    if (pathname === '/update-story') return 'Update';
    return 'Action';
  };
  
  export const getButtonStyle = (pathname: string): string => {
    if (pathname === '/new-story') return 'bg-green-500 text-white';
    if (pathname === '/home'|| pathname.startsWith('/blog/')) return 'bg-gray-100 text-black';
    if (pathname === '/update-story') return 'bg-yellow-500 text-white';
    return 'bg-gray-500 text-white';
  };
  
  export const handleButtonClick = (pathname: string, navigate: Function): void => {
    if (pathname === '/new-story') {
      console.log('Publishing the story...');
    } else if (pathname === '/home' || pathname.startsWith('/blog/')) {
      navigate('/new-story');
    } else if (pathname === '/update-story') {
      console.log('Updating the story...');
    }
  };
  