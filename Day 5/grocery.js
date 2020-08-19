function add()
{
    let add=document.querySelector('.additems').value;
    let cloneadd=document.querySelector('.commentbox').cloneNode('true');
    cloneadd.innerHTML=add;
    let commentsDiv=document.querySelector('.commentbox');
    commentsDiv.insertBefore(cloneadd,commentsDiv.firstChild);
    document.querySelector('.additems').value=''

}