function add_task(){
    if(document.querySelector('#newtask').value.length==0){
        alert('please input value');
    }
    else{
        document.querySelector('.tasks').innerHTML+=`
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask').value}
            </span>
            <button class='delete color'><i class="far fa-trash-alt"></i></button>
        </div>
        `
        let current_task=document.querySelectorAll('.delete');
        for(let i=0;i<current_task.length;i++){
            current_task[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        let tasks=document.querySelectorAll('.task');
        for(let j=0;j<tasks.length;j++){
            tasks[j].onclick=function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector('#newtask').value='';
    }
}

function color_change(){
    let color=document.querySelector('#change-color').value;
    console.log(color)
    if(color!='#ffffff'){
        document.body.style.background=color;
        let btn_lst=document.getElementsByClassName('color');
        for(let i=0;i<btn_lst.length;i++){
            btn_lst[i].style.background=color;
        }

    }
}