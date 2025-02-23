
import { useState, useEffect } from 'react';
import Loading from '../../Pages/Loading/Loading';
// import HeroSlider from '../../Pages/HeroSlider/HeroSlider';


const Home = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => { 
      setLoading(false);
    }, 3000)
  }, []);
  if (loading) return <Loading />;

  return (
    <div className={"flex flex-col gap-0 mt-20"}>
  
       {/* <HeroSlider /> */}

      
    </div>
  );
}

export default Home

