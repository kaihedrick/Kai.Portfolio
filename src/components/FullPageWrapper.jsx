import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const FullPageWrapper = (props) => {
  const [key, setKey] = useState(0);

  // Force remount of ReactFullpage when route changes
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [props.location]);
  
  return (
    <ReactFullpage
      key={key}
      {...props}
    />
  );
};

export default FullPageWrapper;