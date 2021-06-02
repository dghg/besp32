# Building ESP32 pubsub Pipeline Using AWS💁

- Build a basic serverless workflow for communcating with AWS IoT Core

1. IoT Device can generate a data using sensor.
2. Device can use the MQTT and publish messages to AWS IoT Core.
3. AWS IoT Core receive messages and forward to an AWS Lambda Function.
4. AWS Lambda can something.. like update DynamoDB

## I Used
- AWS IoT Core / message broker 
- AWS Lambda / Data Processing Logic 
- AWS DynamoDB / IoT Sensor Data Storage

## Structure
- /secrets : Secrets for device identification. Certificate / public key / private key 
- /aws : AWS Lambda handler 
- /arduino : device code

## Flow
1. AWS IoT 에 디바이스 생성 ( Register a new thing, Create a single thing. )
2. 인증서 프로비저닝
3. 디바이스 활성화 후 Attach a policy. -> 4가지 정책 활성화. iot:Connect, iot:Subscribe, iot:Receive, iot:Publish
