import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.ai_devs3_api_key;

if (!API_KEY) {
    throw new Error("API key not found in environment variables");
}

async function main(): Promise<void> {
    try {
        // Fetch data
        const dataResponse = await axios.get<string>('https://poligon.aidevs.pl/dane.txt');
        
        const data: string = dataResponse.data;
        const strings: string[] = data.trim().split('\n');
        
        if (strings.length < 2) {
            throw new Error('Insufficient data received');
        }

        const string1: string = strings[0];
        const string2: string = strings[1];

        // Verify endpoint
        const apiRequestPayload = {
            task: "POLIGON",
            apikey: API_KEY,
            answer: [string1, string2]
        };

        const verifyResponse = await axios.post('https://poligon.aidevs.pl/verify', apiRequestPayload);

        console.log('Response:', verifyResponse.data);

    } catch (error) {
        console.error('Error:', (error as Error).message);
    }
}

main();