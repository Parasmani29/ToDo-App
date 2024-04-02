# ToDo App

This ToDo App is a simple web application created using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to manage their tasks efficiently by adding, editing, and deleting them.

## Features

- Add tasks with titles and descriptions
- Edit existing tasks
- Delete tasks
- View all tasks in a list

## Installation

To run this ToDo App locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Parasmani29/ToDo-App.git
   ```
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
4. Create a `.env` file in the backend directory and add the following environment variables:
   ```plaintext
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   ```
5. Run the backend server:
   ```bash
   npm start
   ```
6. In a separate terminal, run the frontend server:
   ```bash
   npm start
   ```
7. Access the application in your web browser at [http://localhost:3000](http://localhost:3000)

## Dependencies

- [cors](https://www.npmjs.com/package/cors) - ^2.8.5
- [dotenv](https://www.npmjs.com/package/dotenv) - ^16.4.5
- [express](https://www.npmjs.com/package/express) - ^4.19.2
- [mongoose](https://www.npmjs.com/package/mongoose) - ^8.2.4

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
