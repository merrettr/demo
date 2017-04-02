import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import countBy from 'lodash/countBy';
import range from 'lodash/range';
import { getUsers } from '../modules/users';
import ObjectTable from '../components/ObjectTable';

const calculateNameCounts = users => {
  const letters = range('A'.charCodeAt(0), 'Z'.charCodeAt(0));
  const counts = {};

  letters.forEach(letter =>
    counts[String.fromCharCode(letter)] = users.filter(
      ({ name }) => name.charCodeAt(0) === letter).length);

  return counts;
};

const calculateDomainCounts = users =>
  countBy(users.map(({ website }) => website.substring(website.lastIndexOf('.'))));

class SearchPage extends Component {
  render() {
    const { users } = this.props;

    return <div>
      <ObjectTable
        headers={[ 'Letter', 'Count' ]}
        data={calculateNameCounts(users)}
      />
      <ObjectTable
        headers={[ 'Site Domain', 'Count' ]}
        data={calculateDomainCounts(users)}
      />
    </div>;
  }
}

export default connect(
  (state, props) => ({
    users: getUsers(state, props),
  }), {
    onPush: push,
  }
)(SearchPage);