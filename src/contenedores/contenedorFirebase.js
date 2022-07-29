import admin from 'firebase-admin';
import config from '../config.js';

admin.initializeApp({
    credential: admin.credential.cert(config.firebase),
})

const db = admin.firestore();

class ContenedorFirebase {
    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion);
    }

    async getById(id) {
        try {
            const doc = await this.coleccion.doc(id).get();

            const data = doc.data();
            if (data) {
                return { ...data, id };
            } else {
                return null;
            }

        } catch (err) {
            console.log('Error en método getById: ', err);
        }
    }

    async getAll() {
        try {
            const docs = await this.coleccion;
            const snapshot = await docs.get();

            let productos = [];

            snapshot.forEach((doc) => {
                let data = doc.data();
                let id = doc.id;
                productos.push({ ...data, id });
            })

            return productos;
        } catch (error) {
            console.log('Error en método getAll: ', error);
            return [];
        }
    }

    async save(object) {
        try {
            object.timestamp = new Date(Date.now());
            let resultado = await this.coleccion.add(object);

            return resultado.id;

        } catch (err) {
            console.log('Error en método save: ', err);
        }
    }

    async deleteById(id) {
        try {
            await this.coleccion.doc(id).delete();

        } catch (err) {
            console.log('Error en método deleteById: ', err);
        }
    }

    async updateById(id, object) {
        try {
            object.timestamp = new Date(Date.now());

            await this.coleccion.doc(id).update(object);

        } catch (err) {
            console.log('Error en método updateById: ', err);
        }
    }
}

export default ContenedorFirebase;