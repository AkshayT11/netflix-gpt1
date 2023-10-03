import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env
 dangerouslyAllowBrowser: true
});

export default openai;
