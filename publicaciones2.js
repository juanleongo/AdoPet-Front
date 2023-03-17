function validarFormulario(evento) {
  evento.preventDefault();

  // Validar los campos del formulario
  const imagen = document.getElementById('imagen').value.trim();
  const Sexo = document.getElementById('Sexo').value.trim();
  const Tamaño = document.getElementById('tamano').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();

  if (imagen === '') {
    alert('Por favor, seleccione una imagen');
    return false;
  }

  if (Sexo === '') {
    alert('Por favor, ingrese un Sexo');
    return false;
  }

  if (Tamaño === '') {
    alert('Por favor, seleccione un tamaño');
    return false;
  }

  if (descripcion === '') {
    alert('Por favor, ingrese una descripción');
    return false;
  }

function crearObjeto() {
  const imagen = document.getElementById("imagen").value;
  const Sexo = document.getElementById("Sexo").value;
  const Tamaño = document.getElementById("tamano").value;
  const descripcion = document.getElementById("descripcion").value;

  const objeto = {
    "Imagen": imagen,
    "Sexo": Sexo,
    "Tamaño": Tamaño,
    "Descripción": descripcion
    }
    
    
    return objeto;
  }
  const objeto = crearObjeto();
  
  formulario.submit();
  console.log(objeto);
  return objeto;

 
}

const formulario = document.getElementById('formulario');
formulario.onsubmit = validarFormulario;
