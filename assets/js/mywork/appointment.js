const appointment  = [
    {
        id : 1,
        inpatient : 0 ,
        doctor : 0, 
        department : '',
        message : '',
        date : '3/2/2022'

    },
]

// 1- When patient Enter His Informations, Admin be able to offer him an appointment with the doctor.

let  add_appointment= () => {
    let i = appointment.length

    let inpatient = document.getElementById('inpatient').value
    let doctor = document.getElementById('doctor').value
    let department = document.getElementById('department').value
    let message = document.getElementById('message').value
    let date = document.getElementById('date').value
    
    i++
    const element = {}
    element.id = i
    element.inpatient = inpatient
    element.doctor = doctor
    element.department = department
    element.message = message
    element.date = date


        // Verification of Input Elements [inpatient_id, doctor name, department, message, date]  

        if(!(/^[a-zA-Z ]{5,}$/.test(element.inpatient)) ){
            document.getElementById('inpatient_check').innerHTML = 'Inpatient must contain min {5} characters !'
            return
        }else{
            document.getElementById('inpatient_check').innerHTML = ''
        }
    
        if(element.date == '' ){
            document.getElementById('date_check').innerHTML = 'Date not selected, please take a date !'
            return
        }
        else{
            document.getElementById('date_check').innerHTML = ''
        }
    
        if ( !(/^[a-zA-Z]{5,}$/.test(element.doctor)) ){
            document.getElementById('doctor_check').innerHTML = 'Doctor must contain min {5} characters !'
            return
        }else{
            document.getElementById('doctor_check').innerHTML = ''
        }

        if( !(/^[a-zA-Z]{5,}$/.test(element.department)) ){
            document.getElementById('department_check').innerHTML = 'Department must contain min {5} characters !'
            return
        }else{
            document.getElementById('department_check').innerHTML = ''
        }

        if( !(/^[a-zA-Z., _-]{20,}$/.test(element.message)) ){
            document.getElementById('message_check').innerHTML = 'Message Text must contain min {20} chars !'
            return
        }else{
            document.getElementById('message_check').innerHTML = ''
        }


    // add element to the end of the appointment table
    appointment.push(element)
    console.log(element)
    // show added Informations in the <div> named Form_doctor
    document.getElementById('Form_doctor').innerHTML = `
        <h4>appointment Number :  ${element.id}</h4>
        <h6>inpatient id : ${element.inpatient}</h6>
        <h2>doctor id : ${element.doctor}</h2>
        <h2>department : ${element.department}</h2>
        <h2>message : ${element.message}</h2>
        <h2>date : ${element.date}</h2>

    `
    //<h2>date : ${new Date().getMonth()} / ${new Date().getDay()} / ${new Date().getFullYear()} -----  ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} </h2>

    

}

document.getElementById('add_appointment').addEventListener('click', add_appointment)