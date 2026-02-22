let allInterViews = []
let allRejection = [];
let totalJobs = document.getElementById('total-jobs');
let totalJobsValue = totalJobs.innerText
let availableJobs = document.getElementById('available-jobs');
let allJobs = document.getElementById('all-jobs');
let allJobsLength = allJobs.children.length;


let allInterView = document.getElementById('all-interview');
let allInterViewValue = allInterView.innerText;
let allRejections = document.getElementById('all-rejections');
let allRejectionsValues = allRejections.innerText;
 let hidden = document.getElementById('hidden-section')
let all = document.getElementById('all')
let interview = document.getElementById('interview')
let rejected = document.getElementById('rejected');


availableJobs.innerText = allJobsLength
totalJobs.innerText = allJobsLength;

all.addEventListener('click', function () {
    interview.style.backgroundColor = 'white'
    interview.style.color = 'black'
    rejected.style.backgroundColor = 'white'
    rejected.style.color = 'black'
    all.style.backgroundColor = '#3B82F6'
    all.style.color = 'white'
    hidden.style.display = 'none'
    allJobs.style.display = 'block'

})

interview.addEventListener('click', function () {
    interview.style.backgroundColor = '#3B82F6'
    interview.style.color = 'white'
    all.style.backgroundColor = 'white'
    all.style.color = 'black'
    rejected.style.backgroundColor = 'white'
    rejected.style.color = 'black'
   hidden.style.display = 'block'
   allJobs.style.display = 'none'

})

rejected.addEventListener('click', function () {
    interview.style.backgroundColor = 'white'
    interview.style.color = 'black'
    all.style.backgroundColor = 'white'
    all.style.color = 'black' 
    rejected.style.backgroundColor = '#3B82F6'
    rejected.style.color = 'white'
    hidden.style.display = 'block'
    allJobs.style.display = 'none'

})



