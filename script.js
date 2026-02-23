// all jobs length
let allJobs = document.getElementById('all-jobs')
let allJobsLength = allJobs.children.length;


// all jobs , rejection and interviews count
let totalJobs = document.getElementById('total-jobs')
let totalInterviwes = document.getElementById('all-interviews')
let totalRejections = document.getElementById('all-rejections')


// interview and rejection list 
let interviewList = [];
let rejectionList = [];

// 3 sections
let allSection = document.getElementById('all')
let interviewSection = document.getElementById('interview')
let rejectionSection = document.getElementById('rejected')




let mainContainer = document.querySelector('main')



function allJobsCount() {
    totalJobs.innerText = allJobsLength;
    totalInterviwes.innerText = interviewList.length;
    totalRejections.innerText = rejectionList.length;


}
allJobsCount()


function buttonColorChange(id) {

    allSection.classList.remove('bg-blue-500', 'text-white')
    interviewSection.classList.remove('bg-blue-500', 'text-white')
    rejectionSection.classList.remove('bg-blue-500', 'text-white')

    allSection.classList.add('bg-white', 'text-black')
    interviewSection.classList.add('bg-white', 'text-black')
    rejectionSection.classList.add('bg-white', 'text-black')

    let selectedSection = document.getElementById(id);

    selectedSection.classList.add('bg-blue-500', 'text-white')
    selectedSection.classList.remove('bg-white')

}


mainContainer.addEventListener('click', function (event) {
    // console.log(event.target.parentNode);
    let parentNode = event.target.parentNode
    let jobTitle = parentNode.querySelector('.job-title').innerText
    let deletBtn = parentNode.querySelector('.delete-btn').innerText
    let title = parentNode.querySelector('.title').innerText
    let status = parentNode.querySelector('.status').innerText
    let time = parentNode.querySelector('.time').innerText
    let salary = parentNode.querySelector('.salary').innerText
    let badge = parentNode.querySelector('.badge').innerText
    let description = parentNode.querySelector('.description').innerText
    let interview = parentNode.querySelector('.interview').innerText
    let rejected = parentNode.querySelector('.rejected').innerText
    

    let wholeCard = {
        jobTitle,
        deletBtn,
        title,
        status,
        time,
        salary,
        badge,
        description,
        interview,
        rejected
    }
    
    console.log(wholeCard);
    
    

})

