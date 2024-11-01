import { useState, useEffect } from 'react';
import jobsList from '../jobs.json';
import JobListing from './JobListing';
import { FaTruckLoading } from 'react-icons/fa';


const JobListings = ({ isHome = false }) => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect( () => {
		
		const fetchJobs =  () => {
			const displayedJobs = isHome ? jobsList.jobs.slice(0,3) : jobsList.jobs
			try {				
				setJobs(displayedJobs);
			} catch (error) {
				console.log('Error fetching data:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchJobs();

	}, []);

  	return (
  	  	<section className="bg-blue-50 px-4 py-10">
  	  	  	<div className="container-xl lg:container m-auto">

  	  	  	  	<h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
  	  	  			{isHome ? 'Recent jobs' : 'Browse Jobs'}
  	  	  	  	</h2>
  	  	  	  	
				{loading ? 
				(<FaTruckLoading className='content-center m-10'/>) :
				(<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{jobs.map((job) => <JobListing key={job.id} job={job}/>)}
				</div>)}
  	  	  	</div>
  	  	</section>
  	);
};
export default JobListings;