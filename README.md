# TTT_Assignment
Note: **"This Source code isn't having Node Module dependencies because, it's a vast file and coudn't able to upload on Git repository".So, prior to the compilation of index.js file ensure that all the dependencies are downloaded. Post to that the code will compile fine.**

**This project shows the frequency of the most occurred word from a URL link and also plot a histogram of the most occurred words with frequency count in Y-Axis and words name in X-Axis.**

**Project Description:**
1. Libraries and Plugins used in this project:
   i. **React**: A JavaScript library for building user interfaces.

   ii. **PapaParse**: A CSV parsing and encoding library for JavaScript.

   iii. **react-icons/fa**: A collection of React components for popular Font Awesome icons.

   iv. **Recharts**: A charting library for React that allows you to create responsive and customizable charts.

   These libraries and plugins are imported and used in the code to handle various tasks such as **fetching data**, **parsing CSV**, **rendering icons**, and        **creating bar charts**.

2. The component defines two states using the **useState hook**: data and hide. data will store the **word frequency data**, and **hide** will control the      visibility of certain elements.

3. The **fetchFileData** function is an asynchronous function that is triggered when the user clicks the "Submit" button. It fetches data from a specified URL and performs word frequency analysis on the fetched text. The top 20 words with the highest frequency are stored in the data state.

4. The **handleExport** function is called when the user clicks the "Export" button. It converts the data into CSV format using the **PapaParse library**, **creates a downloadable CSV file from the data, and initiates the file download.**

5. The render function returns **JS code** that represents the component's UI.

6. When hide is false, a welcome message and an instruction are displayed to the user.

7. When the "Submit" button is clicked, the **fetchFileData function** is called, which fetches data and performs word frequency analysis.

8. When the data state has elements, a histogram bar chart is displayed using the **Recharts library**. The data is passed to the **BarChart component**, which visualizes the word frequency data.

9. The "Export" button allows the user to download the word frequency data as a **CSV file**.

10. **Social media links** with icons are displayed at the bottom of the component.

11. The component is exported as the **default export**.

Overall, this code **fetches text data, analyzes word frequencies, and displays the results in a bar chart**. It also provides an option to **export the data as a CSV file** and includes the data of histogram into rows and names with headings of name and count.
