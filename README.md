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