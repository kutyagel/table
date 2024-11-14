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

createHtmlElement("table", "perstable", document.body);
createHtmlElementWithParentId("thead", "persthead", "perstable");
createHtmlElement("tr", "perstr", "persthead");
renderTableHeader("perstr");
createHtmlElementWithParentId("tbody", "persbody", "perstable");
renderTable(array)

const form =document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault()
    const tbody = document.getElementById("persbody");
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
    console.log(array)
    renderTable(array)
    form.reset();
    }
})
