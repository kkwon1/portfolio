import React from 'react';
import styled from 'styled-components'
import Particles from 'react-particles-js';

const ParticlesContainer = styled(Particles)`
	text-align: center;
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`

function ParticlesCanvas() {
  return (
    <div>
      <ParticlesContainer params={{
					"particles": {
							"number": {
									"value": 85
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
