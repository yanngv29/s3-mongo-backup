# s3-mongo-backup
This Module Helps in automating mongodb database Backups and uploading them to AWS S3.

# Features

- Supports Promises
- Uploads Backups to S3
- ZIPs Backups before Uploading them

# Usage

## Import 

    const MBackup = require('s3-mongo-backup');

## Create a configuration Object

    var backupConfig = {
       mongodb: {
       host: "localhost", //Database host
       name: "" //Database name
       // Optional Values 
       username: "", //Username to use to connect to database
       password: "" //Password to use to connect to database
    },
    s3: {
       accessKey: "public-key", //AccessKey
       secretKey: "private-key", //SecretKey
       region: "us-west-2", //S3 Bucket Region
       accessPerm: "private", //S3 Bucket Privacy, Private is HIGHLY Recommended
       bucketName: "awesome-bucket" //Bucket Name
    },
    keepLocalBackups: false, //If true, It will not delete local copy of backup
    timezoneOffset: 300 //Timezone, It is assumed to be in hours if less than 16 and in minutes otherwise
    }

### Call the Function and provide Configuration Object to it. 


    MBackup(backupConfig)
      .then(
        onResolve => {
        // When everything was successful
          console.log(onResolve);
    }
        onReject => {
        // When Anything goes wrong!
          console.log(onReject);
    });

> See examples directory for more examples

# License

MIT


## NOTE

##### Please note that, This module uses `mongodump` to create backup of database, You need to have it installed on the machine on which you are using this module. 
