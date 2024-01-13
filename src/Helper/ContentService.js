const Replicate = require("replicate");
const StorageService = require('./StorageService');    


function ContentService(){
    this.generateQr = async(u_id, q_id, destination, prompt) =>{

        const url = `http://192.168.0.155:3000/analytics/scan?u_id=${u_id}&q_id=${q_id}`
            const replicate = new Replicate({
                auth: "r8_OAKTr7iKy0rRYvRY3ePyAOtcajSpGoK3W26wD",
            });

            const output = await replicate.run(
                "zylim0702/qr_code_controlnet:628e604e13cf63d8ec58bd4d238474e8986b054bc5e1326e50995fdbc851c557",
                {
                input: {
                    url: url,
                    prompt: prompt,
                    negative_prompt: "text, watermark, deformed, extra leg, extra arm, disfigured, ugly, nasty, censored, deformed, bad anatomy, disfigured, poorly drawn face, mutated, extra limb, ugly, poorly drawn hands, missing limb, floating limbs, disconnected limbs, disconnected head, malformed hands, long neck, mutated hands and fingers, bad hands, missing fingers, cropped, worst quality, low quality, Longbody, lowres, extra digit, fewer digits, cropped, worst quality, low quality",
                    qr_conditioning_scale: 1.7,
                    num_inference_steps: 20,
                    guidance_scale: 9,
                }
                }
                );

                let storageService = new StorageService()

                await storageService.newQr(u_id, q_id, output[0], destination)
                return output
            }
} 

module.exports = ContentService