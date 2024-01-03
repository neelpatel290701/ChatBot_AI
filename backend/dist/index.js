"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const openai_1 = __importDefault(require("openai"));
// const OPENAI_API_KEY : string = "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"
const openai = new openai_1.default({ apiKey: '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' });
const PORT = 4000;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("Hellow NEEL.....") ;
    try {
        // const prompt = 'Translate the following English text to French: NEEL';
        // const openAiResponse = await getOpenAIResponse(prompt);
        // res.json(openAiResponse);
        const completion = yield openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "gpt-3.5-turbo",
        });
        console.log(completion.choices[0]);
        res.send(completion.choices[0]);
    }
    catch (error) {
        // res.send(error);
        res.status(500).json({ error: 'Error fetching OpenAI API' });
    }
}));
// async function getOpenAIResponse(prompt: string): Promise<any> {
//     const apiKey = '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'; // Replace with your OpenAI API key
//     const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions'; // Adjust the endpoint as needed
//     const headers = {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${apiKey}`,
//     };
//     const requestBody = {
//       prompt,
//       max_tokens: 150, // Adjust as needed
//     };
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(requestBody),
//     });
//     if (!response.ok) {
//         throw new Error(`Failed to fetch OpenAI API: ${response.statusText}`);
//       }
//       const responseData = await response.json();
//       return responseData;
//     }
app.listen(PORT, () => {
    console.log("Server is Runnihhng on PORT NO. :", PORT);
});
