import React , {useEffect}from 'react';
import ChartSection from '../../components/dashboard/ChartSection';
import SiteStatesSection from '../../components/dashboard/SiteStatesSection';
import PolicyStatus from '../../components/dashboard/PolicyStatus';
import RequestState from '../../components/dashboard/RequestState';


const AdminStates = () => {
 

  return (
    <div className='flex h-screen bg-gray-100 justify-center items-center mt-[3rem]'>
      <div className='p-4 grid grid-cols-2 gap-4'>
        {/* Box 1 */}
        <div className='bg-white  shadow rounded'>
          <ChartSection />
        </div>

        {/* Box 2 */}
        <div className='bg-white  shadow rounded'>
          <SiteStatesSection />
        </div>

        {/* Box 3 */}
        <div className='bg-white  shadow rounded'>
          <PolicyStatus />
        </div>

        {/* Box 4 */}
        <div className='bg-white  shadow rounded'>
          <RequestState />
        </div>
      </div>
    </div>
  );
};

export default AdminStates;
