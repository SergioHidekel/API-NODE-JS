import res from "express/lib/response";
import { getConnection } from "../database/connection";

export const getRegistro = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT *FROM Registros');
        console.log(result);
        res.json(result.recordset);
    }catch (error) {
        res.status(500).json(error);
    }
};

//sp_RegistroFinal
export const createRegistro = async (req, res) => {
    try {
        const{Nombre, Apellido1,Apellido2,Curp,Telefono,Direccion,Correo, Password,Numero_Cuenta} = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('Nombre', Nombre)
            .input('Apellido1', Apellido1)
            .input('Apellido2', Apellido2)
            .input('Curp', Curp)
            .input('Telefono', Telefono)
            .input('Direccion',Direccion)
            .input('Correo', Correo)
            .input('Password', Password)
            .input('Numero_Cuenta', Numero_Cuenta)
            .execute('sp_RegistroFinal');
        console.log(result);
        res.json(result.recordset);
    }catch (error) {
        res.status(500).json(error);
    }
};

//sp_ConsultaMovimientosCurp
export const getRegistroByCurp = async (req, res) => {
    try {
        const {Curp} = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('Curp', Curp)
            .execute('sp_ConsultaMovimientosCurp');
        console.log(result);
        res.json(result.recordset);
   }catch (error) {
        res.status(500).json(error);
    }
};

//sp_EliminaRegistro
export const deleteRegistro = async (req, res) => {
    try {
        const {Curp} = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('Curp', Curp)
            .execute('sp_EliminaRegistro');
        console.log(result);
        res.json(result.recordset);
   }catch (error) {
        res.status(500).json(error);
    }
};
