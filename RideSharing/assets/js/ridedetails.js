
fetch("http://localhost:8080/rideCall/ridedetails")

  // Converting received data to JSON
  .then(response => response.json())
  .then(json => {

    // Create a variable to store HTML
    let li = `<thead>
    <tr>
    <th>Ride Id</th>
    <th>Source</th>
    <th>Destination</th>
    <th>Rating</th>
    <th>Date</th>
    <th>Time<th>

    </tr>
    </thead>
    <tbody>
`;

    // Loop through each data and add a table row
    json.forEach(user => {
      li += `<tr>
        <td>${user.rid} </td>
        <td>${user.source}</td>
        <td>${user.destination}</td>
        <td>${user.riderate}</td>
        <td>${user.date}</td>
        <td>${user.time}</td>
        <td><button type="button"  class="btn btn-primary"  data-toggle="modal" data-target="#addModal"  id="Subscribe">Subscribe Ride</button></td>

      </tr>
      </tbody>`;
    });

  // Display result
  document.getElementById("subridedata").innerHTML = li;
});
