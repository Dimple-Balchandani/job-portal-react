import React, { useState, useEffect } from "react";
import JobCard from "../components/job-card";
import Layout from '../components/layout'

const JobsListing = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = () => {
          fetch('./jobs.json'
          ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
          )
            .then(response => response.json())
            .then(json => {
              setJobs(json);
            });
        };
        
        fetchData();

    }, []);


    return (
      <Layout title="All Jobs">
        <div>
            <section id="featured" className="section bg-cyan">
                <div className="container">
                    <div className="row">
                        {
                            jobs.length && jobs.map(job => {
                                return <JobCard job={job} key={job.id}/>;
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
        </Layout>
    );
};

export default JobsListing;
