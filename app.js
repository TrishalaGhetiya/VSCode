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
    const newDescription = document.getElementById('description').value;
    const li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDescription));
    //itemList.appendChild(li);

    const editButton = document.createElement('button');
    editButton.className= 'btn btn-sm btn-success float-right';
    editButton.appendChild(document.createTextNode('Edit'));

    const deleteButton = document.createElement('button');
    deleteButton.className= 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));

    li.appendChild(deleteButton);
    li.appendChild(editButton);
    itemList.appendChild(li);
    newItem.value='';
    newDescription.value='';
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
        const ItemName1 = item.firstChild.textContent;
        const ItemName2 = item.lastChild.textContent;
        
        if(ItemName1.toLowerCase().indexOf(text)!=-1 || ItemName2.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else
        {
            item.style.display='none';
        }
    });
}