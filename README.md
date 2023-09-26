# s3 serverless functions
> this repo serves to facilitate the transfer of data between local and the cloud with lambda

### step 0
create create your application with the following 
```bash
# create simple app 
serverless create --template aws-nodejs --path . 
```

### step 1
create an account with aws
<https://aws.amazon.com/>

### step 2
create a s3 bucket and give the right permissions

### step 3
create a role with your personal username and get the access and secret key

### step 4
locally, go to ~/.aws/credencials and add the following

``` txt
[default]
aws_access_key_id=<value from AWS access portal>
aws_secret_access_key=<value from AWS access portal>

[aws-{profile}]
aws_access_key_id=<value from AWS access portal>
aws_secret_access_key=<value from AWS access portal>
```

### step 6
create your functions and test them locally

``` bash
# locally : invoke lambda 
serverless invoke local --stage dev --aws-profile aws-{profile_name} -f first_handler
```

### step 7
deploy your application on the cloud 

```bash
# deploy the whole code 
serverless deploy --stage dev --aws-profile aws-{profile_name}
```

### step 8
make changes and deploy again or invoke your new handler with the follwing function 

```bash
# cloud : invoke lambda  
serverless invoke --stage dev --aws-profile aws-{profile_name} -f first_handler
```
