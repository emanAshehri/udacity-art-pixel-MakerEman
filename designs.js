

const colorChoice=document.querySelector('#colorPicker');
const submit=document.querySelector('[type=submit]');
const table=document.querySelector('table');

//canvas size
const width = document.getElementById('inputWidth');
const height = document.getElementById('inputHeight')


submit.addEventListener('click', makeGrid);


function makeGrid(e){
   // prevent the default behavior
    e.preventDefault()
    table.innerHTML="";
  //for loop will create row then cells in order to make grid
    for (let r = 0; r < height.value; r ++){
        var row = document.createElement('tr');
        for (let c = 0; c < width.value; c ++){
            var cell = document.createElement('td');
            row.appendChild(cell);
            //this funtion set the pixel(cell) Color
            cell.addEventListener('click', function(e){
            e.target.style.backgroundColor = colorChoice.value;
        })
        }
        table.appendChild(row);
    }
}
