pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
                sh 'mv ./client/build ./serv/'
                sh 'gh-pages -d ./serv/build/'
            }
        }
    }
}