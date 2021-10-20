function runApiConsultarId(){
    
    fetch(`http://localhost:5000/users/list`, {
        method: 'GET',
        // body: JSON.stringify(datos),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {        
        var data = json.data;
        var miLista = document.getElementById("miLista");

        for(var i=0; i < data.length; i++){            
            var item = `
                <div class="item">
                <h3 class="title">${data[i].name}</h3>
                <p class="body">
                    <b>Login: </b>${data[i].login}<br/>
                    <b>Email: </b>${data[i].email}<br/>
                    <b>Teléfono: </b>${data[i].phone}<br/>
                </p>
                <p><a onclick="runApiEliminarId('${data[i].login}')">Eliminar Usuario</p>
                </div>
                `
            miLista.innerHTML = miLista.innerHTML + item;
        }
    });
};


function runApiEliminarId(login){
    
    fetch(`http://localhost:5000/users/delete/${login}`, {
        method: 'DELETE',
        // body: JSON.stringify(act),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            if(json.status == 200){
                alert(json.message);
                window.location.href = '/listado'
            }
        });
}