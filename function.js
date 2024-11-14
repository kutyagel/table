/**
 * 
 * @param {td|th} elem 
 * @param {string} elem2 inner html
 * @param {HTMLTableRowElement} anya 
 * @returns {HTMLTableCellElement}
 */


function createTableCell(elem, elem2, anya) {
    const td = document.createElement(elem);
    td.innerHTML = elem2;
    anya.appendChild(td);
    return td;
}
/**
 * 
 * @param {*} tag
 * @param {*} id
 * @param {*} anya
 */
function createHtmlElement(tag, id, anya) {
    const elemek = document.createElement(tag)
    elem.id = id;
    anya.appendChild(elem);
}

function createHtmlElementWithParentId(tag, id, anyaid) {
    const elemek = document.getElementById(anyaid)
    if (elemek != undefined) {
        createHtmlElement(tag, id, elemek)
    }
}

function renderTableHeader(perstr) {
    const theader = document.getElementById(perstr)
    createTablecell("th", "vezetéknév", theader)
    const lajoska = createTableCell("th", "keresztnév", theader)
    lajoska.colSpan = 2
    createTableCell("th", "házas", theader)
    createTableCell("th", "állat", theader)

}
function renderTable(array){
    const tbody = document.getElementById("persbody")
    tbody.innerHTML = '';
    for (let pers of array) {
        const tr_body = document.createElement("tr");
        createTableCell('td', pers.lastname, tr_body)
        const firstHTMLname = createTableCell('td', pers.firstname1, tr_body);
    
        if (pers.firstname2 === undefined) {
            firstHTMLname.colSpan = 2;
        } else {
            createTableCell('td', pers.firstname2, tr_body);
        }
        createTableCell('td', pers.married ? "igen" : "nem", tr_body);
        createTableCell('td', pers.pet, tr_body);

        tbody.appendChild(tr_body);
        tr_body.addEventListener("click", function (e) {
            console.log("clicked");
            const a = tbody.querySelector(".selected");
            if (a != undefined) {
                a.classList.remove("selected")
            }
            e.currentTarget.classList.add("selected")
        });

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
        result = false
        const apa = lastHTMLname.parentElement
        const error = apa.querySelector('.error')
        error.innerHTML='KÖTELEZŐ VEZETÉKNÉV MEGADÁSA'
    }
    if (firstHTMLname.value === '') {
        result = false
        const elsoapa = firstHTMLname.parentElement
        const elsoerror = elsoapa.querySelector('.error')
        elsoerror.innerHTML='KÖTELEZŐ KERESZTNÉV MEGADÁSA'
    }
    if (petHTML.value === '') {
        result = false
        const petapa = petHTML.parentElement
        const peterror = petapa.querySelector('.error')
        peterror.innerHTML='KÖTELEZŐ HÁZIÁLLAT MEGADÁSA'
    }
    return result
}