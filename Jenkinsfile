pipeline {
    agent any
    stages {
        stage('Checkout Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/hsevme/dhl.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm ci'
                    sh 'npx playwright install --with-deps'
                }
            }
        }
        
        stage('Run Playwright Tests') {
            steps {
                script {
                    sh 'npx playwright test --headed'
                }
            }
        }
    }
    
    post {
        success {
            echo 'Playwright tests passed!'
        }
        failure {
            echo 'FAILED! Should send a mail...'
        }
    }
}