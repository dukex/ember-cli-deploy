module.exports = {
  "development": {
    "buildEnv": "production",
    "buildPath": "tmp/deploy-dist/",
    "indexFiles": null,
    "manifestPrefix": "foo",
    "tagging": "sha",
    "store": {
      "host": "localhost",
      "manifestSize": 10,
      "port": 63790,
      "type": "redis"
    },
    "assets": {
      "accessKeyId": "<your-access-key-goes-here>",
      "secretAccessKey": "<your-secret-access-key-goes-here>",
      "bucket": "<your-bucket-name>",
      "exclude": [],
      "gzip": true,
      "gzipExtensions": ["js", "css", "svg"],
      "type": "s3"
    }
  },

  "staging": {
    "buildEnv": "staging",
    "buildPath": "tmp/deploy-dist/",
    "indexFiles": null,
    "manifestPrefix": "foo",
    "tagging": "sha",
    "store": {
      "host": "staging-redis.firstiwaslike.com",
      "manifestSize": 10,
      "port": 6379,
      "type": "redis"
    },
    "assets": {
      "accessKeyId": "<your-access-key-goes-here>",
      "secretAccessKey": "<your-secret-access-key-goes-here>",
      "bucket": "<your-bucket-name>",
      "exclude": [],
      "gzip": true,
      "prefix": "<optional-remote-prefix>",
      "gzipExtensions": ["js", "css", "svg", "json"],
      "type": "s3"
    }
  }
}
