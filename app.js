ddocument.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addStudent();
});

function addStudent() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let grade = document.getElementById('grade').value;

    let table = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = age;
    newRow.insertCell(2).textContent = grade;

    let actionCell = newRow.insertCell(3);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() { deleteStudent(newRow); };
    actionCell.appendChild(deleteBtn);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() { editStudent(newRow); };
    actionCell.appendChild(editBtn);

    document.getElementById('student-form').reset();
}

function deleteStudent(row) {
    let table = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    table.deleteRow(row.rowIndex - 1);
}

function editStudent(row) {
    document.getElementById('edit-form-container').classList.remove('hidden');

    document.getElementById('edit-name').value = row.cells[0].textContent;
    document.getElementById('edit-age').value = row.cells[1].textContent;
    document.getElementById('edit-grade').value = row.cells[2].textContent;

    document.getElementById('edit-student-form').onsubmit = function(e) {
        e.preventDefault();
        updateStudent(row);
    };
}

function updateStudent(row) {
    row.cells[0].textContent = document.getElementById('edit-name').value;
    row.cells[1].textContent = document.getElementById('edit-age').value;
    row.cells[2].textContent = document.getElementById('edit-grade').value;

    document.getElementById('edit-form-container').classList.add('hidden');
    document.getElementById('edit-student-form').reset();
}
