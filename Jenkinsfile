pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd ./client && npm install'
                sh 'cd ./serv && npm install'
                sh 'npm run build'
                sh 'mv ./client/build ./serv/'
                sh 'npx gh-pages -d ./serv/build/'
            }
        }
    }
}