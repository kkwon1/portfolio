import React from 'react';
import styled from 'styled-components'
import Particles from 'react-particles-js';

const ParticlesContainer = styled(Particles)`
	text-align: center;
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #252A42;
  min-height: 100vh;
  color: white;
`

function ParticlesCanvas() {
  return (
    <div>
      <ParticlesContainer params={{
					"particles": {
							"number": {
									"value": 65
							},
							"size": {
									"value": 2
							}
					},
					"interactivity": {
							"events": {
									"onhover": {
											"enable": false,
											"mode": "repulse"
									}
							}
					}
				}}
			>
			</ParticlesContainer>
    </div>
  );
}

export default ParticlesCanvas;
