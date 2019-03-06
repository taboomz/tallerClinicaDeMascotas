$(function(){
    agregar();
    agregarMascota();
    agregarM();
});

function agregar(){
   $("#add").on('click',function (ev){
       ev.preventDefault();
       var nombre= $('input[id=nombres]');
        var apellido = $('input[id=apellidos]');
        var direccion = $('input[id=direccion]');
        var telefono = $('input[id=telefono]');

        $('#tPropietario').append("<tr>"+
                                   "<td>"+nombre.val()+"</td>"+
                                   "<td>"+apellido.val()+"</td>"+
                                   "<td>"+direccion.val()+"</td>"+
                                   "<td>"+telefono.val()+"</td>"+
                                   "<td> <a href= '#mascota' >Agregar Mascota</a> </td>"+
                         "</tr>");
            nombre.val('');
            apellido.val('');
            direccion.val('');
            telefono.val('');

   }); 
}



function agregarMascota(){
    $("#Add-Mascota").on('click',function(ev){
        ev.preventDefault();
        var nombremascota=$('input[id=mascota]');
        var tipo=$('select[id=tipo]');
        var nacimiento=$('input[type=date]');
        
        $('#tMascota').append("<tr>"+
        "<td>"+nombremascota.val()+"</td>"+
        "<td>"+tipo.val()+"</td>"+
        "<td>"+nacimiento.val()+"</td>"+
        "</tr>");
        nombremascota.val('');
        tipo.val('');
        nacimiento.val('');
    });
}
