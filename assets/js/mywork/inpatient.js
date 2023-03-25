// inpatient array list
let inpatient = [
    {
        id : 1,
        name : 'Ahmed Ben Hammouda',
        email : 'ahmed.benhamouda98@gmail.com',
        phone : '+216 55 533 347',
        your_problem : 'Heart Problems',
        age : 24,
        date : '3/3/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 2,
        name : 'Bechir Belhaj Salah',
        email : 'bicho.salah95@gmail.com',
        phone : '+216 88 556 542',
        your_problem : 'ankle Ingery',
        age : 27,
        date : '3/8/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 3,
        name : 'Oussema Belhaj Salah',
        email : 'ousss.belhaj1995@gmail.com',
        phone : '+216 88 556 542',
        your_problem : 'knee Ingery',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 4,
        name : 'Abderaahman Jenhani',
        email : 'abouda.jennahla@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'knee Ingery',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 5,
        name : 'Mhamed Ben Hassin',
        email : 'Mhamed.Hassin@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'nouse Ingery',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 6,
        name : 'Zaineb Jenhani',
        email : 'Zaineb.jennahla@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'Chest Pain',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 7,
        name : 'Nawress Ben Rhouma',
        email : 'Nawress.Nawres@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'Head Pain',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 8,
        name : 'Mariem debbibi',
        email : 'debbibi.debbibi@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'covid 19',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 9,
        name : 'Maram Sebri',
        email : 'Sebri.Maram@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'covid 19',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 10,
        name : 'Aya ben Rajeb',
        email : 'Rajeb.Aya@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'covid 19',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 11,
        name : 'Salma Riahi',
        email : 'Salma.Salma@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'Hip Pain',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus'
    },

    {
        id : 12,
        name : 'Howayda Ben Ali',
        email : 'Howayda.Benben@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'Hand Pain',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus'
    }
]

/* This function will show list of inpatients when you : 
    1- visit NAV-LINK : actions -> inpatient.
    2- click button show inpatient
*/
const ShowInpatient= () => {
     let all_inpatient = ''
     inpatient.forEach(element => {
        all_inpatient += 
        `
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
                <div class="member-img">
                    <img src="assets/img/inpatient/${element.name}.jpg" class="img-fluid" alt="">
                </div>
                <div class="member-info">
                    <h5>Name : ${element.name}</h5>
                    <span>Phone Number :  ${element.phone}</span><br>
                    <span>Your Problem : ${element.your_problem}</span><br>
                    <span>Your Case : ${element.your_case}</span><br><br>
                </div>
            </div>
        </div>
        `        
    });
    
    document.getElementById('inpatient_list').innerHTML = all_inpatient
    
}

/* This function will delete list of inpatients when you : 
    1- visit NAV-LINK : actions -> inpatient.
    2- click button delete inpatient
*/

const DeleteInpatient = () => {
    document.getElementById('inpatient_list').innerHTML = ''
}



// 1- When User Enter His Informations, Test & Show Them in Screen.

let add_inpatient= () => {

    let i = inpatient.length
    i++
    let name = document.getElementById('name').value



    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let your_problem = document.getElementById('your_problem').value
    let age = document.getElementById('age').value
    let disease = document.getElementById('disease').value


    const element = {}

    element.id = i
    element.name = name
    element.email = email
    element.phone = phone
    element.your_problem = your_problem
    element.age = age
    element.disease = disease

    // Verification of Input Elements [name, email, phone, your_problem, age, disease]  

    if(!(/^[a-zA-Z]{4,}$/.test(element.name)) ){
        document.getElementById('name_check').innerHTML = 'Name Field Must be in [a-z A-Z] & contain min 4 caracters !'
        return
    }else{
        document.getElementById('name_check').innerHTML = ''
    }


    if ( !(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(element.email)) ){
        document.getElementById('email_check').innerHTML = 'Adresse e-mail invalide !'
        return
    }else{
        document.getElementById('email_check').innerHTML = ''
    }

    if( !(/^[0-9+]?[0-9]{9,}$/.test(element.phone)) ){
        document.getElementById('phone_check').innerHTML = 'Phone Number invalide !'
        return
    }else{
        document.getElementById('phone_check').innerHTML = ''
    }

    if( !(/^[a-zA-Z]{5,}$/.test(element.your_problem)) ){
        document.getElementById('problem_check').innerHTML = 'You Must Write Longer Text !'
        return
    }else{
        document.getElementById('problem_check').innerHTML = ''
    }

    if( !(/^[1-9][0-9]?$/.test(element.age)) && !(/^1[0-2][0-9]?$/.test(element.age)) ){
        document.getElementById('age_check').innerHTML = 'Age must be less than 130 & bigger than 0 !'
        return
    }
    else{
        document.getElementById('age_check').innerHTML = ''
    }

    if( !(/^[a-zA-Z]{5,}$/.test(element.disease)) ){
        document.getElementById('disease_check').innerHTML = 'You Must Write Longer Text !'
        return
    }else{
        document.getElementById('disease_check').innerHTML = ''
    }


    // add element to the end of the inpatient table
    inpatient.push(element)
    
    // show added Informations in the <div> named Form_inpat
    document.getElementById('Form_inpat').innerHTML = `
        <h4>inpatient Number :  ${element.id}</h4>
        <h6>name : ${element.name}</h6>
        <h2>email : ${element.email}</h2>
        <h2>phone : ${element.phone}</h2>
        <h2>your_problem : ${element.your_problem}</h2>
        <h2>age : ${element.age}</h2>
        <h2>date : ${new Date().getMonth()} / ${new Date().getDay()} / ${new Date().getFullYear()} -----  ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} </h2>
        <h2>disease : ${element.disease}</h2>
    `
}
if(document.getElementById('addInfos')){
    document.getElementById('addInfos').addEventListener('click', add_inpatient)
}




