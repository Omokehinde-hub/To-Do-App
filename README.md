# Docker-To-Do-App: Your Simple Task Manager

A straightforward and efficient web-based task management application designed to help you organize your daily tasks. With Docker-To-Do-App, you can easily add, complete, and remove tasks, all within a clean and intuitive interface. Your tasks are conveniently saved in your browser's local storage, ensuring they persist across sessions.
- [![Docker CI](https://github.com/omokehinde-hub/To-Do-App/actions/workflows/docker-ci.yml/badge.svg)]


## Features

-   **Effortless Task Creation:** Add new tasks quickly and easily using the input field and add button.  No complicated forms or unnecessary steps.
-   **One-Click Task Completion:** Mark tasks as complete with a single click on the associated checkbox. Completed tasks are visually distinguished, providing a clear overview of your progress.
-   **Quick Task Removal:** Remove tasks you no longer need with the click of a button. Keep your to-do list clean and focused.
-   **Persistent Data Storage:** Your tasks are automatically saved in your browser's local storage.  This means your to-do list will be there even after you close the browser or restart your computer.
-   **Dockerized Deployment:** Easily deployable using Docker, ensuring consistency across different environments.

## How to Get Started

These instructions will guide you through setting up and running the Docker-To-Do-App.

1.  **Build Your Web App Package:**

    > Ensure you have all the necessary project files (`index.html`, `styles.css`, `app.js`, and `Dockerfile`) in the same directory.

2.  **Build the Docker Image:**

    Open your terminal, navigate to the directory containing the `Dockerfile`, and run the following command:

        > This command builds a Docker image named `todo-app` using the `Dockerfile` in the current directory (`.`).  The `-t` flag is used to tag the image with a name.

3.  **Run the Docker Container:**

    Run the container from the image you just created, exposing port 80 of the container to port 80 of your host machine:

bash
    docker run -d -p 80:80 todo-app
        > This command runs the `todo-app` image in detached mode (`-d`), meaning the container will run in the background. The `-p 80:80` flag maps port 80 on your host machine to port 80 on the container.

4.  **Access the Application:**

    Open your favorite web browser and go to `http://localhost:80` to start managing your tasks.

## Project Files

-   `index.html`: The main HTML file that defines the structure and layout of the web page. It includes the necessary HTML elements for displaying the to-do list and handling user input.
-   `styles.css`: The stylesheet that controls the visual appearance of the application.  It defines the colors, fonts, and layout of the elements on the page, ensuring a visually appealing user experience.
-   `app.js`:  The JavaScript file containing the logic for adding, completing, and removing tasks. It also handles the saving and loading of tasks from the browser's local storage.
-   `Dockerfile`: A text file that contains instructions for building a Docker image of the application. It specifies the base image, copies the necessary files, and defines the command to run when the container starts.

## Troubleshooting

-   **Application Not Accessible:** If you cannot access the application at `http://localhost:80`, ensure that the Docker container is running.  You can check the status of your containers by running `docker ps` in your terminal. If the container is not running, start it using `docker start <container_id>`.
-   **Changes Not Reflecting:** If you make changes to the source code and don't see them reflected in the application, you may need to rebuild the Docker image and restart the container.  Run `docker build -t todo-app .` followed by `docker stop <container_id>` and `docker run -d -p 80:80 todo-app`.
-   **Port Conflict:** If port 80 is already in use on your system, you can map a different port on your host machine to port 80 on the container.  For example, to map port 8080 on your host to port 80 on the container, use the command `docker run -d -p 8080:80 todo-app` and access the application at `http://localhost:8080`.

## Contributing

We welcome contributions to the Docker-To-Do-App project! Here's how you can contribute:

1.  **Fork the Repository:** Fork the repository to your own GitHub account.
2.  **Create a Branch:** Create a new branch for your feature or bug fix.
3.  **Make Changes:** Implement your changes, ensuring your code adheres to the project's coding standards.
4.  **Test Your Changes:** Thoroughly test your changes to ensure they work as expected.
5.  **Commit Your Changes:** Commit your changes with a clear and descriptive commit message.
6.  **Submit a Pull Request:** Submit a pull request to the main branch of the repository.

> Please provide a clear description of the changes you've made and the problem they solve.
