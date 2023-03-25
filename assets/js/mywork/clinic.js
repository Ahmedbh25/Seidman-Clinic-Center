// ********************************* Declaration *********************************

// Department array list
const department = [
	{
		id : 1,
		department_name : 'Diabetes Section',
		inpatient_number : 178,
		doctors_number : 30,
		rooms_number : 250,
		completed_rooms : 40
	},

	{
		id : 2,
		department_name : 'Sergeon Section',
		inpatient_number : 128,
		doctors_number : 20,
		rooms_number : 150,
		completed_rooms : 90
	},

	{
		id : 3,
		department_name : 'ear-nose-and-throat Section',
		inpatient_number : 478,
		doctors_number : 70,
		rooms_number : 350,
		completed_rooms : 100
	},

	{
		id : 4,
		department_name : 'Neurology Section',
		inpatient_number : 978,
		doctors_number : 90,
		rooms_number : 850,
		completed_rooms : 700
	},

	{
		id : 5,
		department_name : 'Bone Fraction Section',
		inpatient_number : 378,
		doctors_number : 80,
		rooms_number : 850,
		completed_rooms : 250
	},

	{
		id : 6,
		department_name : 'Genetic Disorder Section',
		inpatient_number : 278,
		doctors_number : 50,
		rooms_number : 290,
		completed_rooms : 290
	},

    {
		id : 7,
		department_name : 'Midwifery Section',
		inpatient_number : 678,
		doctors_number : 50,
		rooms_number : 490,
		completed_rooms : 320
	},

    {
		id : 8,
		department_name : 'Optic Nerve Section',
		inpatient_number : 678,
		doctors_number : 50,
		rooms_number : 690,
		completed_rooms : 320
	},

    {
		id : 9,
		department_name : 'Subbranch Section',
		inpatient_number : 180,
		doctors_number : 60,
		rooms_number : 980,
		completed_rooms : 40
	}
    
	
]

// Inpatient array list
const inpatient = [
    {
        id : 1,
        name : 'Ahmed Ben Hammouda',
        email : 'ahmed.benhamouda98@gmail.com',
        phone : '+216 55 533 347',
        your_problem : 'Heart Problems',
        age : 24,
        date : '3/3/2022',
        disease : 'diabetes mellitus',
		department_id : 1,
		doctor_id : 1,
		recovered : false
    },

    {
        id : 2,
        name : 'Bechir Belhaj Salah',
        email : 'bicho.salah95@gmail.com',
        phone : '+216 88 556 542',
        your_problem : 'ankle Ingery',
        age : 39,
        date : '3/8/2022',
        disease : 'diabetes mellitus',
		department_id : 2,
		doctor_id : 2,
		recovered : false
    },

    {
        id : 3,
        name : 'Oussema Belhaj Salah',
        email : 'ousss.belhaj1995@gmail.com',
        phone : '+216 88 556 542',
        your_problem : 'knee Ingery',
        age : 37,
        date : '3/2/2022',
        disease : 'diabetes mellitus',
		department_id : 6,
		doctor_id : 1,
		recovered : true
    },

    {
        id : 4,
        name : 'Abderaahman Jenhani',
        email : 'abouda.jennahla@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'knee Ingery',
        age : 26,
        date : '3/2/2022',
        disease : 'diabetes mellitus',
		department_id : 5,
		doctor_id : 1,
		recovered : false
    },

    {
        id : 5,
        name : 'Mhamed Ben Hassin',
        email : 'Mhamed.Hassin@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'nouse Ingery',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus',
		department_id : 4,
		doctor_id : 1,
		recovered : true
    },

    {
        id : 6,
        name : 'Zaineb Jenhani',
        email : 'Zaineb.jennahla@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'Chest Pain',
        age : 28,
        date : '3/2/2022',
        disease : 'diabetes mellitus',
		department_id : 6,
		doctor_id : 1,
		recovered : true
    },

    {
        id : 7,
        name : 'Nawress Ben Rhouma',
        email : 'Nawress.Nawres@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'Head Pain',
        age : 29,
        date : '3/2/2022',
        disease : 'diabetes mellitus',
		department_id : 4,
		doctor_id : 1,
		recovered : false
    },

    {
        id : 8,
        name : 'Mariem debbibi',
        email : 'debbibi.debbibi@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'covid 19',
        age : 33,
        date : '3/2/2022',
        disease : 'diabetes mellitus',
		department_id : 2,
		doctor_id : 1,
		recovered : true
    },

    {
        id : 9,
        name : 'Maram Sebri',
        email : 'Sebri.Maram@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'covid 19',
        age : 27,
        date : '3/2/2022',
        disease : 'diabetes mellitus',
		department_id : 3,
		doctor_id : 1,
		recovered : false
    },

    {
        id : 10,
        name : 'Aya ben Rajeb',
        email : 'Rajeb.Aya@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'covid 19',
        age : 36,
        date : '3/2/2022',
        disease : 'diabetes mellitus',
		department_id : 1,
		doctor_id : 1,
		recovered : true
    },

    {
        id : 11,
        name : 'Salma Riahi',
        email : 'Salma.Salma@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'Hip Pain',
        age : 41,
        date : '3/2/2022',
        disease : 'diabetes mellitus',
		department_id : 3,
		doctor_id : 1,
		recovered : false
    },

    {
        id : 12,
        name : 'Howayda Ben Ali',
        email : 'Howayda.Benben@gmail.com',
        phone : '+216 81 989 825',
        your_problem : 'Hand Pain',
        age : 37,
        date : '3/2/2022',
        disease : 'diabetes mellitus',
		department_id : 1,
		doctor_id : 1,
		recovered: false
    }
]

