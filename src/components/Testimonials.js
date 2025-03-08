import React, { useEffect, useState } from 'react'
import { assets , projectsData } from '../assets/image/assets';
const Testimonials = () => {
    const [currentIndex , setCurrentIndex] = useState(0);
    const [cardToShow , setCardToShow] = useState(1);

    useEffect(()=>{
        const updateCardToShow = ()=>{
            if(window.innerWidth >=1024){
                setCardToShow(projectsData.length)
            }
            else {
                setCardToShow(1)
            };
        }

            updateCardToShow();

            window.addEventListener('resize' , updateCardToShow);
            return ()=>window.removeEventListener('resize' , updateCardToShow)
        
    },[])


    const nextProject = () =>{
        setCurrentIndex((prevIndex) => (prevIndex +1)%projectsData.length)
    }
    const prevProject = () =>{
        setCurrentIndex((prevIndex) => prevIndex===0 ? projectsData.length - 1 : prevIndex-1)
    }

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Our<span className='underline ml-2 underline-offset-4 decoration-1 under text-green-700 font-semibold'>Testimonials</span></h1>
      <p className='text-center tetxt-xl font-semibold text-gray-500 mb-8 max-w-80 mx-auto'>Lets see what our valuable students think about us. Their Testimonials!</p>

     

      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Projects'>
            <img src={assets.left_arrow} alt="Previous" />
        </button>

        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Projects'>
            <img src={assets.right_arrow} alt="Previous" />
        </button>
      </div>

     

      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentIndex*100)/ cardToShow}%)`}}>
            {projectsData.map((project, index)=>(
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4' >
                    <img src={project.image} alt="Project.title" className='w-full h-auto mb-14' />
                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white w-3/4 px-2 py-1 shadow-md'>
                        <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                        <p className='text-gray-500 text-sm'> {project.location}</p>
 
                        </div>

                    </div>
                    </div>
            ))}
        </div>
      </div>

    </div>
    
  )
}

export default Testimonials
