import { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name}:`, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email ) {
      alert("Please fill out all fields.");
      return;
    } else {
      setFormData({
        name: "",
        email: "",
        // feedback: "",
      });

      alert("Submitted");
      console.log("Simulated Submission for", formData);
    }
  };

  return (
    <div className = "feedbackForm">
      <h1 className = "feedbackTitle">Provide Feedback</h1>
      <br></br>
      <p>We value your feedback! Please let us know what we can do better, or changes you would like to see. And please consider signing up for our newsletter!</p>
      <br></br>
      <p><i>Fields with an * asterisk are required</i></p>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          * Name:
          <input
            type="text"
            name="name"
            id="nameField"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br></br>
        <label>
          * Email:
          <input
            type="email"
            name="email"
            id="emailField"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br></br>
        <label id="feedbackField">
          Feedback:
          <textarea
            name="feedback"
            placeholder="Leave blank and check below if you just want our newsletter!"
            value={formData.feedback}
            onChange={handleChange}
          />
          </label>
          <br />
          <br></br>
          <label id="newsletterSignUp"><input type="checkbox"></input>Sign me up for your newsletter!</label>
          <br></br>
          <br></br>
          <button type="submit" id="submitButton">Submit</button>


      </form>
    </div>
  );
}

export default FeedbackForm;