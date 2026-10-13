
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/veeresh442/aws-web.git'
            }
        }

        stage('Verify Source') {
            steps {
                bat 'dir'
                bat 'type Dockerfile'
            }
        }

        stage('Check Docker') {
            steps {
                bat 'docker --version'
                bat 'docker info'
            }
        }
    }
}
