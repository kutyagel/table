function renderTable(){
    for (const pers of array) {
        const tr_body = document.createElement("tr");
        tbody.appendChild(tr_body);
        const td_lastname = document.createElement("td");
        td_lastname.innerHTML = pers.lastname;
        tr_body.appendChild(td_lastname);
        const td_firstname1 = document.createElement("td");
        td_firstname1.innerHTML = pers.firstname1;
        tr_body.appendChild(td_firstname1);
      
        if (pers.firstname2 === undefined) {
            td_firstname1.colSpan = 2;
        } else {
            const td_firstname2 = document.createElement("td");
            td_firstname2.innerHTML = pers.firstname2;
            tr_body.appendChild(td_firstname2);
        }
        tr_body.addEventListener("click", function (e) {
            console.log("clicked");
            const a = tbody.querySelector(".selected")
            if (a != undefined) {
                a.classList.remove("selected")
            }
            e.currentTarget.classList.add("selected")
        }

        );
        
        const td_hazas = document.createElement("td")
        td_hazas.innerHTML = pers.married;
        tr_body.appendChild(td_hazas);
        const td_pet = document.createElement("td")
        td_pet.innerHTML = pers.pet;
        tr_body.appendChild(td_pet);
        
        if(pers.married === true){
        td_hazas.innerHTML="igen"
            
        }
        else{
         td_hazas.innerHTML="nem"
        }
    
    }

}
function validateFields(lastHTMLname, firstHTMLname, petHTML){
    
    const errorElements = form.querySelectorAll('.error');
    errorElements.forEach(function(errorElem)
    {
        errorElem.innerHTML = '';
    });
    
    
    let result = true
    if (lastHTMLname.value === '') {
        let result = false
        const apa = lastHTMLname.parentElement
        const error = apa.querySelector('.error')
        error.innerHTML='KÖTELEZŐ VEZETÉKNÉV MEGADÁSA'
    }
    if (firstHTMLname.value === '') {
        let result = false
        const apa = firstHTMLname.parentElement
        const error = apa.querySelector('.error')
        error.innerHTML='KÖTELEZŐ KERESZTNÉV MEGADÁSA'
    }
    if (petHTML.value === '') {
        let result = false
        const apa = petHTML.parentElement
        const error = apa.querySelector('.error')
        error.innerHTML='KÖTELEZŐ HÁZIÁLLAT MEGADÁSA'
    }
    return result
}

let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]


const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");
const th_lastname = document.createElement("th");
const th_firstname = document.createElement("th");
const th_hazas = document.createElement("th");
const th_pet = document.createElement("th");
const tbody = document.createElement("tbody");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th_lastname);
tr.appendChild(th_firstname);
tr.appendChild(th_hazas);
tr.appendChild(th_pet);
table.appendChild(tbody);

th_lastname.innerHTML = "Vezeténév";
th_firstname.innerHTML = "Keresztnév";
th_hazas.innerHTML = "Házas";
th_pet.innerHTML = "Pet"
th_firstname.colSpan = 2;


const form =document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault()
    const lastname = document.getElementById("lastname");
    const firstname1 = document.getElementById("firstname1");
    const firstname2 = document.getElementById("firstname2");
    const married = document.getElementById("married");
    const pet = document.getElementById("pet");
    const lastnamevalue=lastname.value;
    const firstname1value=firstname1.value;
    let firstname2value=firstname2.value;
    const marriedvalue=married.checked;
    const petvalue=pet.value; 

    if (firstname2value === '') {
        firstname2value=undefined;
    }
    const newPerson =
        {
            firstname1: firstname1value,
            firstname2: firstname2value,
            lastname: lastnamevalue,
            married: marriedvalue,
            pet: petvalue
        }
    if (validateFields(lastname, firstname1, pet)){
    array.push(newPerson)
    tbody.innerHTML = ""
    renderTable()
    }
    console.log(array)
}
);
renderTable()