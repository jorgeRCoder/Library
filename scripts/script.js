let library=[];

const btn =document.querySelector('#btn');
btn.addEventListener('click', AddBook);

function Book(title, author, pages, read,id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = title+author+pages;
    this.info = function(){
       return({title, author,pages,read}) 
    }  
}

function AddBook(){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#status').value;   
    
    if(title ==="" ||author ==="" || pages <1){
        alert('please fill all field properly');
        return;
    }
    
        

    let book = new Book(title,author,pages,read)
    library.push(book) 
    SeeBooks();     
}

function SeeBooks(){   
    const oldBooks = document.querySelector('tbody');  
    const newBooks = document.createElement('tbody');
    oldBooks.parentNode.replaceChild(newBooks,oldBooks);
    
    for (let lIndex = 0; lIndex < library.length; lIndex++) {

        let tr = document.createElement('tr'); 
        tr.dataset.index = lIndex;    
        tr.className='tr' 
        let button = document.createElement('button'); 
        button.textContent ='Remove' ;
        button.dataset.index = lIndex; 
        button.className='remove';    
        button.addEventListener('click',RemoveBook);

        let read = document.createElement('button'); 
        read.textContent =library[lIndex].read ;
        if(read.textContent === "Unread"){
            read.className = "unread"
        }
        else if(read.textContent === "Read"){
            read.className = "read"
        }
        read.dataset.index = lIndex;  
        read.addEventListener('click',Status);

        for (const key in library[lIndex]) {

            let td= document.createElement('td');

            if(typeof (library[lIndex][key]) === 'function'||
            key === 'id' || key === 'read'){   
                                          
            }
            else{
                td.textContent = library[lIndex][key];
                tr.appendChild(td);                
            }             
        }   
        let td1= document.createElement('td');
        td1.appendChild(read);
        let td2= document.createElement('td');
        td2.appendChild(button);
        tr.appendChild(td1);
        tr.appendChild(td2)
              
        newBooks.appendChild(tr);       
    }
}

function RemoveBook(e){
    console.log(e.srcElement.dataset.index)
    library.splice(e.srcElement.dataset.index,1);
    SeeBooks();
}

function Status(e){
    console.log(e);
    console.log(e.srcElement.innerText);
    let status =e.srcElement.innerText;
    let index=e.srcElement.dataset.index;

    if(status == 'Read'){
        library[index].read = e.srcElement.innerText ="Unread"; 
        e.srcElement.className = "unread"        
    }
    else if (status == 'Unread'){
        library[index].read = e.srcElement.innerText ="Read";
        e.srcElement.className = "read" 
    }     
}
/* finish:appearance
left:
*/


