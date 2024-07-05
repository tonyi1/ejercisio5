class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");
    }
    async conectarMySql(){
        try {
            this.conexion=await this.mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'root',
                database:'tiendaut',
                port:'3306'
            });
            console.log("conexion creada a mysql ");
        } catch (error) {
            console.error("Error al crear la conexion "+error);
        }
    }
    async cerrarConexion(){
        if(this.conexion!=null){
            try {
                await this.conexion.end();
                console.log("Conexion cerrada ");
            } catch (error) {
                console.error("Error al cerar conexion "+error);
            }
        }
    }
}

module.exports=ConectarBD;