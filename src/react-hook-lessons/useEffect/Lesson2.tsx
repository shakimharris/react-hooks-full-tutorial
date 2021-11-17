import React, { useState, useEffect } from 'react';

function LessonTwo () {
  const [hasDogImage, setDogImage] = useState<any[]>([])

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
    .then(response => response.json())
    .then(data => setDogImage(data.message));
  }, []);

  return (
      <div className="renderApp">
          {hasDogImage && hasDogImage.map((dog) => <img width={"200px"} height={"300px"} src={dog}></img>)}
      </div>
  )
}

export default LessonTwo;