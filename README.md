# 📝 Cloud-Native Todo Application on GCP

This project is a cloud-native Todo application designed, deployed, and tested on **Google Cloud Platform (GCP)** as part of the SWE590 Term Project. The system integrates containerized workloads, virtual machines, and serverless functions.

---

## 🌐 Architecture Overview



---

## ⚙️ Deployment Guide

### 1. Backend & Frontend (Docker + Kubernetes)

- Build & Push Docker Images:

```bash
# Backend
docker build -t todo-backend .
docker tag todo-backend us-central1-docker.pkg.dev/YOUR_PROJECT_ID/todo-repo/todo-backend
docker push us-central1-docker.pkg.dev/YOUR_PROJECT_ID/todo-repo/todo-backend

# Frontend
docker build -t todo-frontend .
docker tag todo-frontend us-central1-docker.pkg.dev/YOUR_PROJECT_ID/todo-repo/todo-frontend
docker push us-central1-docker.pkg.dev/YOUR_PROJECT_ID/todo-repo/todo-frontend

kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml


gcloud functions deploy logFunction \
  --runtime=nodejs18 \
  --trigger-http \
  --allow-unauthenticated \
  --entry-point=logFunction \
  --region=us-central1


cd locust
locust -H http://<BACKEND_LOADBALANCER_IP>
