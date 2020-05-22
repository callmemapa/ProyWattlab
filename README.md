# WATTLAB 🚀
Aplicación web para el manejo de usuarios, activos, publicidad y consumo de energía en los hogares.
![](srcgui/public/imagenes/logo.png)

## Pre-requisitos 📋

* Tener instalado python y django.
* Tener instalado un entorno de desarrollo, en nuestro caso es Visual Studio Code.
* Crear un entorno virtual en la carpeta donde vayas a descargar el proyecto.
```
virtualenv myvenv
```

## Instalación e inicialización 🔧
### Backend

* Primero se debe clonar el repositorio del proyecto en tu dispositivo local (en la misma carpeta donde está el entorno virtual):
```
git clone http://github.com/sebastian18t/ProyWattlab
```
* Listo, ya tenemos el proyecto descargado.
* Abrimos el proyecto en nuestro entorno de desarrollo y abrimos la terminal.
* Tenemos que activar el entorno virtual:
```
myvenv\Scripts\activate
```
* Realizamos las migraciones:
```
python manage.py makemigrations
python manage.py migrate
```
* Instalamos los requerimientos:
```
pip install -r requeriments
```
* Inicializar el backend:
```
python manage.py runserver
```

### Frontend
* Nos ubicamos dentro de la carpeta srcgui:
```
cd srcgui
```
* Instalamos las dependencias y módulos:
```
npm install 
o 
npm i
```
* Ejecutamos el proyecto desde el front:
```
npm start
```
* Y listo, tenemos nuestro proyecto funcionando tanto en el back, como en el front.

## Construido con 🛠️

* [Django](https://www.djangoproject.com/) - Framework utilizado para el Backend
* [ReactJS](https://es.reactjs.org/) - Framework utilizado para el Frontend
* [PostgreSQL](https://www.postgresql.org/) - Base de datos
* [AWS](https://aws.amazon.com/es/) - Servicio de base de datos en la nube

## Versionado 📌

* Versión 1.0.0

## Autores ✒️

* **Sebastián Tamayo Lasso** - *Desarrollador Backend y QA* - [sebastian18t](https://github.com/sebastian18t)
* **María Paula Mosquera Rengifo** - *Desarrolladora FrontEnd* - [callmemapa](https://github.com/callmemapa)
* **Juan David Castro Cardona** - *Product Owner y Desarrollador FrontEnd* - [JuanCardona97](https://github.com/JuanCardona97)
* **Fabián Andrés Benavides Labiano** - *Analista de bases de datos* - [fabianunivalle](http://github.com/fabianunivalle)
* **Daniel Stiven Cardona Cano** - *Desarrollador FrontEnd* - [Hickaro12](http://github.com/Hickaro12)
* **Bryan Biojó** - *Desarrollador FrontEnd* - [bryansbr](http://github.com/bryansbr)
  
También puedes mirar la lista de todos los [contribuyentes](https://github.com/sebastian18t/ProyWattlab/graphs/contributors) quíenes han participado en este proyecto. 

## Notas Finales 🎁

* No olvides comentar a otros sobre este proyecto 📢
* Los programadores merecen una cerveza 🍺 para celebrar lo aprendido y desarrollado durante este proyecto. 
* Gracias a todos por hacer parte de esto 🤓.


---
⌨️ con ❤️ por nosotros, para ustedes 😊
