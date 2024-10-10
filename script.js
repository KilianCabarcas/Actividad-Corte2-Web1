// Escuchar el clic del botón para listar estudiantes
document.getElementById("listarUsuarios").addEventListener("click", listarEstudiantes);

// Función para listar estudiantes en la tabla
function listarEstudiantes() {
    let estudiantes = obtenerEstudiantes();  // Obtener los estudiantes desde el localStorage o cargar predeterminados
    let tabla = document.getElementById("tablaUsuarios").getElementsByTagName('tbody')[0];  // Acceder al tbody de la tabla
    tabla.innerHTML = "";  // Limpiar la tabla antes de añadir los estudiantes

    // Recorrer cada estudiante y añadirlo a la tabla
    estudiantes.forEach(estudiante => {
        let fila = tabla.insertRow();  // Insertar una nueva fila
        fila.insertCell(0).textContent = estudiante.nombre;
        fila.insertCell(1).textContent = estudiante.apellido;
        fila.insertCell(2).textContent = estudiante.cedula;
        fila.insertCell(3).textContent = estudiante.matricula;
        fila.insertCell(4).textContent = estudiante.email;
        fila.insertCell(5).textContent = estudiante.carrera;
        fila.insertCell(6).textContent = estudiante.fechaIngreso;
        fila.insertCell(7).textContent = estudiante.telefono;
    });
}

// Función para obtener los estudiantes desde localStorage o cargar los iniciales si no hay datos
function obtenerEstudiantes() {
    let estudiantes = localStorage.getItem("estudiantes");  // Obtener los estudiantes almacenados en localStorage
    if (estudiantes) {
        return JSON.parse(estudiantes);  // Si hay estudiantes, parsearlos y devolverlos como un array
    } else {
        // Si no hay estudiantes en localStorage, cargar estos 3 predeterminados
        let estudiantesIniciales = [
            { nombre: "Carlos", apellido: "Gómez", cedula: "12345678", matricula: "20200123", email: "carlos@universidad.edu", carrera: "Ingeniería", fechaIngreso: "2020-01-15", telefono: "1234567890" },
            { nombre: "Ana", apellido: "Pérez", cedula: "87654321", matricula: "20200124", email: "ana@universidad.edu", carrera: "Derecho", fechaIngreso: "2019-02-01", telefono: "0987654321" },
            { nombre: "Luis", apellido: "Martínez", cedula: "11223344", matricula: "20200125", email: "luis@universidad.edu", carrera: "Medicina", fechaIngreso: "2021-03-01", telefono: "1122334455" }
        ];
        localStorage.setItem("estudiantes", JSON.stringify(estudiantesIniciales));  // Guardar los estudiantes iniciales en localStorage
        return estudiantesIniciales;  // Devolver los estudiantes iniciales
    }
}
