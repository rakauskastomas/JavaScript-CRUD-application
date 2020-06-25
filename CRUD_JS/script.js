var duomenys = [
    {
        numeris: 'ASD234',
        greitis: 321,
        laikas: 123,
        data: '2010-12-10'
    },
    {
        numeris: 'GDS234',
        greitis: 643,
        laikas: 543,
        data: '2010-12-10'
    },
    {
        numeris: 'ASD234',
        greitis: 765,
        laikas: 087,
        data: '2010-12-10'
    },
    {
        numeris: 'FSD234',
        greitis: 456,
        laikas: 876,
        data: '2010-12-10'
    },
];
var table = document.querySelector('#pagrindiniai_duomenys tbody');
// Get entries to the table
function createButtons() {
    // var trintiTd = document.createElement('td');
    // var trintiButton = document.createElement('button')
    // trintiButton.textContent = 'Trinti';
    // trintiButton.classList.add('trinti');
    // trintiTd.appendChild(trintiButton);
    // var redaguotiTd = document.createElement('td');
    // var redaguotiButton = document.createElement('button')
    // redaguotiButton.textContent = 'Redaguoti';
    // redaguotiButton.classList.add('redaguoti');
    // redaguotiTd.appendChild(redaguotiButton);
    // tr.appendChild(numerisTd);
    // tr.appendChild(greitisTd);
    // tr.appendChild(laikasTd);
    // tr.appendChild(dataTd);
    // tr.appendChild(trintiTd);
    // tr.appendChild(redaguotiTd);
}
for (let i = 0; i < duomenys.length; i++) {
    var tr = document.createElement('tr');
    var numerisTd = document.createElement('td');
    numerisTd.textContent = duomenys[i].numeris;
    var greitisTd = document.createElement('td');
    greitisTd.textContent = duomenys[i].greitis;
    var laikasTd = document.createElement('td');
    laikasTd.textContent = duomenys[i].laikas;
    var dataTd = document.createElement('td');
    dataTd.textContent = duomenys[i].data;
    var trintiTd = document.createElement('td');
    var trintiButton = document.createElement('button')
    trintiButton.textContent = 'Trinti';
    trintiButton.classList.add('trinti');
    trintiTd.appendChild(trintiButton);
    var redaguotiTd = document.createElement('td');
    var redaguotiButton = document.createElement('button')
    redaguotiButton.textContent = 'Redaguoti';
    redaguotiButton.classList.add('redaguoti');
    redaguotiTd.appendChild(redaguotiButton);
    tr.appendChild(numerisTd);
    tr.appendChild(greitisTd);
    tr.appendChild(laikasTd);
    tr.appendChild(dataTd);
    tr.appendChild(trintiTd);
    tr.appendChild(redaguotiTd);
    table.appendChild(tr);
}
// DELETE MODAL
// Open delete modal
var deleteIndex;
document.addEventListener('click', function (e) {
    if (e.target && e.target.className == 'trinti') {
        document.querySelector('#trinti_modal').style.display = 'block';
        document.querySelector('#modal_overlay').style.display = 'block';
        // get index of row to delete
        deleteIndex = e.target.parentElement.parentElement.rowIndex;
    }
});
// close delete modal
document.querySelector('.close_trinti_modal').addEventListener('click', function () {
    document.querySelector('#trinti_modal').style.display = 'none';
    document.querySelector('#modal_overlay').style.display = 'none';
});

// confirm delete modal
document.querySelector('.confirm_trinti').addEventListener('click', function () {
    table.deleteRow(deleteIndex - 1);
    duomenys.splice(deleteIndex - 1, 1);
    document.querySelector('#trinti_modal').style.display = 'none';
    document.querySelector('#modal_overlay').style.display = 'none';
});
// DELETE MODAL ENDS

