pipeline {
  options {
    buildDiscarder (logRotator(numToKeepStr: '5'))
  }
  environment {
   DOCKERHUB_CREDENTIALS = credentials('asadz31-dockerhub') 
  }
  stages {
    stage('Build') {
      steps { 
        sh 'docker build -t asadz31/node-app .'
      } 
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('push') {
      steps {
        sh 'docker push asadz31/node-app'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}
