import 'dotenv/config';
import fs from 'fs';
import cors from "cors";
import express from 'express';
import multer from 'multer'; // for handling multipart/form-data
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" }); 

const s3 = new S3Client({ region: "us-east-2" });

app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const filePath = req.file.path;
        const fileStream = fs.createReadStream(filePath);

        const command = new PutObjectCommand({
            Bucket: "upload-file-bucket",
            Key: req.file.originalname,
            Body: fileStream
        });

        await s3.send(command);

        fs.unlink(filePath, () => {}); 
        console.log("Backend: Upload Success!");

        res.send("Upload Success!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Upload Failed!");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
