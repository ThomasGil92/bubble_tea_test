import "./App.css";
import Cup from "./components/Cup";
import MinCup from './components/tea-components/MinCup'
import MinLiquid from './components/tea-components/MinLiquid'
import MinTapioca from './components/tea-components/MinTapioca'
import Liquid from "./components/Liquid";
import Tapioca from "./components/Tapioca";
import Menu from "./components/Menu";
import { useDispatch, useSelector } from "react-redux";
import {
  setCupOff,
  setCupOn,
  setTeaOff,
  setTeaOn,
  setTapiocaOff,
  setTapiocaOn,
} from "./redux/actions";
function App() {
  const globalSize = useSelector((state) => {
    return state.globalSize;
  });
  const cupDisplay = useSelector((state) => {
    return state.cupDisplay;
  });
  const cupColor = useSelector((state) => {
    return state.cupColor;
  });
  const teaDisplay = useSelector((state) => {
    return state.teaDisplay;
  });
  const teaColor = useSelector((state) => {
    return state.teaColor;
  });
  const tapiocaDisplay = useSelector((state) => {
    return state.tapiocaDisplay;
  });
  const tapiocaColor = useSelector((state) => {
    return state.tapiocaColor;
  });
  const teaName = useSelector((state) => {
    return state.teaName;
  });
  const dispatch = useDispatch();

  const handleCupClick = (e) => {
    e.preventDefault();
    if (cupDisplay) {
      dispatch(setCupOff());
    } else {
      dispatch(setCupOn());
    }
  };
  const handleTeaClick = (e) => {
    e.preventDefault();
    if (teaDisplay) {
      dispatch(setTeaOff());
    } else {
      dispatch(setTeaOn());
    }
  };
  const handleTapiocaClick = (e) => {
    e.preventDefault();
    if (tapiocaDisplay) {
      dispatch(setTapiocaOff());
    } else {
      dispatch(setTapiocaOn());
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-10">
          <div className="col-12 py-5 h-100 text-center position-relative">
            {cupDisplay && <Cup height={globalSize} color={cupColor} />}
            {teaDisplay && <Liquid height={globalSize} color={teaColor} />}
            {tapiocaDisplay && (
              <Tapioca height={globalSize} color={tapiocaColor} />
            )}
            <div
              className="text-center"
              style={{
                position: "absolute",
                bottom: "170px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <h1>{teaName.toUpperCase()}</h1>
              
            </div>
          </div>

          <div
            className="row position-absolute text-center w-100"
            style={{ bottom: 0,borderTop:"5px solid #ABABBA" }}
          >
            <div className="col-4 py-4" onClick={handleTeaClick}  style={{cursor:"pointer" ,borderRight:"5px solid #ABABBA"}}>
            <MinLiquid/>
            </div>
            <div className="col-4 py-4" onClick={handleCupClick} style={{cursor:"pointer" ,borderRight:"5px solid #ABABBA"}}>
              <MinCup/>
            </div>
            <div className="col-4 py-4" onClick={handleTapiocaClick} style={{cursor:"pointer"}}>
              <MinTapioca/>
            </div>
          </div>
        </div>
        <div className="col-2 h-auto" style={{backgroundColor:"#ABABBA"}}>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
