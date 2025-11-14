# Upload File to AWS S3

## Project Overview
This project implements a web application that allows users to upload files directly from their browser to an **AWS S3 bucket**. 

## Features
- Custom file input with **dynamic file name display**
- Backend implemented using **Node.js + Express**
- File upload handled using **Multer middleware**
- Files stored securely in an **AWS S3 bucket** (`us-east-2` region)

## How to use it
```
npm install express multer cors @aws-sdk/client-s3 dotenv
```

### Configure AWS credentials in .env file
```
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
```


## Start the backend server
```
node app.mjs
```

## Start the backend server
```
go live - http://127.0.0.1:5500/upload.html
```


## AWS Steps
aws - IAM - Users - Create Users - 
   Permissions policies - AmazonS3FullAccess

Security Credentials - Access keys - chose local code - paste key & value

s3 - create bucket 
   paste bucket name to app.js

## Reference
Loading Credentials in Node.js from Environment Variables： https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html

 https://www.npmjs.com/package/multer
            https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutObjectCommand/

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html
