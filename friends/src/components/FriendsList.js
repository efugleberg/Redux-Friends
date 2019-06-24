import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { getData } from '../actions'

class FriendList extends React.Component {
    componentDidMount() {
        this.props.getData();
    }



render() {
    return (
        <div>
        {this.props.fetchingData && (
            <div className="key spinner">
              <Loader type="Puff" color="#204963" height="60" width="60" />
              <p>Loading Data</p>
            </div>
          )}
          <div>
          {this.props.friends.map(friend => (
              <div key={friend.id}>
                  <h3>{friend.name}</h3>
                  <h3>{friend.age}</h3>
                  <h3>{friend.email}</h3>
                  </div>
          ))}
          </div>
          </div>

    )
}
}

const mapStateToProps = ({ error, friends, fetchingData }) => ({
    error,
    friends,
    fetchingData
});

export default withRouter(
    connect(
        mapStateToProps,
        { getData }
    )(FriendList)
)