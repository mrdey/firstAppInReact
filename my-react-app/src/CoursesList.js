import React from 'react'
const Courcesist=(props)=>{
     return  props.courses.map(course=>{
      return (
      <div key={course.id}>
        <span>
          <a href={course.url}><h4>{course.title}</h4></a>
        </span>
        <span>by <strong>{course.author}</strong></span>
        <span>video hours:{course.hours_video}</span>
        <span>|Number of Lectures:{course.number_of_lectures}</span>
        <br></br>
      </div>
      )
    })
  }

  export default Courcesist;