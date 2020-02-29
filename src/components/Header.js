import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Image, Menu } from 'semantic-ui-react';

class Header extends Component {

	state = {
		activePage: 0
	};

	changeActiveTab = (e) => {
        console.log(e.target.value);
	};

	render() {
		return (
			<div>
				<Menu fixed='top' inverted>
					<Container>
                        <Link to='/' style={{ display: 'flex' }}>
                            <Menu.Item as='' header>
                                <Image size='tiny' src={require(`../assets/livinglaniersunset.jpg`)} style={{ marginRight: '1.5em' }} />
                                Lanier Life Group
                            </Menu.Item>
                        </Link>
						<Link to='/search' style={{ display: 'flex' }}>
							<Menu.Item>Search</Menu.Item>
						</Link>

						<Menu.Menu position='right'>
                            <Link to='/' style={{ display: 'flex' }}>
                                <Menu.Item>Home</Menu.Item>
                            </Link>
                            <Link to='/search' style={{ display: 'flex' }}>
                                <Menu.Item>Search</Menu.Item>
                            </Link>
						</Menu.Menu>
					</Container>
				</Menu>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);