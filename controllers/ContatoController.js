import Contato from "../models/Contato.js"

class ContatoController {
    static async list(req,res){
        const contatos = await Contato.findAll()
        res.json(contatos)
    }

    static async getContatoById(req,res){
        const id = parseInt(req.params.id)
        const contato = await Contato.findByPk(id)
        if(!contato){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        res.json(contato)
    }

    static async destroyContato(req,res){
        const id = parseInt(req.params.id)
        const contato = await Contato.findByPk(id)
        if(!contato){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Contato.destroy({where: {id: contato.id}})
        res.json({message: "Removido com sucesso!"})
    }

    static async createContato(req,res){
        const {nome, email, telefone} = req.body // req.body.nome, req.body.email ...
        if(!nome || !email || !telefone){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdContato = await Contato.create({nome,email,telefone}) //req.body
        res.status(201).json(createdContato)
    }

    static async updateContato(req,res){
        const id = parseInt(req.params.id)
        const contato = await Contato.findByPk(id)
        if(!contato){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {nome, email, telefone} = req.body // req.body.nome, req.body.email ...
        if(!nome || !email || !telefone){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedContato = await Contato.update({nome,email,telefone},{where: {id: contato.id}})
        res.json(updatedContato)
    }
}

export default ContatoController

/*
import { Contato, create, destroy, findAll, findByPk, update } from "../models/Contato.js"

class ContatoController {
    static list(req,res){
        res.json(findAll())
    }

    static getContatoById(req,res){
        const id = parseInt(req.params.id)
        const contato = findByPk(id)
        if(!contato){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        res.json(contato)
    }

    static destroyContato(req,res){
        const id = parseInt(req.params.id)
        const contato = findByPk(id)
        if(!contato){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        destroy(id)
        res.json({message: "Removido com sucesso!"})
    }

    static createContato(req,res){
        const {nome, email, telefone} = req.body // req.body.nome, req.body.email ...
        if(!nome || !email || !telefone){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const contato = new Contato(0,nome,email,telefone)
        const createdContato = create(contato)
        res.status(201).json(createdContato)
    }

    static updateContato(req,res){
        const id = parseInt(req.params.id)
        const contato = findByPk(id)
        if(!contato){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {nome, email, telefone} = req.body // req.body.nome, req.body.email ...
        if(!nome || !email || !telefone){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        contato.nome = nome
        contato.email = email
        contato.telefone = telefone

        update(id,contato)
        res.json(contato)
    }
}
*/