// appointment array list
const appointment = [
	{
		id : 1,
		inpatient_id : 2,
		doctor_id : 5,
		department_id : 3,
		date : '',
		time : ''

	},

	{
		id : 2,
		inpatient_id : 5,
		doctor_id : 1,
		department_id : 6,
		date : '',
		time : ''
	},
	{
		id : 3,
		inpatient_id : 3,
		doctor_id : 2,
		department_id : 4,
		date : '',
		time : ''

	},

	{
		id : 4,
		inpatient_id : 6,
		doctor_id : 5,
		department_id : 1,
		date : '3/5/2022',
		time : '11:25'
	},
	{
		id : 5,
		inpatient_id : 7,
		doctor_id : 7,
		department_id : 4,
		date : new Date(),
		time : ''

	},

	{
		id : 6,
		inpatient_id : 4,
		doctor_id : 3,
		department_id : 2,
		date : 0,
		time : 0
	},

	{
		id : 7,
		inpatient_id : 1,
		doctor_id : 8,
		department_id : 1,
		date : '',
		time : ''

	},

	{
		id : 8,
		inpatient_id : 8,
		doctor_id : 7,
		department_id : 3,
		date : '',
		time : ''
	},

	{
		id : 9,
		inpatient_id : 9,
		doctor_id : 9,
		department_id : 4,
		date : '',
		time : ''
	},

	{
		id : 10,
		inpatient_id : 10,
		doctor_id : 9,
		department_id : 2,
		date : '',
		time : ''

	},

]

