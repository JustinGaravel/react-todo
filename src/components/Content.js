import React from 'react';
import ActivityItem from './ActivityItem';

class Content extends React.Component {  
  render () {
    // const activity = this.props.activity; // ES6 destructuring
    const {activities} = this.props;
    
    return (
      <div className="content">
        <div className="line"></div>

        {/* Timeline item */}
        {activities.map((activity) => {
          return (
            <ActivityItem activity={activity} />
          );
        })}
      </div>
    )
  }
}

export default Content;