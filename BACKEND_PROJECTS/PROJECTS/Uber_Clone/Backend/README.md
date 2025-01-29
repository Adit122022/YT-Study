# Uber Clone Backend API Documentation

## Endpoints
 # Users ROUTES
### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string): The user's email address. Must be a valid email.
- `fullname` (object): An object containing the user's full name.
  - `firstname` (string): The user's first name. Must be at least 3 characters long.
  - `lastname` (string): The user's last name. Must be at least 3 characters long.
- `password` (string): The user's password. Must be at least 6 characters long.

#### Example Request
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}
```

#### Responses

- **201 Created**
  - **Description**: User successfully registered.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "user@example.com"
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Invalid input data.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Invalid first name",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Invalid last name",
          "param": "fullname.lastname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

#### Status Codes
- `201`: User successfully registered.
- `400`: Invalid input data.

#### Example Response
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

#### markdown
- `user` (object):
    - `_id` (string): The user's unique identifier.
    - `fullname` (object): An object containing the user's full name.
    - `firstname` (string): The user's first name.
    - `lastname` (string): The user's last name.
    - `email` (string): The user's email address.
    - `password` (string): The user's password. Must be at least 6 characters long.
    - `token` (string): The user's token. Must be at least 6 characters long.


#### Error Handling
- **Invalid Email**: If the email is not valid, the response will include an error message indicating the invalid email.
- **Invalid First Name**: If the first name is not at least 3 characters long, the response will include an error message indicating the invalid first name.
- **Invalid Last Name**: If the last name is not at least 3 characters long, the response will include an error message indicating the invalid last name.
- **Invalid Password**: If the password is not at least 6 characters long, the response will include an error message indicating the invalid password.

#### Notes
- Ensure that the email provided is unique and not already registered in the system.
- Passwords are hashed before being stored in the database for security purposes.



### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string): The user's email address. Must be a valid email.
- `password` (string): The user's password. Must be at least 6 characters long.

#### Example Request
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
  - **Description**: User successfully logged in.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "user@example.com"
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Invalid input data.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid email or password.
  - **Body**: A JSON object containing an error message.
  - **Example**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

#### Status Codes
- `200`: User successfully logged in.
- `400`: Invalid input data.
- `401`: Invalid email or password.

#### Example Response
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

#### Error Handling
- **Invalid Email**: If the email is not valid, the response will include an error message indicating the invalid email.
- **Invalid Password**: If the password is not at least 6 characters long, the response will include an error message indicating the invalid password.
- **Invalid Credentials**: If the email or password is incorrect, the response will include an error message indicating invalid credentials.

#### Notes
- Ensure that the email provided is registered in the system.
- Passwords are compared using a secure method to ensure user security.

### GET /users/profile

#### Description
This endpoint is used to retrieve the profile of the logged-in user.

#### Request Headers
- `Authorization` (string): The Bearer token for authentication.

#### Responses

- **200 OK**
  - **Description**: User profile successfully retrieved.
  - **Body**: A JSON object containing the user details.
  - **Example**:
    ```json
    {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid or missing authentication token.
  - **Body**: A JSON object containing an error message.
  - **Example**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Status Codes
- `200`: User profile successfully retrieved.
- `401`: Invalid or missing authentication token.

#### Example Response
```json
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "user@example.com"
}
```

#### Error Handling
- **Unauthorized**: If the authentication token is invalid or missing, the response will include an error message indicating unauthorized access.

#### Notes
- Ensure that the request includes a valid Bearer token in the Authorization header.

### POST /users/logout

#### Description
This endpoint is used to log out the currently logged-in user.

#### Request Headers
- `Authorization` (string): The Bearer token for authentication.

#### Responses

- **200 OK**
  - **Description**: User successfully logged out.
  - **Body**: A JSON object containing a success message.
  - **Example**:
    ```json
    {
      "message": "Successfully logged out"
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid or missing authentication token.
  - **Body**: A JSON object containing an error message.
  - **Example**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Status Codes
- `200`: User successfully logged out.
- `401`: Invalid or missing authentication token.

#### Example Response
```json
{
  "message": "Successfully logged out"
}
```

#### Error Handling
- **Unauthorized**: If the authentication token is invalid or missing, the response will include an error message indicating unauthorized access.

#### Notes
- Ensure that the request includes a valid Bearer token in the Authorization header.


 # CAPTAINS ROUTES
### POST /captains/register

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string): The captain's email address. Must be a valid email.
- `fullname` (object): An object containing the captain's full name.
  - `firstname` (string): The captain's first name. Must be at least 3 characters long.
  - `lastname` (string): The captain's last name. Must be at least 3 characters long.
- `password` (string): The captain's password. Must be at least 6 characters long.
- `vehicle` (object): An object containing the vehicle details.
  - `color` (string): The vehicle's color. Must be at least 3 characters long.
  - `plate` (string): The vehicle's plate number. Must be at least 3 characters long.
  - `capacity` (number): The vehicle's capacity. Must be at least 1.
  - `vehicleType` (string): The type of vehicle. Must be one of 'car', 'motorcycle', or 'auto'.

#### Example Request
```json
{
  "email": "captain@example.com",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses

- **201 Created**
  - **Description**: Captain successfully registered.
  - **Body**: A JSON object containing the authentication token and captain details.
  - **Example**:
    ```json
    {
      "token": "jwt_token_here",
      "captain": {
        "_id": "captain_id_here",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "captain@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Invalid input data.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        },
        {
          "msg": "Color must be at least 3 characters long",
          "param": "vehicle.color",
          "location": "body"
        },
        {
          "msg": "Plate must be at least 3 characters long",
          "param": "vehicle.plate",
          "location": "body"
        },
        {
          "msg": "Capacity must be at least 1",
          "param": "vehicle.capacity",
          "location": "body"
        },
        {
          "msg": "Invalid vehicle type",
          "param": "vehicle.vehicleType",
          "location": "body"
        }
      ]
    }
    ```

#### Status Codes
- `201`: Captain successfully registered.
- `400`: Invalid input data.

#### Example Response
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error Handling
- **Invalid Email**: If the email is not valid, the response will include an error message indicating the invalid email.
- **Invalid First Name**: If the first name is not at least 3 characters long, the response will include an error message indicating the invalid first name.
- **Invalid Last Name**: If the last name is not at least 3 characters long, the response will include an error message indicating the invalid last name.
- **Invalid Password**: If the password is not at least 6 characters long, the response will include an error message indicating the invalid password.
- **Invalid Vehicle Details**: If any of the vehicle details are invalid, the response will include an error message indicating the invalid vehicle details.

#### Notes
- Ensure that the email provided is unique and not already registered in the system.
- Passwords are hashed before being stored in the database for security purposes.

### POST /captains/login

#### Description
This endpoint is used to log in an existing captain.

#### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string): The captain's email address. Must be a valid email.
- `password` (string): The captain's password. Must be at least 6 characters long.

#### Example Request
```json
{
  "email": "captain@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
  - **Description**: Captain successfully logged in.
  - **Body**: A JSON object containing the authentication token and captain details.
  - **Example**:
    ```json
    {
      "token": "jwt_token_here",
      "captain": {
        "_id": "captain_id_here",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "captain@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid email or password.
  - **Example**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

### GET /captains/profile

#### Description
This endpoint retrieves the profile of the currently logged-in captain.

#### Request Headers
- `Authorization`: Bearer token required for authentication

#### Responses

- **200 OK**
  - **Description**: Captain profile successfully retrieved.
  - **Example**:
    ```json
    {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "captain@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive",
      "location": {
        "lat": 0,
        "lng": 0
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid or missing authentication token.
  - **Example**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### GET /captains/logout

#### Description
This endpoint logs out the currently authenticated captain.

#### Request Headers
- `Authorization`: Bearer token required for authentication

#### Responses

- **200 OK**
  - **Description**: Captain successfully logged out.
  - **Example**:
    ```json
    {
      "message": "Successfully logged out from Captain"
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid or missing authentication token.
  - **Example**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Notes
- All captain endpoints except registration and login require authentication via Bearer token
- The token is invalidated (blacklisted) upon logout
- Captain status can be either 'active' or 'inactive'
- Location coordinates are optional and default to {lat: 0, lng: 0}
