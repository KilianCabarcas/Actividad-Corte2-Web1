// Escuchar el evento de envío del formulario para registrar nuevos usuarios
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores de los campos
            const name = document.getElementById('name').value;
            const surname = document.getElementById('surname').value;
            const id = document.getElementById('id').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const birthdate = document.getElementById('birthdate').value;
            const gender = document.getElementById('gender').value;
          
            // Validar que la cédula solo contenga números
            if (isNaN(id)) {
              alert("La cédula debe contener solo números.");
              return;
            }
          
            // Validar que los campos estén completos
            if (!name || !surname || !id || !email || !phone || !address || !birthdate || !gender) {
              alert("Por favor, complete todos los campos.");
              return;
            }
          
            // Cargar usuarios desde el JSON (localStorage)
            let users = JSON.parse(localStorage.getItem('users')) || [];
          
            // Verificar si la cédula ya existe
            const userExists = users.some(user => user.id === id);
            if (userExists) {
              alert("El usuario ya existe.");
              return;
            }
          
            // Agregar nuevo usuario al array
            users.push({ name, surname, id, email, phone, address, birthdate, gender });
          
            // Guardar en localStorage (simulando JSON)
            localStorage.setItem('users', JSON.stringify(users));
          
            alert("Usuario registrado exitosamente.");
        });
    }

    // Función para cargar los usuarios estáticos en la tabla
    const listStaticUsersButton = document.getElementById('listStaticUsers');
    if (listStaticUsersButton) {
        listStaticUsersButton.addEventListener('click', function() {
            const staticUsers = [
                { name: 'Juan', surname: 'Pérez', id: '123456', email: 'juan@mail.com', phone: '123456789', address: 'Calle 1', birthdate: '1990-01-01', gender: 'Masculino' },
                { name: 'Ana', surname: 'Gómez', id: '654321', email: 'ana@mail.com', phone: '987654321', address: 'Calle 2', birthdate: '1992-05-10', gender: 'Femenino' },
                { name: 'Carlos', surname: 'López', id: '789456', email: 'carlos@mail.com', phone: '654987321', address: 'Calle 3', birthdate: '1988-03-15', gender: 'Masculino' }
            ];

            const tableBody = document.querySelector('#userTable tbody');
            tableBody.innerHTML = ''; // Limpiar la tabla antes de listar usuarios estáticos

            staticUsers.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.id}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.address}</td>
                    <td>${user.birthdate}</td>
                    <td>${user.gender}</td>
                `;
                tableBody.appendChild(row);
            });
        });
    }

    // Función para cargar todos los usuarios (estáticos + nuevos)
    const listUsersButton = document.getElementById('listUsers');
    if (listUsersButton) {
        listUsersButton.addEventListener('click', function() {
            const users = JSON.parse(localStorage.getItem('users')) || [];

            const staticUsers = [
                { name: 'Juan', surname: 'Pérez', id: '123456', email: 'juan@mail.com', phone: '123456789', address: 'Calle 1', birthdate: '1990-01-01', gender: 'Masculino' },
                { name: 'Ana', surname: 'Gómez', id: '654321', email: 'ana@mail.com', phone: '987654321', address: 'Calle 2', birthdate: '1992-05-10', gender: 'Femenino' },
                { name: 'Carlos', surname: 'López', id: '789456', email: 'carlos@mail.com', phone: '654987321', address: 'Calle 3', birthdate: '1988-03-15', gender: 'Masculino' }
            ];

            // Combinar usuarios estáticos con los dinámicos
            const allUsers = [...staticUsers, ...users];

            const tableBody = document.querySelector('#userTable tbody');
            tableBody.innerHTML = ''; // Limpiar la tabla antes de listar todos los usuarios

            allUsers.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.id}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.address}</td>
                    <td>${user.birthdate}</td>
                    <td>${user.gender}</td>
                `;
                tableBody.appendChild(row);
            });
        });
    }
});