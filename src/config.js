export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      BUCKET: "notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "http://FSSServer-demo-endpoint.execute-api.com/FSSServer/fss"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_hgwhj3gww",
      APP_CLIENT_ID: "47lglqnrkfobpk4aruboovlru3",
      IDENTITY_POOL_ID: "us-east-2:3023da39-1a39-45a2-addf-280e34dca741"
    }
  };
  