// Doctors array list
const doctors = [
    {
        id : 1,
        name : "Maher Hammada",
        specialization : "oculist",
        age : 62,
		department_id : 1,
        description : "Maher Hammada is Born In Tunisia, Nabeul, Hammem Ghazez ... 62 Years Old ... one of the Best oculist Doctors of the country"       
    },

    {
        id : 2,
        name : "Wissem Ben Brahim",
        specialization : "oculist",
        age : 93,
		department_id : 5,
        description : "Wissem Ben Brahim is Born In Tunisia, Nabeul, Kelibia ... 59 Years Old ... one of the Best oculist Doctors of the country"    
    },

    {
        id : 3,
        name : "Ghassen Ben Hamouda",
        specialization : "dentist",
        age : 88,
		department_id : 6,
        description : "Ghassen Ben Hamouda is Born In Tunisia, Nabeul, Hammem Ghazez ... 38 Years Old ... one of the Best dentist Doctors of the country"
    },

    {
        id : 4,
        name : "Marwa Ben Hamouda",
        specialization : "dentist",
        age : 35,
		department_id : 2,
        description : "Marwa Ben Hamouda is Born In Tunisia, Nabeul, Hammem Ghazez ... 35 Years Old ... one of the Best dentist Doctors of the country"
    },

    {
        id : 5,
        name : "Salim Ben Hssan",
        specialization : "neurologist",
        age : 85,
		department_id : 3,
        description : "Salim Ben Hssan is Born In Tunisia, Tunis, Ariana ... 29 Years Old ... one of the Best neurologist Doctors of the country"
    },

    {
        id : 6,
        name : "Olaya Ben Abid",
        specialization : "otalaryngologist",
        age : 75,
		department_id : 3,
        description : "Olaya Ben Abid is Born In Tunisia, Tunis, Ben Arous ... 45 Years Old ... one of the Best otalaryngologist Doctors of the country"
    },

    {
        id : 7,
        name : "Wassim Ben Rhouma",
        specialization : "general practitioner",
        age : 98,
		department_id : 4,
        description : "Olaya Ben Abid is Born In Tunisia, Tataouine, Ghomrassen ... 58 Years Old ... one of the Best general practitioner Doctors of the country"
    },

    {
        id : 8,
        name : "Raja Aee",
        specialization : "Pediatrician",
        age : 72,
		department_id : 4,
        description : "Raja Aee is Born In Tunisia, Sousse, Msaken ... 72 Years Old ... one of the Best Pediatrician Doctors of the country"
    },

    {
        id : 9,
        name : "Alia Ben Ghozzi",
        specialization : "Surgeon",
        age : 70,
		department_id : 5,
        description : "Alia Ben Ghozzi is Born In Tunisia, Sousse, Sidi Bouali ... 70 Years Old ... one of the Best Surgeon Doctors of the country"

    },
    
    {
        id : 10,
        name : "Iheb Belhaj Salah",
        specialization : "Surgeon",
        age : 52,
		department_id : 6,
        description : "Iheb Belhaj Salah is Born In Tunisia, Nabeul, Slimane ... 80 Years Old ... one of the Best Surgeon Doctors of the country"

    },

    {
        id : 11,
        name : "Rami Meddeb",
        specialization : "general practitioner",
        age : 33,
		department_id : 3,
        description : "Rami Meddeb is Born In Tunisia, Nabeul, Manzel Temim ... 33 Years Old ... one of the Best general practitioner Doctors of the country"
    }
]




// ********************************* Show Doctors List *********************************

/* The code in doctor.js file */

// ********************************* Show Inpatients List *********************************

/* The code in inpatient.js file */











// ********************************* Show List *********************************

// after the list is SHOW UP you click <Go Back> button and return to Sort_list.html Page  
const return_back = () => {
    document.getElementById('show_them').innerHTML = `
        <p>1 - <a href="JavaScript:void(0)" onClick= "ShowForm1()" >List of doctors in one department</a></p>
        <div id='doctor'></div>
        <p>2 - <a href="JavaScript:void(0)" onClick= "ShowForm2()" >List of Inpatient in one department</a></p>
        <div id='inpatient'></div>
        <p>3 - <a href="JavaScript:void(0)" onClick= "ShowForm3()" >List of Inpatients who make appointment with doctor in one departments X</a></p>
        <div id='inpatientDocDep'></div>
    `
}

// 1 - Show list of doctors in department.
const ShowDoctorsList = () => {
    let departmentObj = document.getElementById('depart').value
    let verify = false
    department.forEach(element =>{
        if(departmentObj === element.department_name){
            identity = element.id
            verify = true
        }
    })

    if(!verify){
        document.getElementById('error').innerHTML = `
            The Department name don't exist, Try Again !
        `
        return
    }

    //Diabetes Section Genetic Disorder Section
    document.getElementById('show_them').innerHTML = ``
    doctors.forEach(element => {
        if(element.department_id == identity){
            document.getElementById('show_them').innerHTML += `
            
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/doctors/${element.name}.jpg" class="img-fluid" alt="" height='200' width= '200'>
                        </div>
                        <div class="member-info">
                            <h5>Name : ${element.name}</h5>
                            <span>specialization :  ${element.specialization}</span><br>
                            <span>age : ${element.age}</span><br><br>
                        </div>
                    </div>
                </div>

            ` 
        }
    });
    document.getElementById('show_them').innerHTML += `
        <br><a href="JavaScript:void(0)" onClick= "return_back()" >Go Back</a>

    `
}
// Show Form input when you click link
const ShowForm1 = () => {
    // if Form input is not show up yet, when you click link the Form show up
    if(document.getElementById('doctor').innerHTML === ''){
        document.getElementById('doctor').innerHTML = `
        <div class="col-md-5 form-group">
            <br><input  type="text" class="form-control" id="depart" placeholder="Department name">
            <p id='error'></p>
        </div><br>
        <button type="submit" id='ShowDoctors'>Show List</button><br><br>
        `
        document.getElementById('ShowDoctors').addEventListener('click', ShowDoctorsList)
    }else{
        // if Form input is shown, when you click link again it disappear
        document.getElementById('doctor').innerHTML =''
    }
}




