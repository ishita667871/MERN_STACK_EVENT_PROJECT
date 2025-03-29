// import React, { useState } from 'react';
// import axios from "axios"
// const Contact = () => {
//   const [name, setName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Subject, setSubject] = useState("");
//   const [Message, setMessage] = useState("");
  
//   const handleSendMessage =async(e)=>{
//     e.preventDefault();
//     await axios.post(
//       "http://localhost:4000/api/v1/message/send" ,{ 
//       name, Email, Subject , Message}, 
//       {withCredentials:true, headers:{"Content-Type":"application/json"}}
//     ).then(res =>{
//       toast.sucess(res.data.message);
//       setName("");
//       setEmail("");
//       setSubject("");
//       setMessage("");
      
//     }).catch(error=>{
//       toast.error(error.response.data.message);
//     })
//   };
//   return (
//     <div className="contact container">
//       <div className="banner">
//         <div className="item">
//           <h4>Address</h4>
//           <p>Mohali, Chandigarh, India</p>
//         </div>
//         <div className="item">
//           <h4>Call Us</h4>
//           <p>+91-8988123456</p>
//         </div>
//         <div className="item">
//           <h4>Mail Us</h4>
//           <p>ishitachandel71@gmail.com</p>
//         </div>
//       </div>

//       <div className="banner">
//         <div className="item">
//           <iframe
//             title="Mohali Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.717635684289!2d76.69368377439542!3d30.704649986558942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed54e6bba20d%3A0x954a7fbe9984f15f!2sMohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1711567890123"
//             style={{ border: 0, width: '100%', height: '450px' }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//         <div className="item">
//           <form onSubmit={handleSendMessage}>
//             <h2>Contact</h2>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <input
//                 type="Email"
//                 placeholder="Email"
//                 value={Email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 value={Subject}
//                 onChange={(e) => setSubject(e.target.value)}
//               />
//               <textarea
//               rows={10}
//               placeholder="Message"
//               value={Message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//            <button type="submit">Send </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );

// };

// export default Contact;
import React, { useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify"; // Import toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Ensure toast styles are included

//toast.configure(); // Initialize toast notifications

const Contact = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:4000/api/v1/message/send",
      { Name, Email, Subject, Message },
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    )
    .then(res => {
      toast.success(res.data.message);
      window.alert("Message sent successfully! "); // Popup alert
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    })
    .catch(error => {
      toast.error(error.response?.data?.message || "Something went wrong! ");
      window.alert("Error: " + (error.response?.data?.message || "Message sending failed! ")); // Popup alert
    });
  };

  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>Mohali, Chandigarh, India</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>+91-8988123456</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>ishitachandel71@gmail.com</p>
        </div>
      </div>

      <div className="banner">
        <div className="item">
          <iframe
            title="Mohali Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.717635684289!2d76.69368377439542!3d30.704649986558942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed54e6bba20d%3A0x954a7fbe9984f15f!2sMohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1711567890123"
            style={{ border: 0, width: '100%', height: '450px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>Contact</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              rows={10}
              placeholder="Message"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
