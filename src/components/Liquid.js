const Liquid = ({color,height}) => {
  return (
    <svg
      style={{ maxHeight:`${height}px`, position: "absolute", left: "0" }}
      version="1.1"
      id="shop" /* 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" */
      x="0px"
      y="0px"
      viewBox="0 0 133.2 188.9"
      enableBackground="new 0 0 133.2 188.9"
      /* xml:space="preserve" */
    >
      <g id="tea">
        <path
          opacity="0.30"
          fill={color}
          d="M109.1,71.7l-8.9,81.9c-1.4,13-12.3,22.9-25.4,22.9l-2.3,0
			l-14.8,0c-0.8,0-1.5,0-2.2-0.1h0c-12-1.1-21.7-10.6-23-22.8l-8.6-82c3.8,1.4,7.6,2.7,11.3,3.7c1.7,0.5,3.4,0.9,5.1,1.3h0
			c2.1,0.5,4.3,0.9,6.4,1.3l0,0c1.9,0.3,3.7,0.6,5.6,0.8c2.5,0.3,5,0.5,7.5,0.6c8,0.4,16.1,0,24.3-1.3
			C92.5,76.8,100.8,74.7,109.1,71.7z"
        />
        <path
          fill={color}
          d="M28.9,119.1l3.6,34.5c1.4,13,12.3,22.9,25.3,22.9l17.1,0c13,0,24-9.8,25.4-22.9l6.2-57.2
			C79.6,85,61.3,112.6,28.9,119.1z"
        />
      </g>
      
    </svg>
  );
};
export default Liquid;
