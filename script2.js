let allSection = 'all';
let selectedSection = ['bg-blue-500', 'text-white']
let notSelectedSection = ['bg-white', 'text-black']
let allJobs = document.getElementById('all-jobs');
let interviewSection = document.getElementById('interview-section')
let rejectionSection = document.getElementById('rejection-section')
let noJobs = document.getElementById('no-jobs')
// jobs count
let totalJobs = document.getElementById('total-jobs')
let allInterviews = document.getElementById('all-interviews')
let allRejections = document.getElementById('all-rejections')
let availableJobs = document.getElementById('available-jobs')
let allJobsLength = allJobs.children.length
function sectionChange(eachSection) {
    // console.log(button);
    let sections = ['all', 'interview', 'rejected'];

    for (let section of sections) {
        // console.log(section);
        let clickedSection = document.getElementById(section)
        if (section === eachSection) {

            clickedSection.classList.add(...selectedSection)
            clickedSection.classList.remove(...notSelectedSection)

        }
        else {
            clickedSection.classList.add(...notSelectedSection)
            clickedSection.classList.remove(...selectedSection)
        }

    }

let pages = [allJobs, interviewSection, rejectionSection];
for(let page of pages){
    page.classList.add('hidden')
}
noJobs.classList.add('hidden')
    if (eachSection === 'all') {
        allJobs.classList.remove('hidden')
        if(allJobs.children.length < 1){
            noJobs.classList.remove('hidden')

        }
    }
    else if (eachSection === 'interview') {
        interviewSection.classList.remove('hidden')
        if(interviewSection.children.length < 1){
                noJobs.classList.remove('hidden')

        }
        // allJobs.classList.add('hidden')
        // rejectionSection.classList.add('hidden')
    }
    else {
        // allJobs.classList.add('hidden')
        // interviewSection.classList.add('hidden')
        rejectionSection.classList.remove('hidden')
        if(rejectionSection.children.length < 1){
              noJobs.classList.remove('hidden')

        }
    }

}
sectionChange(allSection)

document.getElementById('all-sections').addEventListener('click', function (event) {
    let clickedElement = event.target;
    let job = clickedElement.closest('.job');
    let notApplied = job.querySelector('.not-applied')
    let parent = job.parentNode
    // interview button 
    if (clickedElement.classList.contains('interview')) {
        // console.log('interview button clicked');
        interviewSection.appendChild(job)
        notApplied.innerText = 'Interview'
        notApplied.classList.add('bg-white', 'border', 'text-green-500', 'border-green-300')
        counts()
    }
    // reject button
    if (clickedElement.classList.contains('rejected')) {
        // console.log('rejected buttons clicked')
        rejectionSection.appendChild(job)
        notApplied.innerText = 'Rejected'
        notApplied.classList.add('bg-white', 'text-red-500', 'border', 'border-red-300')
        counts()
    }
    // delete button
    if (clickedElement.classList.contains('delete-btn')) {
        // console.log(dtlBtn)
        parent.removeChild(job)
    }

})



function counts (){
// length count 

totalJobs.innerText = allJobsLength;
allInterviews.innerText = interviewSection.children.length;
allRejections.innerText = rejectionSection.children.length;

// let count ={
//     all: allJobsLength, 
//     interview: interviewSection.children.length,
//     rejected:  rejectionSection.children.length
// }

// totalJobs.innerText = count['all']
// allInterviews.innerText = count['interview']
// allRejections.innerText = count['rejected']


}
counts()