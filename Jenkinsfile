
pipeline {
    agent any

    environment {
        DOCKER = 'C:\\Users\\91789\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe'
        IMAGE_NAME = 'aws-web:v1'
    }

    stages {
        stage('Verify Source') {
            steps {
                bat 'dir'
                bat 'type Dockerfile'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat '"%DOCKER%" build -t %IMAGE_NAME% .'
            }
        }

        stage('Verify Docker Image') {
            steps {
                bat '"%DOCKER%" images aws-web'
            }
        }
    }
}
