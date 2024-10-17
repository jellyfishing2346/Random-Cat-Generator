Random Cat Image Generator
This React application fetches and displays random cat images along with breed information from an external API. Users can view cat images, see breed details, and manage a ban list to filter out specific breeds.
Features
Core Features

    Random Cat Fetching: Clicking a button triggers an API call to fetch a random cat image and its associated breed information.
    Image Display: Each API call displays at least one image of the cat.
    Breed Information: The app shows at least three attributes about the cat breed (e.g., name, description, weight, lifespan).
    Single View: Only one cat/API call result is viewable at a time.
    Ban List: Users can add displayed breed attributes to a ban list, preventing future display of cats with those attributes.

Stretch Features

    Multiple Attribute Banning: The ban list can include multiple types of attributes (e.g., breed, origin country, weight range).
    Viewing History: Users can see a stored history of their previously viewed cats from the current session.

Technical Implementation

    API Integration: Uses async/await for API calls to fetch cat data.
    State Management: Utilizes React state to manage the current cat data, ban list, and viewing history.
    Query Parameter Handling: Implements functionality to add and edit query parameters for API calls, allowing for more specific data retrieval.
    JSON Parsing: Parses JSON data from the cat API, extracting relevant information for display.

How to Use

    Click the "Fetch Random Cat" button to display a new cat image and its breed information.
    View the cat's image and read about its breed characteristics.
    To ban a specific attribute (e.g., breed), click on the attribute value. This will add it to the ban list.
    Cats with banned attributes will not be displayed in future fetches.
    (If implemented) View your cat browsing history from the current session.

API Used
This project uses The Cat API to fetch random cat images and breed information.
Setup and Installation
[Include instructions on how to set up and run the project locally]
Technologies Used

    React
    JavaScript (ES6+)
    CSS
    [Any additional libraries or tools used]


    Link: https://www.loom.com/share/775517a2eb994ffcba6224b8144e3d1c?sid=1a590023-2340-4d9a-977e-3a29a665b8dd

Copyright [2024] [Faizan Khan]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
