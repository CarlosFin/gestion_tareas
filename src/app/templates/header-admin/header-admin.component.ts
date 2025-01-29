import { Component } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
})
export class HeaderAdminComponent {
  usuarios = [
    {
      id: 1,
      nombre: 'Juan',
      departamento: 'Dirección General',
      correo: 'juan@gmail.com',
      foto: '../../assets/img/user.png',
    },
    {
      id: 2,
      nombre: 'Clara',
      departamento: 'Administración',
      correo: 'clara@gmail.com',
      foto: '../../assets/img/user.png',
    },
    {
      id: 3,
      nombre: 'Marcelina',
      departamento: 'Finanzas',
      correo: 'marcelina@gmail.com',
      foto: '../../assets/img/user.png',
    },
    {
      id: 4,
      nombre: 'Antonio',
      departamento: 'Recursos Humanos',
      correo: 'antonio@gmail.com',
      foto: '../../assets/img/user.png',
    },
  ];

  removeDarkMode() {

    document.getElementsByTagName('span')[1].innerHTML = 'light_mode';
    document.getElementsByTagName('span')[1].classList.remove('dark');

    document.body.classList.remove('darkMode');
    document.body.style.backgroundColor = 'var(--white-bg)';

    Array.from(document.getElementsByTagName('nav')).forEach((nav) => {
      nav.style.backgroundColor = 'var(--color-header-claro)';
    });

    Array.from(document.getElementsByTagName('h1')).forEach((title) => {
      title.style.color = 'rgb(0, 0, 0)';
    });

    Array.from(document.getElementsByTagName('a')).forEach((link) => {
      link.style.color = 'var(--dark-bg)';
    });

    Array.from(document.getElementsByTagName('textarea')).forEach(textArea => {
      textArea.style.backgroundColor = "rgb(255, 255, 255)";;
      textArea.style.color = "rgb(0, 0, 0)";
    });

    Array.from(document.getElementsByTagName('div')).forEach((box) => {

      if (box.id === "infoUsuario" || box.classList.contains("login")) {
        box.style.backgroundColor = "var(--card-user-claro)";
        box.style.color = "var(--dark-bg)";
      } else if (box.className === "buttons") {

        box.querySelectorAll('button').forEach(boton => {
          boton.style.backgroundColor = "rgb(255, 255, 255)";
          boton.style.color = "rgb(0, 0, 0)";
        });

      } else if (box.classList.contains("formulario") || box.className === "card") {
        box.style.backgroundColor = "rgb(255, 255, 255)";
        box.style.color = "var(--dark-bg)";
      }
    });
  }
}
