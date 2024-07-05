const { text } = require("express");

class Producto{
    constructor(producto){
        this.id=producto.idproductos,
        this.producto=producto.producto,
        this.descripcion=producto.descripcion,
        this.precio=producto.precio
    }
    set id(id){
        this._id=id;
    }
    set producto(producto){
        var regexProducto = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
        if(regexProducto.test(producto)){
            this._producto=producto;
        }
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    set precio(precio) {
        var regexPrecio = /^\d+(\.\d{1,2})?$/;
        if (regexPrecio.test(precio)) {
            this._precio = precio;
        }
    }
    get id(){
        return this._id;
    }
    get producto(){
        return this._producto;
    }
    get descripcion(){
        return this._descripcion;
    }
    get precio(){
        return this._precio;
    }
    get obtenerProductos(){
        return{
            idproductos:this.id,
            producto:this.producto,
            descripcion:this.descripcion,
            precio:this.precio
        }
    }
}

module.exports=Producto;

