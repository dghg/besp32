# Building ESP32 pubsub Pipeline Using AWSπ

- Build a basic serverless workflow for communcating with AWS IoT Core

1. IoT Device can generate a data using sensor.
2. Device use the MQTT and publish messages to AWS IoT Core MQTT Broker.
3. AWS IoT Core receive messages and trigger an AWS Lambda Function.
4. AWS Lambda can update DB ( Dynamodb )

## I Used
- AWS IoT Core / message broker 
- AWS Lambda / Data Processing Logic 
- AWS DynamoDB / IoT Sensor Data Storage

## Structure
- /secrets : Secrets for device identification. Certificate / public key / private key 
- /aws : AWS Lambda handler 
- /arduino : device code

## Flow
1. AWS IoT μ λλ°μ΄μ€ μμ± ( Register a new thing, Create a single thing. )
2. μΈμ¦μ νλ‘λΉμ λ
3. λλ°μ΄μ€ νμ±ν ν Attach a policy. -> 4κ°μ§ μ μ± νμ±ν. iot:Connect, iot:Subscribe, iot:Receive, iot:Publish
