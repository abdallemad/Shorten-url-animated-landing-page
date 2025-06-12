import axios from 'axios'
const SHORTEN_URL = "https://cleanuri.com/api/v1/shorten";

export const POST = async (req: Request) => {
    const body = await req.json()
    console.log(body)
    try {
        const response = await axios.post(SHORTEN_URL, body)
        console.log(response.data)
        return new Response(JSON.stringify(response.data))
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(error))
    }
    
}