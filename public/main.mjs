document.querySelector("#commentPost")
            .addEventListener("submit", async (event) => {
                event.preventDefault();

                let nameInput = document.querySelector("#user").value;
                let commentInput = document.querySelector("#comment").value;

                try {
                    const axiosResponse = await axios.post(`/comment/${nameInput}`, {
                        comment: commentInput
                    })
                    console.log(axiosResponse.data);
                    document.querySelector("#preComment").innerHTML +=
                        `<div class="comment">
                        <h3 class="commentName">${nameInput}:</h3>
                        <p class="commentText">${commentInput}</p>
                    </div>`

                } catch (error) {
                    // handle error
                    console.log(error.data);
                    document.querySelector("#preCommnet").innerHTML = "error in getting weather data"
                }
            })
        const getAllComments = async () => {
            const axiosResponse = await axios.get("/comments");
            console.log(axiosResponse.data); // []

            axiosResponse.data.map((eachComment) => {
                document.querySelector("#preComment").innerHTML +=
                    `<div class="comment">
                        <h3 class="commentName">${eachComment.name}:</h3>
                        <p class="commentText">${eachComment.comment}</p>
                    </div>`
            })
        }
        setTimeout(() => {
            getAllComments();
        }, 0)