// 2 - Show list of Inpatients in department.
const ShowInpatientsList = () => {
    let departmentObj = document.getElementById('depart').value
    let verify = false
    department.forEach(element =>{
        if(departmentObj === element.department_name){
            identity = element.id
            verify = true
        }
    })

    if(!verify){
        document.getElementById('error').innerHTML = `
            The Department name don't exist, Try Again !
        `
        return
    }

    //Diabetes Section Genetic Disorder Section
    document.getElementById('show_them').innerHTML = ``
    inpatient.forEach(element => {
        if(element.department_id == identity){
            document.getElementById('show_them').innerHTML += `
            
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/inpatient/${element.name}.jpg" class="img-fluid" alt="" height='200' width= '200'>
                        </div>
                        <div class="member-info">
                            <h5>Name : ${element.name}</h5>
                            <span>Phone :  ${element.phone}</span><br>
                            <span>age : ${element.age}</span><br>
                            <span>Disease : ${element.disease}</span><br><br>
                        </div>
                    </div>
                </div>

            ` 
        }
    });
    document.getElementById('show_them').innerHTML += `
        <br><a href="JavaScript:void(0)" onClick= "return_back()" >Go Back</a>

    `
}
// Show Form input when you click link
const ShowForm2 = () => {
    // if Form input is not show up yet, when you click link the Form show up
    if(document.getElementById('inpatient').innerHTML === ''){
        document.getElementById('inpatient').innerHTML = `
        <div class="col-md-5 form-group">
            <br><input  type="text" class="form-control" id="depart" placeholder="Department name">
            <p id='error'></p>
        </div><br>
        <button type="submit" id='ShowInpatients'>Show List</button><br><br>
        `
        document.getElementById('ShowInpatients').addEventListener('click', ShowInpatientsList)
    }else{
        // if Form input is shown, when you click link again it disappear
        document.getElementById('inpatient').innerHTML =''
    }
}




// 3- Show List of Inpatients who make appointment with doctor X in one department Y.
const ShowInpDocDepList = () => {
    let departmentObj = document.getElementById('depart').value
    let verify = false
    department.forEach(element =>{
        if(departmentObj === element.department_name){
            identity_dep = element.id
            verify = true
        }
    })

    if(!verify){
        document.getElementById('error1').innerHTML = `
            The Department name don't exist, Try Again !
        `
        return
    }else{
        document.getElementById('error1').innerHTML = ''
    }

    let doctorObj = document.getElementById('doct').value
    verify = false
    doctors.forEach(element =>{
        if(doctorObj === element.name){
            identity_doc = element.id
            verify = true
        }
    })
    if(!verify){
        document.getElementById('error2').innerHTML = `
            The Doctor name don't exist, Try Again !
        `
        return
    }else{
        document.getElementById('error2').innerHTML = ''
    }

    //Diabetes Section Genetic Disorder Section
    document.getElementById('show_them').innerHTML = ``
    inpatient.forEach(element => {
        if(element.department_id == identity_dep && element.doctor_id == identity_doc){

            document.getElementById('show_them').innerHTML += `
            
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/inpatient/${element.name}.jpg" class="img-fluid" alt="" height='200' width= '200'>
                        </div>
                        <div class="member-info">
                            <h5>Name : ${element.name}</h5>
                            <span>Phone :  ${element.phone}</span><br>
                            <span>age : ${element.age}</span><br>
                            <span>Disease : ${element.disease}</span><br><br>
                        </div>
                    </div>
                </div>
            ` 
        }
    });
    document.getElementById('show_them').innerHTML += `
        <br><a href="JavaScript:void(0)" onClick= "return_back()" >Go Back</a>

    `
}

