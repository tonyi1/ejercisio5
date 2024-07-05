const ConectarBD = require("./ConexionBD");

class ProductoBD extends ConectarBD{
    constructor(){
        super();
    }
    async nuevoProducto(producto){
        const sql="insert into productos values(null,'"+producto.producto+"','"+producto.descripcion+"','"+producto.precio+"');";
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Producto Insertado");
        } catch (error) {
            console.error("Producto no insertado "+error);
            console.error(sql);
        }
    }
    async mostrarProductos(){
        const sql="SELECT * FROM productos";
        var productosBD;
        try {
            await this.conectarMySql();
            [productosBD]= await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Productos recuperados");
            return productosBD;
        } catch (error) {
            console.log("Error al recuperar los datos de productos "+error);
            console.log(sql);
        }
    }
    async buscarProductoPorId(idproductos){
        const sql="select * from productos where idproductos="+idproductos;
        try {
            await this.conectarMySql();
            const producto=await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("producto seleccionado");
            return producto;
        } catch (error) {
            console.log("Error al recuperar el producto "+error);
            console.log(sql);
        }
    }
    async editarProducto(producto){
        const sql2=`
        update productos set
        producto="${producto.producto}",
        descripcion="${producto.descripcion}",
        precio="${producto.precio}"
        where idproductos=${producto.idproductos}
        `;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql2);
            await this.cerrarConexion();
        } catch (error) {
            console.error("Error al editar producto "+error);
            console.error(sql2);
        }
    }
    async borrarProductos(idproductos){
        const sql="delete from productos where idproductos="+idproductos;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
        } catch (error) {
            console.error("Error al borrar el producto"+ error);
            console.error(sql);
        }
    }
}

module.exports=ProductoBD;