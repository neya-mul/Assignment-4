let totalJobs = document.getElementById('total-jobs');
let totalJobsValue = totalJobs.innerText 
let availableJobs = document.getElementById('available-jobs');
let allJobs = document.getElementById('all-jobs');


let allJobsLength = allJobs.children.length;
availableJobs.innerText = allJobsLength

totalJobs.innerText = allJobsLength;


let allInterView = document.getElementById('all-interview');
let allInterViewValue = allInterView.innerText;
let allRejections = document.getElementById('all-rejections');
let allRejectionsValues = allRejections.innerText;