// Show Form input when you click link
const ShowForm3 = () => {
    // if Form input is not show up yet, when you click link the Form show up
    if(document.getElementById('inpatientDocDep').innerHTML === ''){
        document.getElementById('inpatientDocDep').innerHTML = `
            <div class="row">
                <div class="col-md-6 form-group">
                    <input  type="text" class="form-control" id="depart" placeholder="Department name">
                    <p id='error1'></p>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="text" class="form-control" id="doct" placeholder="Doctor Name">
                    <p id='error2'></p>
                </div>
            </div>
            <button type="submit" id='ShowInpdd'>Show List</button><br><br>
        `
        document.getElementById('ShowInpdd').addEventListener('click', ShowInpDocDepList)
    }else{
        // if Form input is shown, when you click link again it disappear
        document.getElementById('inpatientDocDep').innerHTML =''
    }
}










// ********************************* Verification & Security *********************************

// after the list is SHOW UP you click <Go Back> button and return to Sort_list.html Page  
const return_backs = () => {
    document.getElementById('show_them').innerHTML = `
        <p>1 - <a href="JavaScript:void(0)" onClick= "VerifyBigger()" >Verify There Is No Doctor Bigger Than 79 Years Old.</a></p>
        <p>2 - <a href="JavaScript:void(0)" onClick= "VerifyCapacity()" >Verify capacity of department rooms.</a></p>
        <p>3 - <a href="JavaScript:void(0)" onClick= "ShowIllness()" >Verify if any Inpatient recovered from illness.</a></p>
        <p>4 - <a href="JavaScript:void(0)" onClick= "ShowEndup()" >Verify if There is appointment Dates end up.</a></p>
    `
}


//1- if doctor age bigger than 79, Show Message Says That he must be deleted from from the list of doctors. 
const VerifyBigger = () => {
    let count = 0
    let doctors_list = ''
    doctors.forEach(element => {
        if(element.age >= 80){
            count++
            doctors_list+= `
            
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/doctors/${element.name}.jpg" class="img-fluid" alt="" height='200' width= '200'>
                        </div>
                        <div class="member-info">
                            <h5>Name : ${element.name}</h5>
                            <span>specialization :  ${element.specialization}</span><br>
                            <span>age : ${element.age}</span><br><br>
                        </div>
                    </div>
                </div>

            `
        }
    })
    if(count == 0){
        document.getElementById('show_them').innerHTML = `
        <p>We Don't Find any Doctor Bigger Than 79 Years ☺</p>
        <br><a href="JavaScript:void(0)" onClick= "return_backs()" >Go Back</a>
    `
    }else{
    document.getElementById('show_them').innerHTML = `<p>- We Find ${count} Doctors Bigger Than 79 :</p>`
    document.getElementById('show_them').innerHTML += doctors_list
    document.getElementById('show_them').innerHTML += `
        <br><p>-This Doctors are must be deleted from The Database !</p>
        <br><a href="JavaScript:void(0)" onClick= "return_backs()" >Go Back</a>`
    }
}


//2- Verify capacity of departments roooms : if completed Rooms bigger than total number of rooms Show attention Message.
const VerifyCapacity = () => {
    document.getElementById('show_them').innerHTML = ''
    department.forEach(element =>{
        document.getElementById('show_them').innerHTML += `
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="400">
                    <div class="member-img">
                        <img src="assets/img/department/${element.department_name}.jpg" class="img-fluid" alt="" height='200' width= '200'>
                    </div>
                    <div class="member-info">
                        <h5>Name : ${element.department_name}</h5>
                        <span>Inpatient Number :  ${element.inpatient_number}</span><br>
                        <span>Doctors Number : ${element.doctors_number}</span><br>
                        <span>Rooms Number : ${element.rooms_number}</span><br><br>
                    </div>
                </div>
            </div>
        `
        if(element.rooms_number > element.inpatient_number){
            const rest = element.rooms_number - element.inpatient_number
            document.getElementById('show_them').innerHTML += `<p> ==> The Empty Rooms Number is : ${rest}</p><br><br>`
            

        }else{
            const rest = element.inpatient_number - element.rooms_number
            document.getElementById('show_them').innerHTML += `<p> ==> There is ${rest} Inpatients Without Rooms, You must Send Them to the Subbranch Section</p><br><br>`
        }
    })
    document.getElementById('show_them').innerHTML += '<a href="JavaScript:void(0)" onClick= "return_backs()" >Go Back</a>'
}



