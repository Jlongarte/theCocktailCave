const allPosts = import.meta.glob("./posts/*.md", {
  eager: true, //carga los archivos nada más arrancar
  query: "?raw", //devuelve el contenido del archivo como texto sin procesar
  import: "default", //importa el contenido como exportación por defecto
});

export const posts = Object.entries(allPosts).map(([path, fileText]) => {
  const slug = path.split("/").pop().replace(".md", ""); //extrae el nombre del archivo sin extensión

  let title = "";
  let date = "";
  let description = "";
  let content = fileText.trim(); //inicialmente el contenido es el texto sin procesar

  const parts = fileText.split("---"); //separa el texto por los delimitadores de metadatos

  if (parts.length >= 3) {
    const metadata = parts[1].trim(); //la parte del medio es la metadata
    content = parts.slice(2).join("---").trim(); //el resto es el contenido
    const lines = metadata.split("\n"); //separa la metadata en líneas

    lines.forEach((line) => {
      const [key, ...valueParts] = line.split(":"); //separa cada línea en clave y valor
      const value = valueParts.join(":").trim(); //reconstruye el valor en caso de que contenga ":"
      if (key.trim() === "title") {
        title = value; //asigna el título
      } else if (key.trim() === "date") {
        date = value; //asigna la fecha
      } else if (key.trim() === "description") {
        description = value; //asigna la descripción
      }
    });
  }

  return { slug, title, date, content, description };
});
