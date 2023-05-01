import React from "react";

const App = () => {
  return <div>App</div>;
};

export default App;

// import { extend, useFrame, useThree } from "@react-three/fiber";
// import React, { useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// extend({ OrbitControls });

// const Experience = () => {
//   const { camera, gl } = useThree();
//   const cubeRef = useRef();
//   const groupRef = useRef();

//   useFrame((state, delta) => {
//     cubeRef.current.rotation.y += delta;
//     groupRef.current.rotation.y += delta;
//   });

//   return (
//     <>
//       <orbitControls args={[camera, gl.domElement]} />
//       <directionalLight />
//       <ambientLight />
//       <group ref={groupRef}>
//         <mesh position-x={-2}>
//           <sphereGeometry />
//           <meshStandardMaterial color="orange" wireframe />
//         </mesh>

//         <mesh
//           ref={cubeRef}
//           rotation-y={Math.PI * 0.25}
//           position-x={2}
//           scale={1.5}
//         >
//           <boxGeometry scale={1.5} />
//           <meshStandardMaterial color="mediumPurple" />
//         </mesh>
//       </group>

//       <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
//         <planeGeometry />
//         <meshStandardMaterial color="greenyellow" />
//       </mesh>
//     </>
//   );
//   // npm install @react-three/drei@9.32
// };

// export default Experience;
