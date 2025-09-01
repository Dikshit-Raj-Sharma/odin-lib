
const myLib=[];
function Book(title,author,pages,read){
  this.id=crypto.randomUUID(); // for unique id
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}
Book.prototype.toggleRead=function(){
  this.read=!this.read;
}
// add a book to library
function addBookToLibrary(title,author,pages,read){
  const book=new Book(title,author,pages,read);
  myLib.push(book);
  displayBooks();
}
// remove a book from lib through unique id
function removeBookById(id){
  const index=myLib.findIndex((book)=>book.id===id);
  if(index!=-1){
    myLib.splice(index,1);
  }
  displayBooks();
}
// function to displayBooks
function displayBooks(){
  const libDiv=document.getElementById("library");
  libDiv.innerHTML="";
  myLib.forEach((book)=>{
    const card=document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id=book.id;

    card.innerHTML=`
    <h3>${book.title}</h3>
    <p>Author:${book.author}</p>
    <p>Number of Pages:${book.pages}</p>
    <p>Status:${book.read ? "Read":"Not Read"}</p>
    <button class="toggleBtn">Toggle Read</button>
    <button class="removeBtn">Remove</button>
    `;

    //toggle read Button
    card.querySelector(".toggleBtn").addEventListener("click",()=>{
      book.toggleRead();
      displayBooks();
    });

    // remove button
    card.querySelector(".removeBtn").addEventListener("click",()=>{
        removeBookById(book.id);
    });
    libDiv.appendChild(card);
    
  });
}
