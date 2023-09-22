




const getStroredJob=()=>{
    const storejob=localStorage.getItem('job-application');
    if(storejob)
    {
        return JSON.parse(storejob)
    }
    return [];

}

const savjob=id=>{
    const storejobapplication=getStroredJob();
    const exist=storejobapplication.find(jobId=> jobId ==id)
    if(!exist)
    {
        storejobapplication.push(id)
        localStorage.setItem('job-application',JSON.stringify(storejobapplication))
    }


}
export {savjob}