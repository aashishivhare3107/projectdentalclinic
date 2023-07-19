pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Checking scm for Jenkinsfile"
                checkout scm
            }
        }

        stage('Client') {
            steps {
                dir('client') {
                    sh 'npm install --legacy-peer-deps'
                    sh 'npm run build'
                    echo 'Frontend package installation completed'
                }
            }
        }

        stage('Copy to Server') {
            steps {
                sh 'rsync -avz client/build/ public/'
                echo 'copied build folder to backend directory'
            }
        }

        stage('Backend') {
            steps {
                script {
                    sh 'npm install --legacy-peer-deps'
                    echo 'Backend package installation completed'
                }
            }
        }

        stage('Start Server') {
            steps {
                sh 'npm install -g pm2'
                sh 'pm2 start server.js'
                echo 'Application started at your assigned port'
            }
        }
    }
}