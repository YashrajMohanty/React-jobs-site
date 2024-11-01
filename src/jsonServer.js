import jobsList from './jobs.json' assert { type: 'json'};
const jsonGet = (id) => {
    const job = jobsList.jobs.find(i => i.id === id);
    return job;
};

const jsonPost = (job) => {

    let minAvailableId = 1;
    for (let i=0; i < jobsList.jobs.length; i++) {
        if (jobsList.jobs[i].id == minAvailableId) {
            minAvailableId++;
        }
    }
    minAvailableId = minAvailableId + '';

    job = {
        id: minAvailableId,
        title: job.title,
        type: job.type,
        description: job.description,
        location: job.location,
        salary: job.salary,
        company: {
            name: job.company.name,
            description: job.company.description,
            contactEmail: job.company.contactEmail,
            contactPhone: job.company.contactPhone,
        }
    }

    jobsList.jobs.push(job);
    console.log(jobsList.jobs);
    return;
};

const jsonUpdate = (job) => {
    let index;
    for (let i=0; i < jobsList.jobs.length; i++) {
        if (jobsList.jobs[i].id == job.id) {
            index = i;
        }
    }

    jobsList.jobs[index] = {
        id: job.id,
        title: job.title,
        type: job.type,
        description: job.description,
        location: job.location,
        salary: job.salary,
        company: {
            name: job.company.name,
            description: job.company.description,
            contactEmail: job.company.contactEmail,
            contactPhone: job.company.contactPhone,
        }
    }
    return;
};

const jsonDelete = (id) => {
    for (let i=0; i < jobsList.jobs.length; i++) {
        if (jobsList.jobs[i].id == id) {
            jobsList.jobs.splice(i,1);
        }
    }
}

export {jsonGet, jsonPost, jsonDelete, jsonUpdate};