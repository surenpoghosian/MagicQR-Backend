// content-service 
const express = require('express');
const app = express();
const port = 3005;
const Replicate = require("replicate")
    
app.use(express.json());

app.get('/generate', async (req, res) => {
    const query = req.query
    try {
        if(query?.url && query?.prompt){
            
            const replicate = new Replicate({
                auth: "r8_OAKTr7iKy0rRYvRY3ePyAOtcajSpGoK3W26wD",
            });

            const output = await replicate.run(
                "zylim0702/qr_code_controlnet:628e604e13cf63d8ec58bd4d238474e8986b054bc5e1326e50995fdbc851c557",
                {
                    input: {
                        url: query.url,
                        prompt:query.prompt,
                        negative_prompt: "text, watermark, deformed, extra leg, extra arm, disfigured, ugly, nasty, censored, deformed, bad anatomy, disfigured, poorly drawn face, mutated, extra limb, ugly, poorly drawn hands, missing limb, floating limbs, disconnected limbs, disconnected head, malformed hands, long neck, mutated hands and fingers, bad hands, missing fingers, cropped, worst quality, low quality, Longbody, lowres, extra digit, fewer digits, cropped, worst quality, low quality",
                        qr_conditioning_scale: 1.3,
                        num_inference_steps: 20,
                        guidance_scale: 9,
                    }
                }
                );
                console.log(output)
                res.json(output)
            } else {
                throw Error("Bad query")
            }
        } catch (error) {
        console.error(error);

        if (error.response) {
          // The request was made, but the server responded with a status code other than 2xx
          res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
          // The request was made, but no response was received
          res.status(500).json({ error: 'No response received from the external API' });
        } else {
          // Something happened in setting up the request
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
});

app.listen(port, () => {
  console.log(`Content Service is running on port ${port}`);
});
