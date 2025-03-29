import React from "react"

const Services = () => {
 
    const services =[
    {
      id: 1,
      url: "/Birthday.jpeg",
      title:"Birthday Planning",
    },
    {
      id: 2,
      url: "/aniversary.jpeg",
      title:"Aniversary Planning ",
    },
    {
      id: 3,
      url: "/camping.jpeg",
      title:"Camping Trip Planning",
    },
    {
      id: 4,
      url: "/gamenight.jpeg",
      title:"Gamenight Fun ",
    },
    {
      id: 5,
      url: "party.jpeg",
      title:"Party Planning",
    },
    {
      id: 6,
      url: "/Wedding.jpeg",
      title:" Wedding Planning",
    },
    ]
    return <>
    <div className="services container"> 
      <h2> OUR SERVICES </h2>
      <div className="banner">
        {
          services.map(element=>{
          return(
         <div className="item" key={element.id}>
          <h3>{element.title}</h3>
          <img src={element.url} alt={element.title}/>
          </div>
          )
          })
        }
      </div>
    </div>;
    </>
};

export default Services