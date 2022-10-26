import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';

export default function Watch(props) {
	const ref = useRef();
	const { scene, nodes, materials } = useGLTF('/demo.glb');

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		ref.current.rotation.x = Math.PI / 2;
		ref.current.rotation.y = Math.sin(t / 4) / 8;
		ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
		ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
	});

	return (
		<primitive ref={ref} object={scene} {...props}>
			<Html scale={10}>
	          <div className="annotation">
	            $95 <span style={{ fontSize: '1.5em' }}>🥲</span>
	          </div>
	        </Html>
		</primitive>
	);
}