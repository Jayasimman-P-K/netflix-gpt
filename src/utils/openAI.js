import OpenAI from "openai";
import { OPEN_API_KEY } from "./constant";

const openAI = new OpenAI({
  apiKey: OPEN_API_KEY,
  dangerouslyAllowBrowser: true,
  // defaults to process.env["OPENAI_API_KEY"]
});

export default openAI;
