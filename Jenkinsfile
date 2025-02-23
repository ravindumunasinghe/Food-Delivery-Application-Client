pipeline {
    agent any


    stages {

           stage('Build') {

            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                   ls -la
                   node --version
                   npm --version
                   npm ci
                   npm run build
                   ls -la
                   

                '''
             
            }
        }

          stage('Test') {

            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    node --version
                    npm --version
                    test -f dist/index.html
                    npm test
                '''
            }
        }



    }
}
