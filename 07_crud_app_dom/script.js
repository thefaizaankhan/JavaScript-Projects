document.addEventListener('DOMContentLoaded', () => {
  
  const studentForm = document.getElementById('studentForm')
  const studentTable = document.getElementById('studentTable')
  
  let editingRow = null
  
  studentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value
    const studentClass = document.getElementById('class').value
    const section = document.getElementById('section').value
    const subject = document.getElementById('subject').value
    const address = document.getElementById('address').value
  
    if(editingRow) {
      editingRow.cells[0].textContent = name
      editingRow.cells[1].textContent = studentClass
      editingRow.cells[2].textContent = section
      editingRow.cells[3].textContent = subject
      editingRow.cells[4].textContent = address
      editingRow = null
    } else {
    const row = studentTable.insertRow();
      row.innerHTML = `
        <td>${name}</td>
        <td>${studentClass}</td>
        <td>${section}</td>
        <td>${subject}</td>
        <td>${address}</td>
        <td>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </td>`;

        row.querySelector('.edit-button').addEventListener('click', () => editRow(row));
      
        row.querySelector('.delete-button').addEventListener('click', () => deleteRow(row));
    }
  
  
    studentForm.reset();
  })
  
  function editRow(row) {
    editingRow = row
    document.getElementById('name').value = row.cells[0].textContent;
    document.getElementById('class').value = row.cells[1].textContent;
    document.getElementById('section').value = row.cells[2].textContent;
    document.getElementById('subject').value = row.cells[3].textContent;
    document.getElementById('address').value = row.cells[4].textContent;    
  }
  
  function deleteRow(row){
    if(confirm("Do you really want to delete the record ?")){
      studentTable.deleteRow(row.rowIndex);
    }
  }

});  
















































// const studentForm = document.getElementById('studentForm')
// const studentTable = document.getElementById('studentTable')

// studentForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const name = document.getElementById('name').value
//   const studentClass = document.getElementById('class').value
//   const section = document.getElementById('section').value
//   const subject = document.getElementById('subject').value
//   const address = document.getElementById('address').value
//   const row = studentTable.insertRow();
//   row.innerHTML = `
//   <td>${name}</td>
//   <td>${studentClass}</td>
//   <td>${section}</td>
//   <td>${subject}</td>
//   <td>${address}</td>
//   <td>
//     <button class="edit-button">Edit</button>
//     <button class="delete-button">Delete</button>
//   </td>`

//   document.querySelector('.edit-button').addEventListener('click', () => editRow())
//   document.querySelector('.delete-button').addEventListener('click', () => deleteRow())
//   studentForm.reset();
// })
