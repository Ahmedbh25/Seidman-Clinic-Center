// Doctors array list
const doctors = [
    {
        id : 1,
        name : "Maher Hammada",
        specialization : "oculist",
        age : 62,
        description : "Maher Hammada is Born In Tunisia, Nabeul, Hammem Ghazez ... 62 Years Old ... one of the Best oculist Doctors of the country"       
    },

    {
        id : 2,
        name : "Wissem Ben Brahim",
        specialization : "oculist",
        age : 59,
        description : "Wissem Ben Brahim is Born In Tunisia, Nabeul, Kelibia ... 59 Years Old ... one of the Best oculist Doctors of the country"    
    },

    {
        id : 3,
        name : "Ghassen Ben Hamouda",
        specialization : "dentist",
        age : 38,
        description : "Ghassen Ben Hamouda is Born In Tunisia, Nabeul, Hammem Ghazez ... 38 Years Old ... one of the Best dentist Doctors of the country"
    },

    {
        id : 4,
        name : "Marwa Ben Hamouda",
        specialization : "dentist",
        age : 35,
        description : "Marwa Ben Hamouda is Born In Tunisia, Nabeul, Hammem Ghazez ... 35 Years Old ... one of the Best dentist Doctors of the country"
    },

    {
        id : 5,
        name : "Salim Ben Hssan",
        specialization : "neurologist",
        age : 35,
        description : "Salim Ben Hssan is Born In Tunisia, Tunis, Ariana ... 29 Years Old ... one of the Best neurologist Doctors of the country"
    },

    {
        id : 6,
        name : "Olaya Ben Abid",
        specialization : "otalaryngologist",
        age : 45,
        description : "Olaya Ben Abid is Born In Tunisia, Tunis, Ben Arous ... 45 Years Old ... one of the Best otalaryngologist Doctors of the country"
    },

    {
        id : 7,
        name : "Wassim Ben Rhouma",
        specialization : "general practitioner",
        age : 58,
        description : "Olaya Ben Abid is Born In Tunisia, Tataouine, Ghomrassen ... 58 Years Old ... one of the Best general practitioner Doctors of the country"
    },

    {
        id : 8,
        name : "Raja Aee",
        specialization : "Pediatrician",
        age : 72,
        description : "Raja Aee is Born In Tunisia, Sousse, Msaken ... 72 Years Old ... one of the Best Pediatrician Doctors of the country"
    },

    {
        id : 9,
        name : "Alia Ben Ghozzi",
        specialization : "Surgeon",
        age : 70,
        description : "Alia Ben Ghozzi is Born In Tunisia, Sousse, Sidi Bouali ... 70 Years Old ... one of the Best Surgeon Doctors of the country"

    },
    
    {
        id : 10,
        name : "Iheb Belhaj Salah",
        specialization : "Surgeon",
        age : 80,
        description : "Iheb Belhaj Salah is Born In Tunisia, Nabeul, Slimane ... 80 Years Old ... one of the Best Surgeon Doctors of the country"

    },
    
    {
        id : 11,
        name : "Rami Meddeb",
        specialization : "general practitioner",
        age : 33,
        description : "Rami Meddeb is Born In Tunisia, Nabeul, Manzel Temim ... 33 Years Old ... one of the Best general practitioner Doctors of the country"
    }
]

/* This function will show list of doctors when you : 
    1- visit NAV-LINK : actions -> doctors.
    2- click button show doctors
*/
const ShowDoctors = () => {
    let all_doctors = ''
    doctors.forEach(element => {
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
    });
    
    document.getElementById('doctors_list').innerHTML = all_doctors
    
}

/* This function will delete list of doctors when you : 
    1- visit NAV-LINK : actions -> doctors.
    2- click button delete doctors
*/
const DeleteDoctors = () => {
    document.getElementById('doctors_list').innerHTML = ''
}