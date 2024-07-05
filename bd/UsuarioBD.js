const ConectarBD = require("./ConexionBD");

class UsuarioBD extends ConectarBD{
    constructor(){
        super();
    }
    async nuevoUsuario(usuario){
        const sql="insert into usuarios values(null,'"+usuario.nombre+"','"+usuario.celular+"','"+usuario.correo+"');";
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Usuario Insertado");
        } catch (error) {
            console.error("Usuario no insertado "+error);
            console.error(sql);
        }
    }
    async mostrarUsuarios(){
        const sql="SELECT * FROM usuarios";
        var usuariosBD;
        try {
            await this.conectarMySql();
            [usuariosBD]= await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Usuarios recuperados");
            return usuariosBD;
        } catch (error) {
            console.log("Error al recuperar los datos de usuarios "+error);
            console.log(sql);
        }
    }
    async buscarUsuarioPorId(idUsuario){
        const sql="select * from usuarios where idusuarios="+idUsuario;
        try {
            await this.conectarMySql();
            const usuario=await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Usuario seleccionado");
            return usuario;
        } catch (error) {
            console.log("Error al recuperar el usuario "+error);
            console.log(sql);
        }
    }
    async editarUsuario(usuario){
       // const sql="UPDATE usuarios SET nombre='"+usuario.nombre+"', celular='"+usuario.celular+"', correo='"+usuario.correo+"';";
        const sql2=`
        update usuarios set
        nombre="${usuario.nombre}",
        celular="${usuario.celular}",
        correo="${usuario.correo}"
        where idusuarios=${usuario.idusuarios}
        `;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql2);
            await this.cerrarConexion();
        } catch (error) {
            console.error("Error qal editar usuario "+error);
            console.error(sql2);
        }
    }
    async borrarUsuario(idUsuario){
        const sql="delete from usuarios where idusuarios="+idUsuario;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
        } catch (error) {
            console.error("Error al borrar al usuario"+ error);
            console.error(sql);
        }
    }
}

module.exports=UsuarioBD;