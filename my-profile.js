 // Create an unordered list for your details
function createItemList(items) {
    const container = document.createElement("div");
    const ul = document.createElement("ul");

    items.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        ul.appendChild(listItem);
    });
    container.appendChild(ul);

    return container;
}

const addNameAndDetails = () => {
    // Create an h1 element for your name
    const addName = document.createElement("h1");
    addName.id = "fullName";
    addName.textContent = "Alok Suman";

    // call a function to add details
    const items = [
        'Age: 27',
        'Location: Bangalore, India',
        'Occupation: Web Developer',
        'Hobbies: Reading, Travelling'
    ]
    const itemList = createItemList(items);

    // Get the body element and append the name and details
    document.body.appendChild(addName);
    document.body.appendChild(itemList);

    // Adding class name "name" to the h1 element
    const nameElement = document.getElementById("fullName");
    nameElement.setAttribute("class", "name");

    // Adding class name "my-details" to the ul element
    const detailsList = document.querySelector("div>ul")
    detailsList.setAttribute("class", "my-details");

    // Adding class name "detail" to the li element
    const lists = document.querySelectorAll("div>ul>li");
    for (const list of lists) {
        list.setAttribute("class", "detail");
    }

    // to access location from items array

    let location = ''; // Initialize an empty string to store the location

    // Iterate through the items array to find the "Location" key
    for (const item of items) {
    const keyValue = item.split(':'); // Split the string into key and value
    const key = keyValue[0].trim(); // Remove leading/trailing spaces from the key
    const value = keyValue[1].trim(); // Remove leading/trailing spaces from the value

    // Check if the key is "Location" (case-insensitive)
        if (key.toLowerCase() === 'location') {
            location = value; // Assign the value to the location variable
            break; // Exit the loop since we found the location
        }
    }

    //Create new element and it to body
    const newElem = document.createElement("li");
    const addClock = document.querySelector("ul");
    addClock.appendChild(newElem);

    let currentTime =  () => {
        let currentDate = new Date();
        let datetime =
          "Time: " +
          currentDate.getDate() +
          "/" +
          (currentDate.getMonth() + 1) +
          "@" +
          currentDate.getHours() +
          ":" +
          currentDate.getMinutes() +
          ":" +
          currentDate.getSeconds();
        newElem.textContent = `I live in ${location} and it's currently ${datetime} here.`;
    };
    currentTime()
    setInterval(currentTime, 1000);

    const anotherElem = document.createElement("div");
    anotherElem.setAttribute("class","div2")
    document.body.appendChild(anotherElem);

    const elem1 = document.createElement("p");
    elem1.setAttribute("id","countDown");

    elem1.classList.add("count")
    elem1.classList.remove("count");

    document.body.appendChild(elem1);

    const countDownDate = new Date("Jun 20, 2024 00:00:01").getTime();
    const birthDay = setInterval(function () {
        const now = new Date().getTime();
        const distance =countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / (1000));

        // Display the result in the element with id="countDown"
        document.getElementById("countDown").innerHTML = "Time Remains for my BirthDay " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(birthDay);
            document.getElementById("countDown").innerHTML = "EXPIRED";
        }

    }, 1000);

}

window.onload = addNameAndDetails;
