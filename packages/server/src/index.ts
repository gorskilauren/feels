import Sentiment from 'sentiment';
import htmlparser2 from 'htmlparser2';
import axios from 'axios';
import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());

const sentiment = new Sentiment({});

server.post('/', async (request, response) => {
    try {
        const url = request.body['url'];
        const page = await axios.get(url);
        let textToCount: string;
        const parser = new htmlparser2.Parser({
            ontext(text: string) {
                if (!text.match(/[\(\).\/{}]/g)) {
                    textToCount = textToCount ? `${textToCount} ${text.trim()}` : text.trim();
                }
            }
        });
        parser.write(`${page.data}`);
        const result = sentiment.analyze(textToCount);
        response.status(200).send({ score: result['score'] });
    } catch (err) {
        console.log(err)
        response.status(500).send(`unable to fetch site ${request.body.url}`)
    }

});

server.listen(3000)

