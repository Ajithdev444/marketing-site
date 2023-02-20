import { NextApiRequest, NextApiResponse} from "next"
import { comments } from '../../../data/comments.json'


type Data = {
    name:string,
    id: number,
    company: string,
    email: string,
    number: number,
    requirements: string,
    comments: string,
    newComment: string,
    message: string,
}
 function handler (
    req:  NextApiRequest,
    res :  NextApiResponse<Data[]>
    ) {
    if(req.method === 'GET'){
        res.status(200).json({ message: 'error'})
    }else if(req.method === 'POST'){
        const name = req.body.name
        const company = req.body.company
        // const email = req.body.email
        // const number = req.body.number
        // const requirements = req.body.requirements
        const  userdetails ={
            id: Date.now(),
            name : name,
            company: company,
            // email: email,
            // number: number,
            // requirements: requirements,

        }
        comments.push(userdetails)
        res.status(201).json(userdetails)
        console.log(userdetails)
    }
}
export default handler