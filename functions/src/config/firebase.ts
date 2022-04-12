import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "kunlatek-prototypes",
    // eslint-disable-next-line max-len
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDd+6UpIKeJQ6MP\nk3qqnBtm9HSEPMqYYcbzCrLITNlO0rlVX+5QE3YPAL0tqn226baQDagnk4CsyOWS\nhZoCPRz6R+BvscIZbNyfcDunQkG9puy0Am/6QPsWIwHQVdaGTu3/XTgHEirATtqO\nrET8gFAj8je5MsKadwSK89FmYB7CGXGE8QnOKPq9XdRvX+RegaNC1VUWiSf9bgJJ\nMAXUoIBip9cNv1rxHO25D5/oKWV7YebTTHjtAcdH6plQAx4kzKS3WM9/YCVo/zqs\nShtwn+FjzhVFqI2kslAFExRdmcIiCAvBlAy4HThPiqA3/aaa/wZiLSGz+05Xc/5b\nhp9GFNx9AgMBAAECggEAJd6y7//CpS+1R0h9MlL8d8V3hUHLvFBd/QOTuYkmv4RC\nmvaJNP8E8o1JONuvo79eZlf2Gn5XAuMpCySgwAYGBgqyFswIFYdVYhvnCWNLzNuH\n4TPTP6nLTBz/x7eFKBeaEakpEEfApFsvfQyVnlATm/ZMHFu1CF4Kl9v9ms4GIU2d\nitdspBWH3R1TwbTUJqyfQ74DDUWbQTJECruejz98lGNP8EOdpb0mdYVPK/XvaDQp\ni13vSs3V+hm2RH7ZH0t3LZ6L7KqzBCXmF8rGL6TXjEKB4AO3LcaJKxrpQ4BpK3Yl\nzswba78Tl/EApui9ZFmLeFHpgu2YS/Y+KLaBObP8/wKBgQD02UdqQfzXAsPbJmSa\nmUCKzbn4Jd6oBC88ZaErjf7Q2r7mB7XafjQvWye57L4uAujsCfjtCuSoXdECcXSr\n/NzMWwAvyB0YyI6uSJIUg+rmwSLExDMS/1H+ggAub4iR+60z5G63XqiM7Y6OLM35\nO2fi6GYxLRAMS/rYwy9Fblp5KwKBgQDoF8WGDTFxAMPVG2c0fNkB0604wZ7YPwAf\nD7MjQG/Xw4lFM+MbAcqGx8lzz7qXmbqYxm4sB+ntlZUwvnPBuzVccK9eQoe2mD6U\n5DJvWStgBWNtHXFUjpmqTaorlatTqn9nUJsfP0Xn7viE8WI/9T8mRbBpqtSbkiEv\naz3m/3vc9wKBgQDicPgNG038g4Ai81TjbYw1UqIFDvDmrkgJMWxm3YGmIkeecc8L\nbOBSU5lf58TSxLopYeenQgXKeElOWyMt1ENXc2muxwGx4/mg0VjYRFBAbKn9E/6w\nORTZrd0BFQFXEU1TypViXNbAzwqiDmnHb9taDNhF7okC9lndklXrfm2J1QKBgQC7\nd7gMd0ugQ0XrNJ9APjfqydf5KCvt77VhYYUIzFuKpF6Ujzy569By3Z1S9k95dKrM\nDDuhRSMmzNQc8zj9GwIXEM4WDRch3gdurIQwfI4UmUWeNVH9QtHMRb9WRSaGBgmy\noeEqdCk7FkOW3oLFtoqzl0bPkzT4FCjJ7I2rsGGUMQKBgAm51KIPuhzKzBJKgpGB\n8SQpkxxNkns1bUUZqf1GKt2j7taxqxFgPJ7lXVoEBo2cd5JWRe14vR2H83gmN9Nm\nXkGMOyeExg+VH7e9nFPE3KwnwX0du1HwrW3iYnh7KeRRKkAEg9yCcxhp5P03ky44\n/HGirXEZs/9Z4iq0rv/nGZxg\n-----END PRIVATE KEY-----\n",
    // eslint-disable-next-line max-len
    clientEmail: "firebase-adminsdk-v3p6p@kunlatek-prototypes.iam.gserviceaccount.com",
  }),
  databaseURL: "https://kunlatek-prototypes-default-rtdb.firebaseio.com",
});

const db = admin.firestore();
db.settings({ignoreUndefinedProperties: true});

export {
  admin,
  db,
};
