# WATTLAB 🚀👽
Aplicación web para el manejo de usuarios, activos, publicidad y consumo de energía en los hogares de Cali-Colombia 💥.
![](srcgui/public/imagenes/logo.png)

## Pre-requisitos 📋

* Tener instalado Node.js 12.16.3+.
* Tener instalado Python (3.7+), Django (3.0.3+) y PostgreSQL (10+).
* Tener instalado un entorno de desarrollo (IDE). En nuestro caso es utiliamos **Visual Studio Code**.
* Crear un entorno virtual en la carpeta donde vayas a descargar/clonar el proyecto.
```
virtualenv myvenv
ó
virtualenv myvenv -p python3.7
```

## Instalación e inicialización 🔧
### Backend ⚡

* Primero se debe clonar el repositorio del proyecto en tu dispositivo local (en la misma carpeta donde está el entorno virtual):
```
git clone http://github.com/sebastian18t/ProyWattlab
```
* Listo, ya tenemos el proyecto descargado.
* Abrimos el proyecto en nuestro entorno de desarrollo y abrimos la terminal.
* Tenemos que activar el entorno virtual.

**En Windows**
```
myvenv\Scripts\activate
```
**En Linux**
```
myvenv/bin
source activate
```
* Instalamos los requerimientos:
```
pip install -r requeriments.txt
ó
pip3 install -r requeriments.txt
```
* Realizamos las migraciones:
```
python manage.py makemigrations
python manage.py migrate
ó
python3.7 manage.py makemigrations
python3.7 manage.py migrate
```
* Inicializamos el backend:
```
python manage.py runserver
ó
python3.7 manage.py runserver
```
**Nota:** La ruta por defecto será: ```http://127.0.0.1:8000/```

### Frontend 🎨
* Navegamos hasta la carpeta que contiene todos los elementos de la GUI:
```
cd srcgui
```
* Instalamos las dependencias y módulos a través del gestor de paquetes de Node.js:
```
npm install
ó
npm i
```
* Ejecutamos el proyecto desde el frontend:
```
npm start
```
* ¡Y listo! Tenemos nuestro proyecto funcionando tanto en el backend, como en el frontend.

**Nota:** La ruta por defecto será: ```localhost:3000/```

## Este proyecto fue construido con 🛠️

* [Django](https://www.djangoproject.com/) - Framework utilizado para el Backend.
* [ReactJS](https://es.reactjs.org/) - Framework utilizado para el Frontend.
* [PostgreSQL](https://www.postgresql.org/) - Base de datos.
* [AWS](https://aws.amazon.com/es/) - Servicio de base de datos en la nube.
* [Heroku](https://www.heroku.com/) - Servicio de despligue de aplicaciones Web en la nube.

## Versionado 📌

* Versión 1.0.0

## Autores ✒️

* **Sebastián Tamayo Lasso** - *Scrum Master, Desarrollador FullStack y QA Tester* - [sebastian18t](https://github.com/sebastian18t)
* **Fabián Andrés Benavides Labiano** - *Desarrollador BackEnd y Analista de bases de datos* - [fabianunivalle]
* **María Paula Mosquera Rengifo** - *Desarrolladora FrontEnd* - [callmemapa](https://github.com/callmemapa)
* **Juan David Castro Cardona** - *Product Owner y Desarrollador FrontEnd* - [JuanCardona97](https://github.com/JuanCardona97)
* **Bryan Steven Biojó Romero** - *Desarrollador FrontEnd* - [bryansbr](http://github.com/bryansbr)
* **Daniel Stiven Cardona Cano** - *Desarrollador FrontEnd* - [Hickaro12](http://github.com/Hickaro12)
(http://github.com/fabianunivalle)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/sebastian18t/ProyWattlab/graphs/contributors) quíenes han participado en este proyecto. 

## Notas finales 🎁

* No olvides comentar a otros sobre este proyecto 📢.
* Los programadores merecen una cerveza 🍺 para celebrar lo aprendido y desarrollado durante este proyecto. 
* Gracias a todos por hacer parte de esto 🤓.


---
⌨️ ¡Con ❤️ por nosotros, para ustedes! 😊
