from locust import HttpUser, task, between
import random
import string

class TodoUser(HttpUser):
    wait_time = between(1, 2)  # Her kullanıcı isteği arasında 1-2 saniye bekler

    @task(3)
    def get_todos(self):
        self.client.get("/todos")

    @task(1)
    def post_todo(self):
        task_text = ''.join(random.choices(string.ascii_letters, k=10))
        self.client.post("/todos", json={"task": task_text})
