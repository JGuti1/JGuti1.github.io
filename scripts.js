//se adiciona in "event listener" para cuando se cargue todo el contenido
// de la pagina

document.addEventListener("DOMContentLoaded", () => {  

    //se obtiene referencia a las lista dinamica:
    const taskList = document.getElementById("taskList");

    // referencia al elemento seleccionado de la lista:
    let selectedTask = null;

    // se adiciona event listener a cada boton: 

    document.getElementById ("addTask").addEventListener("click", ()=>{
        const textoTarea = prompt("Ingrese el nombre del lenguaje:");
        if(textoTarea){

            //crea un nuevo elemento HTML de tipo "li":
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent=textoTarea;
            taskList.appendChild(nuevaTarea);
            //se le adiciona el handler de deleccion a la nueva tarea creada:
            selectedTaskHandler(nuevaTarea);
        }
    });

    document.getElementById ("deleteTask").addEventListener( "click", ()=> {
        if(selectedTask)
            {
                taskList.removeChild(selectedTask);
                selectedTask=null;
        }
        else{
            alert("no hay ningun lenguaje");
        }
    });

    document.getElementById ("editTask").addEventListener( "click", ()=>{
        if(selectedTask)
        {
            const nuevoTexto = prompt("Modificar la tarea ", selectedTask.textContent);
            if(nuevoTexto)
                {
                selectedTask.textContent=nuevoTexto;                        
            }

        }
        else {
            alert("seleccione una lenguaje para modificar");
        }
    });

    function selectedTaskHandler(task)
    {
        task.addEventListener("click",() => {
            selectedTask = task;
        });
    }

    document.getElementById ("addEduc").addEventListener("click", ()=>{
        const textocolegio = prompt("Ingrese eduación:");
        if(textocolegio){

            //crea un nuevo elemento HTML de tipo "li":
            const nuevaEduc = document.createElement("p");
            nuevaEduc.textContent=textocolegio;
            estudio.appendChild(nuevaEduc);
            //se le adiciona el handler de deleccion a la nueva tarea creada:
            selectedTaskHandler(nuevaEduc);
        }
    });

    document.getElementById ("deleteEduc").addEventListener( "click", ()=> {
        if(selectedTask)
            {
                estudio.removeChild(selectedTask);
                selectedTask=null;
        }
        else{
            alert("no hay ningun historial académico");
        }
    });

    document.getElementById ("editEduc").addEventListener( "click", ()=>{
        if(selectedTask)
        {
            const nuevoEduc = prompt("Modificar historial académico ", selectedTask.textContent);
            if(nuevoEduc)
                {
                selectedTask.textContent=nuevoEduc;                        
            }

        }
        else {
            alert("seleccione un historial para modificar");
        }
    });

    function selectedTaskHandler(task)
    {
        task.addEventListener("click",() => {
            selectedTask = task;
        });
    }

  }   );