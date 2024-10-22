# Web Development Project 5 - Brewery Data Dashboard

Submitted by: **Xin Zheng**

This web app: **Brewery Data Dashboard** allows users to explore information about breweries across the United States, fetched from the Open Brewery API. The dashboard displays summary statistics and a searchable, filterable list of breweries to help users find detailed information about various brewery types.

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The list displays a list of data fetched using an API call**
- [X] **Data uses the useEffect React hook and async/await syntax**
- [X] **The app dashboard includes at least three summary statistics about the data such as:**
  - [X] Total Breweries: Displays the total number of breweries in the dataset.
  - [X] Micro Breweries: Shows the number of microbreweries.
  - [X] Regional Breweries: Indicates how many breweries are classified as regional.
- [X] **A search bar allows the user to search for an item in the fetched data**
- [X] **Multiple different filters (2+) allow the user to filter items in the database by specified categories** (Filters by brewery type: "All", "Micro", "Regional", "Brewpub")

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [ ] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='C:\Users\xlz10\Desktop\codepath\Web102\Unit-Projects\Project5_Data_Dashboard_Part 1\Dashboard.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Some challenges encountered during development:
- Initially faced issues with the API call due to the missing `axios` dependency, which was resolved by installing `axios`.
- Implementing dynamic filters based on brewery type required careful handling of state with React hooks.

## License

    Copyright [2024] Xin Zheng

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
