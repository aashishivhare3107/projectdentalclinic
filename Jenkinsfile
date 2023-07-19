pipeline {
    agent any

    stages {
        //This stage check's for git and pulls all the required code
        stage('Checkout') {
            steps {
                echo "Checking scm for Jenkinsfile"
                checkout scm
            }
        }
        //checks for main folder and install frontend dependencies and create optimized production build
         stage('Client') {   steps {
        dir('client') {
           sh 'npm install --legacy-peer-deps'
           sh 'npm run build'
           echo 'Frontend package installation completed'
        }
    }
        //     steps {
        //         script {
        //             sh 'npm install --legacy-peer-deps'
        //             sh 'npm run build'
        //             echo 'Frontend package installation completed'
        //         }
        //     }
        }
        //Copy the production build folder to backend public directory
        stage('Copy to Server') {
            steps {
                sh 'rsync -avz client/build/ public/'
                echo 'copied build folder to bakcend directory'
            }
        }
       //After receving build folder now its time for installing backend dependencies
       stage('Backend') {
                steps {
                 script {
                      sh 'npm install --legacy-peer-deps'
                      echo 'Backend package installation completed'
               }
            
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

    
