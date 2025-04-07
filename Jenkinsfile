pipeline {
    agent any
    environment {
        DOCKERHUB_USER = 'ravindumunasinghe'
        DOCKERHUB_PASS = credentials('DOCKERHUB_PASS')
        AWS_ACCESS_KEY = credentials('AWS_ACCESS_KEY')
        AWS_SECRET_KEY = credentials('AWS_SECRET_KEY')

    }
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/ravindumunasinghe/Food-Delivery-Application-Client'
            }
        }
        stage('Build Docker Images') {
            steps {
            
                bat 'docker build -t %DOCKERHUB_USER%/frontend:latest -f Dockerfile .'
            }
        }
           stage('Terraform Test') {
            steps {
                bat 'terraform version'
            }
        }
        stage('Push Docker Images') {
            steps {
                bat 'echo %DOCKERHUB_PASS% | docker login -u %DOCKERHUB_USER% --password-stdin'
                
                bat 'docker push %DOCKERHUB_USER%/frontend:latest'
            }
        }
        stage('Provision AWS EC2') {
            steps {
                bat 'cd terraform && terraform init && terraform apply -auto-approve'
            }
        }
        
        stage('Fetch EC2 IP') {
            steps {
            script {
            def ec2_ip = bat(script: 'cd terraform && terraform output -raw instance_public_ip', returnStdout: true).trim()
            env.EC2_IP = ec2_ip
            echo "EC2 Public IP: ${env.EC2_IP}"

            // Write inventory file for Ansible
            writeFile file: 'inventory.ini', text: "[ec2]\n${env.EC2_IP} ansible_user=ubuntu ansible_ssh_private_key_file=C:\\Users\\ravindu dilshan\\Downloads\\dockerthings2\\key1.pem"
                }
            }
        }
    }
}
