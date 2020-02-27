import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Header, Button, Icon } from 'semantic-ui-react';

class Home extends Component {

	render() {
		return (
			<div>
                <Container text>
                <Header
                as='h1'
                content='Imagine-a-Company'
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em'
                }}
                />
                <Header
                as='h2'
                content='Do whatever you want when you want to.'
                inverted
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em'
                }}
                />
                    <Button primary size='huge'>
                    Get Started
                    <Icon name='right arrow' />
                    </Button>
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
    
    export default connect(mapStateToProps, mapDispatchToProps)(Home);