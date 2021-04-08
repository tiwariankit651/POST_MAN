console.log('CV SCANNER');
//Data is an array of objects which contains information about canditates
//random user .me api 


const data =[

    {
        name:'Rohan Das',
        age:18,
        city:'Kolkata',
        language:'Python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/78.jpg'
    },
    
    {
        name:'Shubham Sharma',
        age:34,
        city:'Varanasi',
        language:'Javascript',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/75.jpg'
    },
    
    {
        name:'Ankit',
        age:19,
        city:'Varanasi',
        language:'C++',
        framework:'javascript/React js',
        image:'https://randomuser.me/api/portraits/med/men/73.jpg'
    },
    
    {
        name:'Amit',
        age:15,
        city:'Bengaluru',
        language:'Python',
        framework:'Angular',
        image:'https://randomuser.me/api/portraits/med/men/72.jpg'
    },
]

//CV iterator

function cvIterator(profiles){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<profiles.length ?
            { value:profiles[nextIndex++],done:false} :
            {done:true}
        }
    };
}
const candidates =cvIterator(data);
nextCv();
//Button listner for next  button
const next =document.getElementById('next');
next.addEventListener('click',nextCv);

//const candidates =cvIterator(data);

function nextCv(){
    const currentCandidate=candidates.next().value;
    let image =document.getElementById('image');
    let profile =document.getElementById('profile');
    if(currentCandidate!=undefined)
    {

    image.innerHTML =`<img src='${currentCandidate.image}'>`;
    profile.innerHTML=`<ul class="list-group">
    
    <li class="list-group-item">Name:${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
    
  </ul>`;
    }
    else{
        alert('End of canditate application');
        window.location.reload();
    }
}
