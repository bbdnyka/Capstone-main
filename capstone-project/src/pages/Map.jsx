import { useState } from "react";
import { Cartesian3, Color } from "cesium";
import { Viewer, BillboardCollection, Billboard } from "resium";
import Modal from "./Modal";
import logopng from "../assets/logo.png";
import airfield from "../milsymbols/airfield.png";
import broadcast from "../milsymbols/broadcast.png";
import civil_affairs from "../milsymbols/civil_affairs.png";
import command_and_control from "../milsymbols/command_and_control.png";
import information_ops from "../milsymbols/information_ops.png";
import planned from "../milsymbols/planned.png";
import present from "../milsymbols/present.png";


const Map = () => {
 const [billboards, setBillboards] = useState([]);
 const [selectedBillboard, setSelectedBillboard] = useState(null);

 const addBillboard = (selectedSymbol) => {
   let imageSrc;
   switch (selectedSymbol){
     case 'symbol1':
       imageSrc = airfield;
       break;
     case 'symbol2':
       imageSrc = broadcast;
       break;
     case 'symbol3':
       imageSrc = civil_affairs;
       break;
     case 'symbol4':
       imageSrc = command_and_control;
       break;
     case 'symbol5':
       imageSrc = information_ops;
       break;
     case 'symbol6':
       imageSrc = planned;
       break;
     case 'symbol7':
       imageSrc = present;
       break;
     default:
       imageSrc = logopng;
   }

   const fixedPosition = Cartesian3.fromDegrees(0, 0); 

   // Create new billboard every time the function is called
   const newBillboard = {
     id: `billboard-${Date.now()}`,  // Unique ID using the current timestamp
     position: fixedPosition,
     color: Color.AQUA,
     image: imageSrc,
     symbol: selectedSymbol,
   };
 
   setBillboards([...billboards, newBillboard]);
 };
 

 const updateBillboardPosition = (newPosition) => {
   const updatedBillboards = billboards.map((billboard) => {
     if (billboard.id === selectedBillboard.id) {
       return { ...billboard, position: newPosition };
     }
     return billboard;
   });
   setBillboards(updatedBillboards);
   setSelectedBillboard(null);
 };

 const handleBillboardClick = (billboard) => {
   setSelectedBillboard(billboard);
 };

 return (
   <>
     <div>
       <button onClick={() => addBillboard('symbol1')}>Add Airfield</button>
       <button onClick={() => addBillboard('symbol2')}>Add Broadcast</button>
       <button onClick={() => addBillboard('symbol3')}>Add Civil Affairs</button>
       <button onClick={() => addBillboard('symbol4')}>Add Command and Control</button>
       <button onClick={() => addBillboard('symbol5')}>Add Information Ops</button>
       <button onClick={() => addBillboard('symbol6')}>Add Planned</button>
       <button onClick={() => addBillboard('symbol7')}>Add Present</button>
       {/* Continue adding buttons for each symbol if there are more */}
     </div>
     <Viewer style={{ height: "600px", width: "900px" }} timeline={false}>
       <BillboardCollection>
         {billboards.map((billboard) => (
           <Billboard
             key={billboard.id}
             position={billboard.position}
             color={billboard.color}
             image={billboard.image}
             scale={0.2}
             onClick={() => handleBillboardClick(billboard)}
           />
         ))}
       </BillboardCollection>
     </Viewer>
     {selectedBillboard && (
       <Modal
         position={selectedBillboard.position}
         symbol={selectedBillboard.symbol}
         onClose={() => setSelectedBillboard(null)}
         onUpdatePosition={updateBillboardPosition}
         addBillboard={addBillboard}
       />
     )}
   </>
 );  
};

export default Map;


