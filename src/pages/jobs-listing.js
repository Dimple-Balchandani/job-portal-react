import React, { useState, useEffect } from "react";
import JobCard from "../components/job-card";
import Layout from '../components/layout'
import _ from "underscore";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const JobsListing = () => {
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setQuery] = useState('');

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        let cachedJobs = JSON.parse(localStorage.getItem('jobs'));
        if(!_.isEmpty(cachedJobs)) {
            setJobs(cachedJobs);
        } else {
        fetch('./jobs.json'
        ,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
            setJobs(data);
            localStorage.setItem('jobs', JSON.stringify(data));
            });
        }
    };

    const searchHandler = (e) => {
        setQuery(e.target.value)
    }

    const searchJobs = () => {
        let initialData = JSON.parse(localStorage.getItem('jobs'));
        let filteredJobs = initialData.filter((obj) => { return obj.skills.includes(searchQuery)});
        setJobs(filteredJobs);
    }
    
    return (
      <Layout title="All Jobs">
        <div>
            <section>
                <div className="container">
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search jobs on skills"
                        aria-label="Search job"
                        aria-describedby="basic-addon2"
                        onChange={(e)=>searchHandler(e)}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={searchJobs}>
                        Search
                        </Button>
                    </InputGroup>
                </div>
            </section>
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
