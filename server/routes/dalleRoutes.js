import express from 'express' ; 
import * as dotenv from 'dotenv' 
import { OpenAI} from 'openai'


dotenv.config() ; 

const router = express.Router() ;

const openai = new OpenAI({
    apiKey : "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"
}
    
)
router.route('/').get((req,res)=>{
    res.send('HELLO AGAIN ') ; 

})

router.post('/' ,(async (req , res)=>{
    try{
        const {prompt} = req.body ; 

        const aiResponse =   await openai.images.generate({
            prompt,
            n:1 , 
            size:'1024x1024' ,
            response_format : 'b64_json'
        })

        const image = aiResponse.data[0].b64_json;

        res.status(200).json({photo:image}) ; 
    }catch(err){
        console.log(err) ; 
        res.status(500).send(error?.response.data.error.message)
    }

}))
export default router ;