const todoForm=document.querySelector(".form-todo");
const todoinput=document.querySelector(".form-todo input[type='text']");
const ulList=document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText=todoinput.value;
    const newli=document.createElement("li");
    const newliInnerHTML=`
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
newli.innerHTML=newliInnerHTML;
ulList.append(newli);

    todoinput.value=""
})
ulList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove"))
    {
        const removeli=e.target.parentNode.parentNode;
        removeli.remove();
    }
    if(e.target.classList.contains("done"))
    {
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through"
    }
})
