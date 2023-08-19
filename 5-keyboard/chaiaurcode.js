const insert = document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML =`<table>
  <tr>
    <th>Key</th>
    <th>Code</th>
    <th>KeyCode</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.code}/td>
    <td>${e.keyCode}/td>
  </tr>
</table>`
})

