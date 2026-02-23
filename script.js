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



let hiddenSection = document.getElementById('hidden-section')
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

    if(id == 'interview'){
        allJobs.classList.add('hidden')
        hiddenSection.classList.remove('hidden', 'p-15', 'text-center')
    }
    else if(id == 'all'){
        allJobs.classList.remove('hidden')
        hiddenSection.classList.add('hidden')
    }

}


mainContainer.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('interview'))
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

            console.log(interviewList);

        }
        pushJobs()
    }


})



function pushJobs() {
    hiddenSection.innerHTML = '';
    for (let interviews of interviewList) {
        console.log(interviews);

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
                <p class="mt-5 description">${interviews.title}.</p>
                <button
                    class="border border-green-300 text-green-500 p-2 rounded font-bold interview">${interviews.interview}</button>
                <button class="border border-red-300 text-red-500 rounded p-2 font-bold rejected">${interviews.rejected}</button>

    
    `
        hiddenSection.appendChild(div)
    }
}
