import React from 'react'

function TechBox({theme}) {
    return (
        <div className={`${theme ? "techBox sky" : "techBox"}`}>
        <h1 className="techText" data-aos="fade-right">Technologies & Skills</h1>
        <p data-aos="fade-right">Mongo Db</p>
        <p data-aos="fade-left">Node Js</p>
        <p data-aos="fade-right">React Js</p>
        <p data-aos="fade-left">Django</p>
        </div>
    )
}

export default TechBox
