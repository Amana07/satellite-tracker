import React, { Component } from 'react';

class Info extends Component {
  render() {
    const p = this.props;
    const { stations, refMode } = p;

    return (
      <div className='Info' style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <h1>Satellite tracker</h1>
        {stations && stations.length > 0 && <p>Total objects: {stations.length}</p>}
        {refMode === 0 ? <p>ECF mode</p> : <p>ECI mode</p>}
      </div>
    );
  }
}

export default Info;
