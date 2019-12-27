import React from 'react';
import styled from 'styled-components'
import Particles from 'react-particles-js';

const ParticlesContainer = styled(Particles)`
	text-align: center;
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #292F4B;
  color: white;
`

function ParticlesCanvas() {
  return (
    <div>
      <ParticlesContainer params={{
					"particles": {
							"number": {
									"value": window.innerWidth * 0.04
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
