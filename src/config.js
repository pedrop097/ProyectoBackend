const Config={
    fileSystem: {
        path: './DB'
    },
    mongoDB:{
        uri: `mongodb://localhost/ecommerce`,
        options: {
        serverSelectionTimeoutMS: 5000,
        }
    },
    firebase:{
        "type": "service_account",
        "project_id": "ecommerce-1d8e7",
        "private_key_id": "b394962cf5c01072dfe98816dd40fc2a6f47e3d6",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCo1uFBaqe3mfd+\nqExsT9Tkh6pj0emmD82RBTDnokDch6FZJqzWpkVIJW60nktTmJLPZ57xHlqFOVGB\nhBmbGCQ06gFoqEquLPUaD3yop9BkbTSmy/9E6nql3ob6Lb+tmZbLmHZv196TbxOA\nXy/LZMKcDY7Hn7xQeUFf2pdsGH6rgxM/dAP12rgYG4kzF/Gq3XutZqsFZ9lPTy2E\nOqiYZ1Jn6rIGdhlEw7mkSoHHJCfJOmZOhrCiOg0oRDycxXcLM/1xF3jRUJGn1xhu\nqQAuc58RMazq+Y5oMC5NSMXRoYZI2AqGvB2Q3grsKJ4msLKpm9Zcty9WOfluGFBj\n9nS96G6hAgMBAAECggEADrLNP6IKuY7Bd3DsnUnKY35FiMTdmb+6skcwyZuMGL7E\nfsPBjHrDYYtjsrzsmxmXX0+6rCxLrlkt9a/jwEcm4MXl6z/qZ3UhvdvvCuo4F8QT\njzlHbu8YUBAaMVWyAAmU0YLjfatd9LkY6iYvPZ5XHFmITmvjK6DQvojjwYz02xat\nAvtWEObSWO8kZTH5VjOINfzoN8of4adn0eEFV7VKe2g+LTemhUlPJw0ggYGzkhUR\nm7zhj3S/m/5kew8J8d0QdPk8kC2sNBEurBI5g5egiTzFnkwP0DYmDtFDahWhDnUs\ncHZPNgmS64j8JhiDm1h34xxUCYHeK17WEcxCL1C5SQKBgQDbCJNj+X9w3mRAPp6D\nFd7sFxoFfnprCysNsNKXAvppB2P81e+gdN2CqsUcq9FtBEWfCLHMWPE6bf2cJTrp\nLG26zsAzokfyP8FKUcLqpIS09XkS9ckjhRH8mF8jsrptSJhyCfMHt5Ne1EJ24IcC\no7fSdqWW1edT6ZzEhtW8H/OKWQKBgQDFVaXzH/AYWleuKp8WcDT2zGEWO0oUXMAp\nKx4c783sVc8bePEjvGIDg911/okO2qq+4SqTC5damCE3tu+eNn6tpbbbw/rtAniW\nO5guMRzIXGYHwdDvVMC6qZ54pp8HuN3mymkcp0nD+eKiU4sqA5C3BB3IUU2p5gHZ\nt+eYy5ftiQKBgQCCX5NjoaGSrD0d5GfzfLQo8QNDG+qABrDEwGhJDLPCimyglTLB\n3m3vFfinvTm12yIZrFIwYQyNC+U16Q8stY5G8EOFOGX8sqg5tXsAsZZwI+DCQVxM\n8SsooAWZOQwwelKLJpLrGAD3I/6/xZt3Hb4P3yFnK8E6uEXg0KUuChKrWQKBgQDA\nviNVEUDlyHgTubWhqP9Sf9XkbQyyTtWyYFcNVH0B9d5QqxR9Hyds34OUGIWuaI6V\n2kBHV+8Boc3wKVJqajfZTB8LEKUqkltOAe9mTroaSYWu1fRJj7Kfn8UVe0mhtUOo\nhNOeFRfLv2tJuegXpVvYJsEgQ6lj5TCxgxtG9rTyYQKBgQCCamHAHsz7iuLmlnYw\nGZr+2Md5acF2hywPmYOyYXmSulwAICuVNZF8N11NMqsVr2G/CQDQ2Tc+Kow0issk\nzXrmvEh5MRieRS34uL818xjNjK52xeHeRGmghvUQTYtzuWR6BEBfUBh9AWUAh56K\nrSuUmOiGjH8eiVFOZW4luBtODg==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-vmjcl@ecommerce-1d8e7.iam.gserviceaccount.com",
        "client_id": "116736186672624806207",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vmjcl%40ecommerce-1d8e7.iam.gserviceaccount.com"
      }
      ,
}
export default Config