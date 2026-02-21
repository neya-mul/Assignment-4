let totalJobs = document.getElementById('total-jobs');
let totalJobsValue = totalJobs.innerText 
let availableJobs = document.getElementById('available-jobs');
let allJobs = document.getElementById('all-jobs');


let allJobsLength = allJobs.children.length;
availableJobs.innerText = allJobsLength

totalJobs.innerText = allJobsLength;
