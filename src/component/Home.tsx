import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Image = {
    height: '500px',
    width: '500px'
}

function Home() {

    return (<Container >
        <StaticImage
            style={Image}
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
    </Container>)
}

export default Home;