let allSection = 'all';
let selectedSection = ['bg-blue-500', 'text-white']
let notSelectedSection = ['bg-white', 'text-black']

let allJobs = document.getElementById('all-jobs');
let interviewSection = document.getElementById('interview-section')
let rejectionSection = document.getElementById('rejection-section')


let interviewHiddenSection = document.getElementById('interview-hidden')
let rejectionHiddenSection = document.getElementById('rejection-hidden')

// jobs count
let totalJobs = document.getElementById('total-jobs')
let allInterviews = document.getElementById('all-interviews')
let allRejections = document.getElementById('all-rejections')
let availableJobs = document.getElementById('available-jobs')


let allJobsLength = allJobs.children.length


// length count 
totalJobs.innerText = allJobsLength;
availableJobs.innerText = allJobsLength;





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

    if (eachSection === 'all') {
        allJobs.classList.remove('hidden')
    }
    else if (eachSection === 'interview') {
        interviewSection.classList.remove('hidden')
        allJobs.classList.add('hidden')
        rejectionSection.classList.add('hidden')
    }
    else {
        allJobs.classList.add('hidden')
        interviewSection.classList.add('hidden')
        rejectionSection.classList.remove('hidden')
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


    }
    // reject button
    else if (clickedElement.classList.contains('rejected')) {
        // console.log('rejected buttons clicked')
        rejectionSection.appendChild(job)
        notApplied.innerText = 'Rejected'
        notApplied.classList.add('bg-white', 'text-red-500', 'border', 'border-red-300')

    }
    // delete button
    else if (clickedElement.classList.contains('delete-btn')) {
        // console.log(dtlBtn)
        parent.removeChild(job)
        totalJobs.innerText = allJobsLength - 1;
        availableJobs.innerText = allJobsLength -1;


    }



})