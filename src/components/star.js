import React from 'react'

class Star extends React.Component {

render() {
    const assests= [];
    const generateStars = (starNumber = 500) => {
  
      const getStarInfo = () => ({
        x: getRandom(0, 100),
        y: getRandom(0, 100),
        opacity: getRandom(0.3, 1),
        size: getRandom(0.3, 2),
        delay: getRandom(0.3, 10)
      })
      
      // let html = "";
      for (let i = 0; i < starNumber; i++) {   
        const { x, y, opacity, size, delay } = getStarInfo()
       const xx = x;
       const yy = y;
       const oopacity = opacity;
       const ssize = size;
       const ddelay = delay;

        // const style = `left: ${x}%, top: ${y}%, opacity: ${opacity}, transform: ${size}, animationDelay: ${delay}s`;
      const style = {"--x": xx, "--y": yy, "--opacity": oopacity, "--size": ssize, "--delay": ddelay+"s"}
        //  const styl = style.substring(0,style.length-1)
      // console.log(xx)

        assests.push(style);
      }
    //  console.log(assests)
    };
    
    const getRandom = (min = 0, max = 100, roundResult = false) => {
      const result = Math.random() * (max - min) + min;
      return roundResult ? Math.round(result) : result;
    };
    
    generateStars(500);
// const names = [1,2,3,4]
    // console.log(assests)
    return (
        assests.map((assest, index)=>{
          // const asset = assest.toString().replace("`", "")s
           return <div key={index} className="star" style={assest}></div>
           
        })
        // <div className="star">hello</div>
    )
}
}

export default Star
