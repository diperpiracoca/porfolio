export  type Proyecto = {
    estado:string;
    titulo: string;
    descripcion: string;
    imagenes: string[];
    RedesSociales: RedSocial[];
}

export  type RedSocial = {
    icono: string;
    nombre: string;
    link: string;
}