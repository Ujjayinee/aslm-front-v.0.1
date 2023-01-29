import { useState, useEffect } from "react";

import axios from "axios";

import { Container } from "@mui/system";

function NewsFeed() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8003/allnews").then((response) => {
      // console.log(response);

      setNewsData(response.data);

      console.log("data", newsData);

      for (var i = 0; i < response.data.length; i++) {}
    });
  }, []);

  const [message, setMessage] = useState("");

  // e.preventDefault();

//   const handleSubmit = (e) => {
//     let commentData = { message };

//     console.log("comment data: ", commentData);

//     axios
//       .post("http://localhost:8082/employee/comment/add", commentData)
//       .then((response) => {
//         console.log(response.data);

//         // alert("News Added");
//       });
//   };

  return (
    <div>
      <Container>
        <br />
        <center>
          <h1>News Feed</h1>
        </center>
        <hr />
      </Container>
      <br />

      {newsData.map((ele) => {
        // console.log("ele:", ele.title);
        console.log("id",ele.newsId);
        function myFunction() {
          sessionStorage.setItem("newsId", ele.newsId);
          window.location.assign("/add-comment")
        }
        return (
          <div>
            <Container>
              <div class="card shadow-lg bg-body">
                <h5 class="card-header bg-success bg-gradient  text-light">{ele.newsName}</h5>

                <div class="card-body bg-light  Stext-light bg-gradient">
                  <h5 class="card-title">{ele.content}</h5>

                  <p class="card-text">Date: {ele.dateTime}</p>

                  

                  <a class="btn btn-success bg-gradient" onClick={myFunction} role="button">Comment</a>
                </div>
              </div>
              <br />
            </Container>
          </div>
        );
      })}
    </div>
  );
}

export default NewsFeed;
