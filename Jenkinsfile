pipeline{
    agent any

    stages{
        stage("checkout"){
            steps{
                git branch:"main",
                url :'https://github.com/veeresh442/aws-web.git'
            }
        }
        stage ("verify"){
            steps{
                bat "dir"
                bat "type Dockerfile"
            }
        }
    } 
}