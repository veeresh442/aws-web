
pipeline {
    agent any

    stages {
        stage('Verify Source') {
            steps {
                bat 'dir'
                bat 'type Dockerfile'
            }
        }

        stage('Check Docker') {
            steps {
                bat '"C:\\Users\\91789\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" --version'
            }
        }
    }
}
