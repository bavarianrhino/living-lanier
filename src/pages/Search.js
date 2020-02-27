import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Header, Image } from 'semantic-ui-react';

class Search extends Component {

	render() {
		return (
            <div>
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1'>Semantic UI React Fixed Template</Header>
                    <p>This is a basic fixed menu template using fixed size containers.</p>
                    <p>A text container is used for the main container, which is useful for single column layouts.</p>

                    <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        attr: state.attr
    }
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);