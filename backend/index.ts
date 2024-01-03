import express, { Express, Request, Response } from "express";
const app: Express = express();

import OpenAI from 'openai';

import dotenv from "dotenv" ;
dotenv.config() ;

const openai = new OpenAI({ apiKey: process.env.API_KEY });



app.get('/', async (req: Request, res: Response) => {
    // res.send("Hellow NEEL.....") ;
            
    try {
        
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "gpt-3.5-turbo",
        })

        console.log(completion.choices[0]);
        res.send(completion.choices[0]) ;

    } catch (error: any) {
        // res.send(error);
        res.status(500).json({ error: 'Error fetching OpenAI API' });
    }

})


app.listen(process.env.PORT, () => {
    console.log("Server is Runnihhng on PORT NO. :", process.env.PORT)
});