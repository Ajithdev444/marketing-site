import { NextApiRequest, NextApiResponse} from "next"
import { comments } from '../../../data/comments.json'

type Data = {
    name:string,
    company: string,
    id: number,
    email: string,
    comments: string,
    newComment: string,
    message: string
}
 function handler ( req:  NextApiRequest,res :  NextApiResponse<Data[]> ) {
    if(req.method === 'GET'){
        res.status(200).json({message : "getdata"})
    }else if(req.method === 'POST'){
        const name = req.body.name
        const company = req.body.company
        const email = req.body.email
        const phonenumber = req.body.phonenumber
        const requirements = req.body.requirements
        const  userdata ={
            id: Date.now(),
            name : name,
            email : email,
            company: company,
            phonenumber: phonenumber,
            requirements: requirements
        }
        comments.push(userdata)
        res.status(201).json(userdata)
        console.log(userdata)
    }
}
export default handler