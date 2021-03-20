import {useSelector} from 'react-redux'

const Tapioca = () => {
    const tapiocaDisplay = useSelector((state) => {
        return state.tapiocaDisplay;
      });
    const tapiocaColor = useSelector((state) => {
        return state.tapiocaColor;
      });
      
    return (
      <svg
      style={{maxHeight:`50px`}}
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
        <g id="bubble">
          <path
            fill={tapiocaDisplay?tapiocaColor:"#878f95"}
            d="M95.9,144.5c-0.7,2.3-3.2,3.6-5.4,2.8c-2.3-0.7-3.5-3.2-2.8-5.5c0.7-2.3,3.2-3.6,5.4-2.8
              C95.4,139.7,96.6,142.2,95.9,144.5z"
          />
          <path
            fill={tapiocaDisplay?tapiocaColor:"#878f95"}
            d="M80.1,127.4c-0.8,2.6-3.5,4-6.1,3.2c-2.6-0.8-4-3.6-3.2-6.1c0.8-2.6,3.5-4,6.1-3.2
              C79.5,122,80.9,124.8,80.1,127.4z"
          />
          <path
            fill={tapiocaDisplay?tapiocaColor:"#878f95"}
            d="M47.8,137.6c-0.8,2.5-3.5,3.9-6,3.1c-2.5-0.8-3.9-3.5-3.1-6.1c0.8-2.5,3.5-3.9,6-3.1
              C47.2,132.4,48.6,135.1,47.8,137.6z"
          />
          <path
            fill={tapiocaDisplay?tapiocaColor:"#878f95"}
            d="M65.6,140.6c-0.6,1.8-2.4,2.7-4.2,2.2c-1.7-0.6-2.7-2.4-2.2-4.2c0.6-1.8,2.4-2.7,4.2-2.2
              C65.2,136.9,66.2,138.8,65.6,140.6z"
          />
          <path
            fill={tapiocaDisplay?tapiocaColor:"#878f95"}
            d="M56.2,162.6c-0.7,2.2-3,3.4-5.2,2.7c-2.2-0.7-3.4-3-2.7-5.2c0.7-2.2,3-3.4,5.2-2.7
              C55.7,158.1,56.9,160.4,56.2,162.6z"
          />
          <path
            fill={tapiocaDisplay?tapiocaColor:"#878f95"}
            d="M48.9,116.3c-0.7,2.2-3,3.4-5.1,2.7c-2.1-0.7-3.3-3-2.7-5.2c0.7-2.2,3-3.4,5.1-2.7
              C48.4,111.8,49.6,114.1,48.9,116.3z"
          />
          <path
            fill={tapiocaDisplay?tapiocaColor:"#878f95"}
            d="M82.8,161.8c-0.9,2.7-3.8,4.3-6.5,3.4c-2.7-0.9-4.2-3.8-3.4-6.5c0.9-2.7,3.8-4.3,6.5-3.4
              C82.1,156.1,83.6,159,82.8,161.8z"
          />
        </g>
      </svg>
    );
  };
  export default Tapioca;
  