//3- if Inpatient recovered show an attention Message.

const ShowIllness = () =>{
    document.getElementById('show_them').innerHTML = ''
    inpatient.forEach(element =>{
        if(element.recovered === true){
            document.getElementById('show_them').innerHTML += `
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/inpatient/${element.name}.jpg" class="img-fluid" alt="" height='200' width= '200'>
                        </div>
                        <div class="member-info">
                            <h5>Name : ${element.name}</h5>
                            <span>Phone :  ${element.phone}</span><br>
                            <span>age : ${element.age}</span><br>
                            <span>Disease : ${element.disease}</span><br><br>
                        </div>
                    </div>
                </div>
            `
        }
    })
    document.getElementById('show_them').innerHTML += '<a href="JavaScript:void(0)" onClick= "return_backs()" >Go Back</a>'
}

//4- Verify if There is appointment Dates end up.
const ShowEndup = () => {
    var myBD = [
        new Date("December 21, 2015"),
        new Date("March 11, 2019"),
        new Date("April 11, 2015"),
        new Date("July 21, 2015"),
        new Date("June 21, 2018"),
        new Date("November 18, 2021"),
        new Date("December 11, 2020"),
        new Date("December 21, 2015"),
    ]

    var newmyDB = []
    
    let j = 0
    let i = 0
    let index = 0
    let aux = []
    max = myBD[j]
    leng = myBD.length

    while(j < leng){
        i = j
        while(i < leng){
            if(max < myBD[i]){
                max = myBD[i]
                index = i
                
            }
            i++
            
        }
        aux = max
        myBD[j] = aux
        myBD[index] = aux
        j++
    }
    myBD.forEach(element =>{
        console.log(element)
    })

}
  










// ********************************* Show departments List *********************************

/*
 1- create page Show List of departments : 
 *- when you click The Button {show inpatient} it shows all the inpatients in this department.
 *- when you click The Button {show doctors} it shows all the doctors in this department.
 *- When you click {come back} button it return to list of departments.
*/

// after the list is SHOW UP you click <Go Back> button and return to department.html Page
const return_backss = () => {
    document.getElementById('change').innerHTML = `
        <div class="section-title">
            <h2>Departments</h2>
            <p>When You click {Show Departments} Button Department Will Show In the Screen</p>
            <p>When You click {Delete Departments} Button Department Will disappear.</p><br><br>
            <a href="JavaScript:void(0)" onClick= "ShowDepartment()"  class="get-started-btn1 scrollto">Show Department</a>
            <a href="JavaScript:void(0)" onClick= "DeleteDepartment()"  class="get-started-btn scrollto">Delete Department</a>
        </div><br>
        <div class="row" id = 'department_list'>
            <!-- When You click {Show Inpatient} Button Inpatient Will Show In the Screen -->
            <!-- But When You click {Delete Inpatient} Button Inpatient Will disappear -->
            <!-- Look To Inpatient.js File To find Script code  -->
        </div>
    `
}


