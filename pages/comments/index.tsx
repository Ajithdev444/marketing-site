import { useState } from 'react'

// type User = {
//     roll:number,
//     name:string,
// }

const CommentsPage = () => {
    // const [comments, setComments] = useState<User[]>([])
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [requirements, setRequirements] = useState('')


    // const fetchComments = async () => {
    //     const response = await fetch('/api/comments')
    //     const data = await response.json()
    //     setComments(data)
    // }

    const submitComment = async () => {
        const response = await fetch('/api/comments',{
            method: 'POST',
            body: JSON.stringify({ name, company, email, phonenumber, requirements }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }
    return(
        <div className='ml-40 mt-40'>
            <label>Name</label>
            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <label>Company</label>
            <input type='text' placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)}/>
            <label>Email</label>
            <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>PhoneNumber</label>
            <input type='text' placeholder='PhoneNumber' value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/>
            <label>Requirements</label>
            <input type='text' placeholder='Requirements' value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
            <button onClick={submitComment}>Submit</button>
            {/* <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map((comment) => {
                    return(
                        <div key={comment.roll}>
                            {comment.roll}
                            {comment.name}
                        </div>
                    )
                })
            } */}
        </div>
    )
}
export default CommentsPage