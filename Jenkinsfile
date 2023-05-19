pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                npm run build
                mv ./client/build ./serv/
                gh-pages -d ./serv/build/
            }
        }
    }
}