// show single departments
const SingleDepartment = (identity) =>{
    
    document.getElementById('change').innerHTML = `
    <div class="section-title">
            <h2>Single Department</h2>
            <p>When You click {Show Doctors} Button Doctors Will Show In the Screen</p>
            <p>When You click {Show Inpatients} Button Inpatients Will Show In the Screen.</p>
            <p>When You click {Delete Doctors} Button Doctor Will disappear.</p>
            <p>When You click {Delete Inpatients} Button Inpatient Will disappear.</p><br><br>
            <a href="JavaScript:void(0)" onClick= "ShowFiltedDoctors(${identity})"  class="get-started-btn1 scrollto">Show Doctors</a>
            <a href="JavaScript:void(0)" onClick= "ShowFiltedDInpatients(${identity})"  class="get-started-btn1 scrollto">Show Inpatients</a><br><br>
            <a href="JavaScript:void(0)" onClick= "DeleteDoctors()"  class="get-started-btn scrollto">Delete Doctors</a>
            <a href="JavaScript:void(0)" onClick= "DeleteInpatients()"  class="get-started-btn scrollto">Delete Inpatients</a>
        </div><br>

        <div class="row" id ='doctors_list'>

        </div>
    </div>
    `
    let element = department.filter(elem => elem.id == identity);
    element = element[0]

    document.getElementById('doctors_list').innerHTML = `
        <br><div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
                <div class="member-img">
                    <img src="assets/img/department/${element.department_name}.jpg" class="img-fluid" alt="" height='200' width= '200'>
                </div><br>
                <div class="member-info">
                    <h5>Name : <a href="JavaScript:void(0)" onClick= "SingleDepartment(${element.id})">${element.department_name}</h5></a>
                    <span>Inpatient Number :  ${element.inpatient_number}</span><br>
                    <span>Doctors Number : ${element.doctors_number}</span><br>
                    <span>Rooms Number : ${element.rooms_number}</span><br><br>
                </div>
            </div>
        </div>
    `
    document.getElementById('change').innerHTML += `
        <br><a href="JavaScript:void(0)" onClick= "return_backss()" >Go Back</a>
    `
}

/* This function will show list of departments when you : 
    - click button show doctors
*/
const ShowDepartment = () => {
    let all_doctors = ''
    department.forEach(element => {
        all_doctors += 
        `
        <br><div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
                <div class="member-img">
                    <img src="assets/img/department/${element.department_name}.jpg" class="img-fluid" alt="" height='200' width= '200'>
                </div><br>
                <div class="member-info">
                    <h5>Name : <a href="JavaScript:void(0)" onClick= "SingleDepartment(${element.id})">${element.department_name}</h5></a>
                    <span>Inpatient Number :  ${element.inpatient_number}</span><br>
                    <span>Doctors Number : ${element.doctors_number}</span><br>
                    <span>Rooms Number : ${element.rooms_number}</span><br><br>
                </div>
            </div>
        </div>
        `        
    });
    
    document.getElementById('department_list').innerHTML = all_doctors
}

/* This function will delete list of doctors when you : 
    - click button delete doctors
*/
const DeleteDepartment = () => {
    document.getElementById('department_list').innerHTML = ''
}










//********************************* Show Filtred Doctors List *********************************

/* This function will delete list of filtred doctors when you : 
    - Show doctors.
*/
const ShowFiltedDoctors = (identity) => {
    let all_doctors = ''

    doctors.forEach(element => {
        if(element.department_id == identity){
            all_doctors += 
            `
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="400">
                    <div class="member-img">
                        <img src="assets/img/doctors/${element.name}.jpg" class="img-fluid" alt="" height='200' width= '200'>
                    </div>
                    <div class="member-info">
                        <h5>Name : ${element.name}</h5>
                        <span>specialization :  ${element.specialization}</span><br>
                        <span>age : ${element.age}</span><br><br>
                    </div>
                </div>
            </div>
            ` 
        }       
    });
    
    document.getElementById('doctors_list').innerHTML = all_doctors
    
}

/* This function will delete list of filtred doctors when you : 
    - click button delete doctors
*/
const DeleteDoctors = () => {
    document.getElementById('doctors_list').innerHTML = ''
}










// ********************************* Show Filtred Inpatients List *********************************

/* This function will show list of filtred inpatients when you : 
    - click button show inpatient
*/

const ShowFiltedDInpatients= (identity) => {
    let all_inpatient = ''
    inpatient.forEach(element => {
        if(element.department_id == identity){
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
        }    
   });

   
   document.getElementById('doctors_list').innerHTML = all_inpatient
   
}

/* This function will delete list of filtred inpatients when you : 
   - click button delete inpatient
*/

const DeleteInpatients = () => {
   document.getElementById('doctors_list').innerHTML = ''
}