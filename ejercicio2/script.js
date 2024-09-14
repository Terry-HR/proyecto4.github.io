const Foro = {
    comentarios: [],

    agregarComentario: function(nombre,comentarioM){
        const comentario = {
            usuario: nombre,
            mensaje: comentarioM,
            fecha: new Date().toLocaleString()
        }
        this.comentarios.push(comentario);
        this.mostrarComentarios();
    },

    mostrarComentarios: function(){
        const lista = document.getElementById('lista-comentarios');
        lista.innerHTML = '';

        this.comentarios.forEach(comentario =>{
            const comentarioDiv = document.createElement('div');
            comentarioDiv.classList.add('comentario');

            const nombreUsuario = document.createElement('div');
            nombreUsuario.classList.add('username');
            nombreUsuario.textContent = comentario.usuario;

            const comm = document.createElement('p');
            comm.textContent = comentario.mensaje;

            const fecha = document.createElement('span');
            fecha.classList.add('fechaCom');
            fecha.textContent = comentario.fecha;

            comentarioDiv.appendChild(nombreUsuario);
            comentarioDiv.appendChild(comm);
            comentarioDiv.appendChild(fecha);

            lista.appendChild(comentarioDiv);
        });
    }
};

document.getElementById('form-comentario').addEventListener('submit',function(e){
    e.preventDefault();

    const usuario = document.getElementById('username').value;
    const coment = document.getElementById('comment').value;

    if(usuario && coment){
        Foro.agregarComentario(usuario,coment);
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
    }
});