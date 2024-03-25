export interface Character {
  characterId: string; // Identificador único del personaje
  nombre: string; // Nombre del personaje
  altura: number; // Altura del personaje
  peso: number; // Masa del personaje
  color_de_cabello: string; // Color de cabello del personaje
  color_de_piel: string; // Color de piel del personaje
  color_de_ojos: string; // Color de ojos del personaje
  ano_de_nacimiento: string; // Año de nacimiento del personaje
  genero: string; // Género del personaje
  planeta_de_origen: string; // Planeta natal del personaje
  peliculas: string[]; // URLs de las películas en las que aparece el personaje
  especies: string[]; // URLs de las especies a las que pertenece el personaje
  vehiculos: string[]; // URLs de los vehículos que ha utilizado el personaje
  naves_espaciales: string[]; // URLs de las naves espaciales que ha utilizado el personaje
  creado: string; // Fecha de creación del registro en la base de datos
  editado: string; // Fecha de última edición del registro en la base de datos
  url: string; // URL de la entrada del personaje en la API de SWAPI
}
