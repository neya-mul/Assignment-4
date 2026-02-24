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


// others
let currentStatus = 'all'
let hiddenSection = document.getElementById('hidden-section')
let mainContainer = document.querySelector('main')
let availableJobs = document.getElementById('available-jobs')
let deleteButtons = document.querySelectorAll('.delete-btn')
// console.log(deleteButtons);

// console.log(availableJobs);



function allJobsCount() {
    totalJobs.innerText = allJobsLength;
    totalInterviwes.innerText = interviewList.length;
    totalRejections.innerText = rejectionList.length;
    availableJobs.innerText = allJobsLength
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
    // ===========
    currentStatus = id


    selectedSection.classList.add('bg-blue-500', 'text-white')
    selectedSection.classList.remove('bg-white')


    // toggle sections
    if (id == 'interview') {
        allJobs.classList.add('hidden')
        hiddenSection.classList.remove('hidden', 'p-15', 'text-center')
        availableJobs.innerText = interviewList.length
        pushJobs()
    }

    // else if(id == 'hiddenSection'){
    //     hiddenSection.classList.remove('hidden')
    // }
    else if (id == 'all') {
        allJobs.classList.remove('hidden')
        hiddenSection.classList.add('hidden')
    }
    else if (id == 'rejected') {
        allJobs.classList.add('hidden')
        hiddenSection.classList.remove('hidden', 'p-15', 'text-center')
        availableJobs.innerText = rejectionList.length

        rejectedJobs()
    }
    else {
        hiddenSection.style.display = 'block'
    }

}


mainContainer.addEventListener('click', function (event) {
    // console.log(event.target.classList.contains('interview'))

    if (event.target.classList.contains('interview')) {
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

        parentNode.querySelector('.badge').innerText = 'Interview'
        parentNode.querySelector('.badge').classList.add('border', 'border-green-300', 'text-green-500', 'bg-white', 'p-2')



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

        let card = interviewList.find(element => element.jobTitle === wholeCard.jobTitle)

        if (!card) {
            interviewList.push(wholeCard);

            // console.log(interviewList);

        }

        rejectionList = rejectionList.filter(element => element.jobTitle != wholeCard.jobTitle)
        if (currentStatus == 'rejected') {
            rejectedJobs()
        }
        allJobsCount()
        // pushJobs()
    }
    else if (event.target.classList.contains('rejected')) {
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

        parentNode.querySelector('.badge').innerText = 'Rejected'
        parentNode.querySelector('.badge').classList.add('border', 'border-green-300', 'text-green-500', 'bg-white', 'p-2')



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

        let card = rejectionList.find(element => element.jobTitle == wholeCard.jobTitle)

        if (!card) {
            rejectionList.push(wholeCard);

            // console.log(interviewList);

        }
        interviewList = interviewList.filter(element => element.jobTitle != wholeCard.jobTitle)



        if (currentStatus == 'interview') {
            pushJobs()
        }

        allJobsCount()
        // rejectedJobs()
    }


})



function pushJobs() {
    hiddenSection.innerHTML = '';

    if (interviewList.length === 0) {
        hiddenSection.innerHTML = `
         <div id="no-jobs " class="p-15 text-center bg-white mt-8">
                <img src="./jobs.png" alt="" class="mx-auto">
                <h1 class="font-bold">No jobs available</h1>
                <p>Check back soon for new job opportunities</p>
            </div>
        `
    }
    for (let interviews of interviewList) {
        // console.log(interviews);

        let div = document.createElement('div');
        div.classList.add('job', 'p-4', 'border', 'border-gray-300', 'mt-7', 'bg-white', 'rounded', 'space-y-2')
        div.innerHTML = `

                 <div class="flex justify-between">
                    <h1 class="job-title text-2xl ">${interviews.jobTitle}</h1>
                    <button><i class="fa-solid fa-trash-can delete-btn"></i></button>
                </div>
                <p class="title">${interviews.title}</p>
                <div class="flex gap-7 my-4">
                    <p class="status">${interviews.status}</p>
                    <li class="time">${interviews.time}</li>
                    <li class="salary">${interviews.salary}</li>
                </div>
                <span class=" badge bg-white p-2 border border-green-300 text-green-500 rounded not-applied">Interview</span>
                <p class="mt-5 description">${interviews.description}.</p>
                <button
                    class="border border-green-300 text-green-500 p-2 rounded font-bold interview">${interviews.interview}</button>
                <button class="border border-red-300 text-red-500 rounded p-2 font-bold rejected">${interviews.rejected}</button>
                

    
    `
        hiddenSection.appendChild(div)
    }
}





function rejectedJobs() {
    hiddenSection.innerHTML = '';

    if (
        rejectionList.length === 0) {
        hiddenSection.innerHTML = `
         <div id="no-jobs " class="p-15 text-center bg-white mt-8">
                <img src="./jobs.png" alt="" class="mx-auto">
                <h1 class="font-bold">No jobs available</h1>
                <p>Check back soon for new job opportunities</p>
            </div>
        `
    }
    for (let rejections of rejectionList) {
        // console.log(interviews);

        let div = document.createElement('div');
        div.classList.add('job', 'p-4', 'border', 'border-gray-300', 'mt-7', 'bg-white', 'rounded', 'space-y-2')
        div.innerHTML = `

                 <div class="flex justify-between">
                    <h1 class="job-title text-2xl ">${rejections.jobTitle}</h1>
                    <button><i class="fa-solid fa-trash-can delete-btn"></i></button>
                </div>
                <p class="title">${rejections.title}</p>
                <div class="flex gap-7 my-4">
                    <p class="status">${rejections.status}</p>
                    <li class="time">${rejections.time}</li>
                    <li class="salary">${rejections.salary}</li>
                </div>
                <span class=" badge bg-white p-2 border border-red-300 text-red-500 rounded not-applied">Rejected</span>
                <p class="mt-5 description">${rejections.description}.</p>
                <button
                    class="border border-green-300 text-green-500 p-2 rounded font-bold interview">${rejections.interview}</button>
                <button class="border border-red-300 text-red-500 rounded p-2 font-bold rejected">${rejections.rejected}</button>
                

    
    `
        hiddenSection.appendChild(div)
    }
}

for (let dltBtn of deleteButtons) {
    dltBtn.addEventListener('click', function (event) {
        let dltParent = event.target.closest('.job');
        dltParent.remove()
    })
}

function availableJobsCount() {
    if (currentStatus == 'all') {
        availableJobs.innerText = allJobs.children.length
    }
    else if (currentStatus == 'interview') {
        availableJobs.innerText = interviewList.length;

    }
    else if (currentStatus == 'rejected') {
        availableJobs.innerText = rejectionList.length;
    }
}

availableJobsCount()