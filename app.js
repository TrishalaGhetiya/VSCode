const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);

function addItem(e)
{
    e.preventDefault();
    const newItem = document.getElementById('item').value;
    const li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    //itemList.appendChild(li);

    const deleteButton = document.createElement('button');
    deleteButton.className= 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));

    li.appendChild(deleteButton);
    itemList.appendChild(li);
}

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Sure???'))
        {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function filterItem(e)
{
    const text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item)
    {
        const itemName = item.firstChild.textContent;
        if(itemName.stoLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else
        {
            item.style.display='none';
        }
    });
}