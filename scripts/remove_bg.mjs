import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function processImage() {
    const inputPath = "C:\\Users\\tyg36\\.gemini\\antigravity\\brain\\d9d9682f-f03f-405e-b26e-2ba5bcfee856\\media__1778727673661.png";
    const outputPath = "c:\\Users\\tyg36\\Downloads\\ABHJ\\artifacts\\indibiotek-3d\\public\\team\\dipankar-das.png";
    
    try {
        console.log("Loading image...");
        const blob = await removeBackground(inputPath);
        const arrayBuffer = await blob.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(outputPath, buffer);
        console.log("Background removed and saved successfully!");
    } catch (e) {
        console.error("Error:", e);
    }
}

processImage();
