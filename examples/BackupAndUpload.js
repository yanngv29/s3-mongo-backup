const backup = require("../backup")

var backupConfig = {
  mongodb: {
    host: "localhost", //Database host
    name: "zion17" //Database name
    // Optional Values 
    // username: "", //Username to use to connect to database
    // password: "" //Password to use to connect to database
  },
  s3: {
    accessKey: "AKIAJ6B2OCXGUNSXAHPQ", //AccessKey
    secretKey: "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", //SecretKey
    region: "us-west-2", //S3 Bucket Region
    accessPerm: "private", //S3 Bucket Privacy, Private is HIGHLY Recommended
    bucketName: "fintrigtest" //Bucket Name
  },
  keepLocalBackups: true, //If true, It will not delete local copy of backup
  timezoneOffset: 300 //Timezone, Used in naming backups, It is assumed to be in hours if less than 16 and in minutes otherwise
}

//  For one time backup
backup(backupConfig).then(resolved => {
  console.log(resolved)
}, rejected => {
  console.error(rejected)
});;

// For backups with some intervals.
setInterval(() => {
  backup(backupConfig).then(resolved => {
    console.log(resolved)
  }, rejected => {
    console.error(rejected)
  });
}, 60 * 60 * 3); // Every 3 hours