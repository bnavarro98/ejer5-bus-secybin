class Contacto {
    constructor(nombre, apellidos, telefono) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.telefono = telefono;
    }
  }
  
  class ListaContactos {
    constructor() {
      this.contactos = [];
    }
  
    agregarContacto(contacto) {
      this.contactos.push(contacto);
    }
  
    buscarContactoPorNombre(nombre) {
      return this.contactos.find(contacto => contacto.nombre === nombre);
    }
  }
  
  const lista = new ListaContactos();
  const contacto1 = new Contacto("John", "Doe", "123456789");
  const contacto2 = new Contacto("Jane", "Smith", "987654321");
  lista.agregarContacto(contacto1);
  lista.agregarContacto(contacto2);
  
  const contactoEncontrado = lista.buscarContactoPorNombre("John");
  console.log("Contacto encontrado:", contactoEncontrado);
  