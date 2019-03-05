export interface WebData{

    icon:string;
    tipo:number;
    secciones:{

        home:{
            navbar:string;
            logo:string;
            imagen:string;
            titulo:string;
            subtitulo:string;
        }

        servicios:{
            navbar:string;
            titulo:string;
            descripcion:string;
            servicio:Array<{imagen:string,titulo:string,descripcion:string}>;
        }

        casos:Array<{titulo:string,descripcion:string;}>;

        horario:{
            titulo:string;
            hora:Array<{dia:string,dehora:string,hastahora:string}>;
        }
    
        about:{
            navbar:string;
            titulo:string;
            descripcion:string;
            caracteristicas:Array<{titulo:string,descripcion:string}>;
        }

        banner:{
            titulo:string,descripcion:string,autor:string
        }

        contacto:{
            navbar:string;
            titulo:string;
            telefono:string;
            email:string;
            lugar:string;
        }
        sociales:{
            titulo:string,facebook:string,twitter:string,instagram:string
        };
    }
}