pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd ./client && ls'
                sh 'npm run build'
                sh 'mv ./client/build ./serv/'
                sh 'npx gh-pages -d ./serv/build/'
            }
        }
    }
}