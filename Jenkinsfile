pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd client'
                sh 'ls'
                sh 'npm i'
                sh 'cd ../'
                sh 'cd serv'
                sh 'npm i'
                sh 'cd ../'
                sh 'npm run build'
                sh 'mv ./client/build ./serv/'
                sh 'npx gh-pages -d ./serv/build/'
            }
        }
    }
}