// CREATE MODAL 
// open create modal
document.getElementById('prideti_nauja').addEventListener('click', function () {
    document.querySelector('#prideti_modal').style.display = 'block';
    document.querySelector('#modal_overlay').style.display = 'block';
});
// close create modal
document.querySelector('.close_prideti_modal').addEventListener('click', function () {
    document.querySelector('#prideti_modal').style.display = 'none';
    document.querySelector('#modal_overlay').style.display = 'none';
})
// confirm create modal
document.querySelector('.confirm_prideti').addEventListener('click', function () {
    var numeris = document.querySelector('input[name="numeris_prideti"]');
    var greitis = document.querySelector('input[name="greitis_prideti"]');
    var laikas = document.querySelector('input[name="laikas_prideti"]');
    var data = document.querySelector('input[name="data_prideti"]');
    var newObj = {
        numeris: numeris.value,
        greitis: greitis.value,
        laikas: laikas.value,
        data: data.value
    }
    duomenys.unshift(newObj);
    var tr = document.createElement('tr');
    var numerisTd = document.createElement('td');
    numerisTd.textContent = numeris.value;
    var greitisTd = document.createElement('td');
    greitisTd.textContent = greitis.value;
    var laikasTd = document.createElement('td');
    laikasTd.textContent = laikas.value;
    var dataTd = document.createElement('td');
    dataTd.textContent = data.value;
    var trintiTd = document.createElement('td');
    var trintiButton = document.createElement('button')
    trintiButton.textContent = 'Trinti';
    trintiButton.classList.add('trinti');
    trintiTd.appendChild(trintiButton);
    var redaguotiTd = document.createElement('td');
    var redaguotiButton = document.createElement('button')
    redaguotiButton.textContent = 'Redaguoti';
    redaguotiButton.classList.add('redaguoti');
    redaguotiTd.appendChild(redaguotiButton);
    tr.appendChild(numerisTd);
    tr.appendChild(greitisTd);
    tr.appendChild(laikasTd);
    tr.appendChild(dataTd);
    tr.appendChild(trintiTd);
    tr.appendChild(redaguotiTd);
    table.prepend(tr);
    numeris.value = '';
    greitis.value = '';
    laikas.value = '';
    data.value = '';
    document.querySelector('#prideti_modal').style.display = 'none';
    document.querySelector('#modal_overlay').style.display = 'none';
})

// CREATE MODAL ENDS 

// EDIT MODAL

// Open edit modal
var editIndex;
document.addEventListener('click', function (e) {
    if (e.target && e.target.className == 'redaguoti') {
        // get index of row to edit
        editIndex = e.target.parentElement.parentElement.rowIndex;
        document.querySelector('input[name="numeris_redaguoti"]').value = duomenys[editIndex - 1].numeris;
        document.querySelector('input[name="greitis_redaguoti"]').value = duomenys[editIndex - 1].greitis;
        document.querySelector('input[name="laikas_redaguoti"]').value = duomenys[editIndex - 1].laikas;
        document.querySelector('input[name="data_redaguoti"]').value = duomenys[editIndex - 1].data;
        document.querySelector('#redaguoti_modal').style.display = 'block';
        document.querySelector('#modal_overlay').style.display = 'block';
    }
});
// close edit modal
document.querySelector('.close_redaguoti_modal').addEventListener('click', function () {
    document.querySelector('#redaguoti_modal').style.display = 'none';
    document.querySelector('#modal_overlay').style.display = 'none';
});
// confirm edit modal
document.querySelector('.confirm_redaguoti').addEventListener('click', function () {
    var numeris = document.querySelector('input[name="numeris_redaguoti"]');
    var greitis = document.querySelector('input[name="greitis_redaguoti"]');
    var laikas = document.querySelector('input[name="laikas_redaguoti"]');
    var data = document.querySelector('input[name="data_redaguoti"]');
    duomenys[editIndex-1].numeris = numeris.value;
    duomenys[editIndex-1].greitis = greitis.value;
    duomenys[editIndex-1].laikas = laikas.value;
    duomenys[editIndex-1].data = data.value;
    document.querySelector('tbody tr:nth-child('+editIndex+') td:nth-child(1)').innerHTML = numeris.value;
    document.querySelector('tbody tr:nth-child('+editIndex+') td:nth-child(2)').innerHTML = greitis.value;
    document.querySelector('tbody tr:nth-child('+editIndex+') td:nth-child(3)').innerHTML = laikas.value;
    document.querySelector('tbody tr:nth-child('+editIndex+') td:nth-child(4)').innerHTML = data.value;
    document.querySelector('#redaguoti_modal').style.display = 'none';
    document.querySelector('#modal_overlay').style.display = 'none';
});
// EDIT MODAL ENDS 