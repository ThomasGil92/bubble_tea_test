import iro from "@jaames/iro";
import { useState, useEffect } from "react";
import { setCupColor, setTeaColor, setTapiocaColor,setGlobalSize,setTeaName } from "../redux/actions";
import { useDispatch } from "react-redux";
const Menu = () => {
  const dispatch = useDispatch();
  const [cupBg, setCupBg] = useState("#FE8261");
  const [teaBg, setTeaBg] = useState("#FE8261");
  const [tapiocaBg, setTapiocaBg] = useState("#404162");

  const [cupBgButton, setCupBgButton] = useState(false);
  const [teaBgButton, setTeaBgButton] = useState(false);
  const [tapiocaBgButton, setTapiocaBgButton] = useState(false);

  useEffect(() => {
    var cupColorPicker = new iro.ColorPicker("#cupPicker", {
      width: 150,
      color: "#FE8261",
    });
    var teaColorPicker = new iro.ColorPicker("#teaPicker", {
      width: 150,
      color: "#FE8261",
    });
    var tapiocaColorPicker = new iro.ColorPicker("#tapiocaPicker", {
      width: 150,
      color: "#FE8261",
    });
    cupColorPicker.on("color:change", cupColorChangeCallback);
    cupColorPicker.on("input:end", cupColorExitCallback);
    teaColorPicker.on("color:change", teaColorChangeCallback);
    teaColorPicker.on("input:end", teaColorExitCallback);
    tapiocaColorPicker.on("color:change", tapiocaColorChangeCallback);
    tapiocaColorPicker.on("input:end", tapiocaColorExitCallback);
  }, []);

  const cupColorChangeCallback = (color) => {
    setCupBg(color.hexString);
    dispatch(setCupColor(color.hexString));
  };
  const cupColorExitCallback = () => {
    setCupBgButton(false);
  };

  const teaColorChangeCallback = (color) => {
    setTeaBg(color.hexString);
    dispatch(setTeaColor(color.hexString));
  };
  const teaColorExitCallback = () => {
    setTeaBgButton(false);
  };

  const tapiocaColorChangeCallback = (color) => {
    setTapiocaBg(color.hexString);
    dispatch(setTapiocaColor(color.hexString));
  };
  const tapiocaColorExitCallback = () => {
    setTapiocaBgButton(false);
  };

  const handleSizeChange = (e) => {
    dispatch(setGlobalSize(e.target.value))
  };
 
  const handleTeaNameChange = (e) => {
    dispatch(setTeaName(e.target.value))
  };

  return (
    <div className="mx-auto text-center text-white p-1">
      <h2>Bubble Tea Generator</h2>
      <div className="w-100 mt-5">
      <div className="d-flex justify-space-between mt-2">
        <label>Nom</label>
        <input id="tName" className="rounded border-0 ml-auto text-center" style={{width:"70%"}} type="text" onChange={handleTeaNameChange} defaultValue="Bubble Tea"/>
      </div>
        <div className="d-flex justify-space-between mt-2">
          <label>Gobelet</label>
          <button
            onClick={() => {
              setCupBgButton(!cupBgButton);
            }}
            type="button"
            className="btn ml-auto"
            style={{ backgroundColor: `${cupBg}` }}
          ></button>
          <div>
            <div
              id="cupPicker"
              className={
                cupBgButton === true
                  ? "d-block mx-auto position-absolute"
                  : "d-none mx-auto position-absolute"
              }
              style={{ left: "50%", transform: "translateX(-50%)",zIndex:"4000" }}
            ></div>
          </div>
        </div>
        <div className="d-flex justify-space-between mt-2">
          <label>Tea</label>
          <button
            onClick={() => {
              setTeaBgButton(!teaBgButton);
            }}
            type="button"
            className="btn ml-auto"
            style={{ backgroundColor: `${teaBg}` }}
          ></button>
          <div>
            <div
              id="teaPicker"
              className={
                teaBgButton === true
                  ? "d-block mx-auto position-absolute"
                  : "d-none mx-auto position-absolute"
              }
              style={{ left: "50%", transform: "translateX(-50%)",zIndex:"4000" }}
            ></div>
          </div>
        </div>
        <div className="d-flex justify-space-between mt-2">
          <label>Tapioca</label>
          <button
            onClick={() => {
              setTapiocaBgButton(!tapiocaBgButton);
            }}
            type="button"
            className="btn ml-auto"
            style={{ backgroundColor: `${tapiocaBg}` }}
          ></button>
          <div>
            <div
              id="tapiocaPicker"
              className={
                tapiocaBgButton === true
                  ? "d-block mx-auto position-absolute"
                  : "d-none mx-auto position-absolute"
              }
              style={{ left: "50%", transform: "translateX(-50%)",zIndex:"4000" }}
            ></div>
          </div>
        </div>
        <div className="d-flex justify-space-between mt-2">
          <label>Taille</label>
          <div className="ml-auto slidecontainer">
            <input
              type="range"
              min="200"
              max="350"
              defaultValue="350"
              className="slider"
              id="myRange"
              onChange={handleSizeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
