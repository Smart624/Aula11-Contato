import { Sequelize } from "sequelize"
import db from "../db.js"

const Contato = db.define('contato',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Contato

/*
export class Contato {
    constructor(id, nome,email,telefone){
        this.id = id
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
}

let idAtual = 2

export const create = (contato) => {
    idAtual++
    contato.id = idAtual
    dbContatos.push(contato)
    return contato
}

export const findByPk = (id) => {
    return dbContatos.find(contato => contato.id === id)
}

export const findAll = () => {
    return dbContatos
}

export const destroy = (id) => {
    const contato = findByPk(id)
    if(!contato){
        return false
    }
    const index = dbContatos.indexOf(contato)
    dbContatos.splice(index,1)
    return true
}

export const update = (id,contatoUpdate) => {
    const contato = findByPk(id)
    if(!contato) {
        return false
    }
    const index = dbContatos.indexOf(contato)
    dbContatos[index] = contatoUpdate
    return true
}

export const dbContatos = [
    new Contato(1,"Felipe","email@gmail.com","12345678"),
    new Contato(2,"Nome","meuemail@email.com","987654321")
]
*/