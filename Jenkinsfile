
pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    environment {
        DOCKER = 'C:\\Users\\91789\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe'
        IMAGE_NAME = 'aws-web:v1'
        DEPLOYMENT_NAME = 'my-website'
        SERVICE_NAME = 'my-website-service'
        WSL_DISTRO = 'Ubuntu-24.04'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                bat 'dir'
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

        stage('Load Image into Minikube') {
            steps {
                bat 'wsl.exe -d %WSL_DISTRO% -- minikube status'
                bat 'wsl.exe -d %WSL_DISTRO% -- minikube image load %IMAGE_NAME%'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'wsl.exe -d %WSL_DISTRO% -- kubectl apply -f deployment.yaml'
                bat 'wsl.exe -d %WSL_DISTRO% -- kubectl apply -f service.yaml'
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'wsl.exe -d %WSL_DISTRO% -- kubectl rollout status deployment/%DEPLOYMENT_NAME% --timeout=120s'
                bat 'wsl.exe -d %WSL_DISTRO% -- kubectl get deployments'
                bat 'wsl.exe -d %WSL_DISTRO% -- kubectl get pods -o wide'
                bat 'wsl.exe -d %WSL_DISTRO% -- kubectl get services'
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check the stage logs to identify the problem.'
        }
    }
}
