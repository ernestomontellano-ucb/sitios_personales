# INSTRUCCIONES

## PASOS A SEGUIR

1. Cada estudiante debe contribuir a este proyecto en github haciendo un **fork** del repositorio principal (el repositorio principal se denominará *upstream*).
2. Haz un **fork** de este proyecto haciendo click en el botón **fork** en tu github.
3. Esto creará una copia del proyecto en tu cuenta de github. 
4. Clona el fork en tu máquina. usando `git clone`.
2. Accede a la carpeta del proyecto `cd sitios_personales`.
3. Es necesario que conectemos el **fork** con el repositorio original. Para esto tendremos que agregar el repositorio principal como un *remote* adicional: `git remote add upstream https://github.com/ernestomontellano-ucb/sitios_personales.git`
4. El comando `git remote -v` nos permite tener información de nuestra conexión remota.
5. Es necesario crear una rama: `git checkout -b tu_nombre`.  (Usa el nombre de tu carpeta raiz. Ejemplo: git checkout -b  ernesto_montellano)

## SUBIR LA RAMA A TU FORK

1. Modifica o genera los archivos necesarios.
2. Sigue los pasos habituales. Sube los cambios al stagging: `git add .` y haz un commit `git commit -m "Agregado este cambio...`
3. Pero recuerda, el cambio que subirás será a la rama creada, por tanto el push debe ser así: `git push origin ernesto_montellano` (Usa el nombre de la rama creada).

## CREAR UN PULL REQUEST (PR)

1. Ve a tu fork en GitHub.
2. Verás un mensaje que dice "Comparar y hacer un pull request".
3. Asegúrate de que la comparación es entre tu rama en tu fork y la rama principal del repositorio original.
4. Agrega una descripción clara de los cambios.
5. Solicita revisión a los colaboradores.
6. Enviar el Pull Request.

## MANTENER TU FORK ACTUALIZADO CON EL REPOSITORIO ORIGINAL

1. Obten los últimos cambios del repositorio original: `git fetch upstream`.
2. Integra estos cambios en la rama main de tu fork:

```
git checkout main
git merge upstream/main
```
3. Sube los cambios a tu fork: `git push origin main`.
4. Si estás trabajando en tu rama, actualizala:
```
git checkout ernesto_montellano
git merge main
```

## RESOLUCIÓN DE CONFLICTOS EN PULL REQUEST SIN PERDER CAMBIOS

Si algunos colaboradores no ven el botón para hacer el Pull Request (PR) y en su lugar ven un mensaje como "Esta rama está atrasada por XX commits", significa que su fork no está actualizado con el repositorio upstream.

### SINCRONIZAR CON MERGE

1. Saca un backup de tu sitio personal fuera del repositorio. Esto solo es una precaución.
2. Agrega el upstream (si es que no lo has hecho ya):

´´
git remote add upstream https://github.com/usuario-original/repo.git
´´
3. Actualizar el fork con los cambios del upstream:

´´
git fetch upstream
´´
4. Muévete a tu rama de trabajo:

´´
git checkout feature-nueva
´´
5. Haz merge con la versión más reciente del upstream:
´´
git merge upstream/main
´´
Acá es donde puede aparecer conflictos que se deben resolver manualmente.

6. Sube los cambios a tu fork:

´´
git push origin feature-nueva
´´
